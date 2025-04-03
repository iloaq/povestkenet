#!/bin/bash

# Скрипт для получения SSL-сертификатов Let's Encrypt

# Домены
DOMAINS=("franchise.povestkenet.kz" "povestkenet.kz")
EMAIL="davidmalhassyan@gmail.com"  # Укажите реальный email для уведомлений от Let's Encrypt

# Проверяем наличие временной конфигурации nginx
if [ ! -f ./nginx/conf.d/temp-ssl.conf ]; then
  echo "Создаем временную конфигурацию nginx для Let's Encrypt..."
  cat > ./nginx/conf.d/temp-ssl.conf << EOF
server {
    listen 80;
    server_name franchise.povestkenet.kz povestkenet.kz;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    location / {
        return 200 "Сервер в процессе настройки SSL. Пожалуйста, подождите.";
        add_header Content-Type text/plain;
    }
}
EOF
fi

# Перезапускаем nginx с временной конфигурацией
echo "Перезапускаем nginx с временной конфигурацией..."
docker compose restart nginx
sleep 5

# Получаем сертификаты
for domain in "${DOMAINS[@]}"; do
  echo "Получаем сертификат для $domain..."
  
  docker compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $domain
    
  echo "Сертификат для $domain получен!"
done

# Удаляем временную конфигурацию
rm -f ./nginx/conf.d/temp-ssl.conf

# Перезапускаем nginx с основной конфигурацией
echo "Перезапускаем nginx с основной конфигурацией..."
docker compose restart nginx

echo "Все сертификаты получены успешно!"
echo "Теперь вы можете активировать редирект на HTTPS в файле nginx/conf.d/default.conf"

# Добавляем автоматическое обновление сертификатов
echo "Настраиваем автоматическое обновление сертификатов..."
echo "0 3 * * * root $(pwd)/renew-certificates.sh >> /var/log/cron.log 2>&1" > /etc/cron.d/certbot-renew
chmod 0644 /etc/cron.d/certbot-renew

# Создаем скрипт обновления
cat > ./renew-certificates.sh << EOF
#!/bin/bash
cd $(pwd)
docker compose run --rm certbot renew
docker compose restart nginx
EOF

chmod +x ./renew-certificates.sh

echo "Готово! Сертификаты будут автоматически обновляться." 