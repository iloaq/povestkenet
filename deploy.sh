#!/bin/bash

# Создаем директорию для конфигурации Nginx
mkdir -p ./nginx/conf.d
mkdir -p ./nginx/ssl

# Собираем и запускаем проект
echo "Запускаем Docker Compose..."
docker-compose down
docker-compose build
docker-compose up -d

echo "Проект запущен и доступен по адресу: http://franchise.povestkenet.kz"
echo "Для просмотра логов используйте: docker-compose logs -f" 