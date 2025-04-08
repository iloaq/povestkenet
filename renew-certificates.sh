#!/bin/bash

# Останавливаем nginx
docker compose stop nginx

# Обновляем сертификаты
certbot renew

# Копируем обновленные сертификаты
cp /etc/letsencrypt/live/franchise.povestkenet.kz/fullchain.pem /opt/git-repos/work/povestkenet/nginx/ssl/cert.pem
cp /etc/letsencrypt/live/franchise.povestkenet.kz/privkey.pem /opt/git-repos/work/povestkenet/nginx/ssl/key.pem

# Запускаем nginx
docker compose start nginx

echo "Сертификаты обновлены успешно!" 