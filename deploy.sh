#!/bin/bash

# Проверка наличия SSL-сертификатов
if [ ! -f "./nginx/ssl/franchise.povestkenet.kz.crt" ] || [ ! -f "./nginx/ssl/franchise.povestkenet.kz.key" ]; then
  echo "SSL-сертификаты не найдены. Создаем директорию для сертификатов..."
  mkdir -p ./nginx/ssl
  
  echo "Генерируем самоподписанные сертификаты для разработки..."
  openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout ./nginx/ssl/franchise.povestkenet.kz.key \
    -out ./nginx/ssl/franchise.povestkenet.kz.crt \
    -subj "/C=KZ/ST=Almaty/L=Almaty/O=PoveskeNet/OU=Franchise/CN=franchise.povestkenet.kz"
  
  echo "Самоподписанные сертификаты созданы."
  echo "ВНИМАНИЕ: Для продакшена замените их на настоящие сертификаты!"
fi

# Собираем и запускаем проект
echo "Запускаем Docker Compose..."
docker-compose down
docker-compose build
docker-compose up -d

echo "Проект запущен и доступен по адресу: https://franchise.povestkenet.kz"
echo "Для просмотра логов используйте: docker-compose logs -f" 