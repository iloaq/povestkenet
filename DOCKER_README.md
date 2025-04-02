# Docker-конфигурация для проекта POVESTKENET

Этот репозиторий содержит настройки Docker для развертывания проекта, включающего:
- Nuxt.js приложение (franchise.povestkenet.kz)
- WordPress сайт (povestkenet.kz)
- Nginx в качестве обратного прокси

## Структура проекта

```
.
├── docker-compose.yml     # Основной файл Docker Compose
├── Dockerfile             # Dockerfile для Nuxt.js приложения
├── nginx/                 # Конфигурация Nginx
│   ├── conf.d/            # Конфигурационные файлы для виртуальных хостов
│   ├── nginx.conf         # Основная конфигурация Nginx
│   └── ssl/               # Директория для SSL-сертификатов
├── wordpress/             # Файлы для WordPress
│   ├── data/              # Данные WordPress (игнорируются в Git)
│   ├── fix-permissions.sh # Скрипт для исправления прав доступа
│   └── php/               # Конфигурация PHP
│       └── uploads.ini    # Настройки для загрузки файлов
└── mysql/                 # Файлы для MySQL
    └── data/              # Данные MySQL (игнорируются в Git)
```

## Установка и запуск

### Предварительные требования

- Docker
- Docker Compose

### Запуск проекта

1. Клонируйте репозиторий:
   ```bash
   git clone <url-репозитория>
   cd povestkenet
   ```

2. Создайте необходимые директории:
   ```bash
   mkdir -p wordpress/data mysql/data nginx/ssl
   ```

3. Настройте права доступа:
   ```bash
   chmod +x wordpress/fix-permissions.sh
   ```

4. Запустите контейнеры:
   ```bash
   docker compose up -d
   ```

5. Исправьте права доступа для WordPress:
   ```bash
   ./wordpress/fix-permissions.sh
   ```

6. Доступ к сайтам:
   - Nuxt.js приложение: http://franchise.povestkenet.kz
   - WordPress: http://povestkenet.kz

### Настройка локального окружения

Для локальной разработки добавьте записи в файл hosts:

```
127.0.0.1 franchise.povestkenet.kz
127.0.0.1 povestkenet.kz
```

## Обслуживание

### Управление контейнерами

```bash
# Запуск контейнеров
docker compose up -d

# Остановка контейнеров
docker compose down

# Просмотр логов
docker compose logs

# Просмотр логов конкретного сервиса
docker compose logs [nginx|wordpress|mysql|nuxt-app]
```

### Исправление прав доступа WordPress

Если возникают проблемы с правами доступа в WordPress, выполните:

```bash
./wordpress/fix-permissions.sh
```

### Резервное копирование

Для создания резервной копии данных выполните:

```bash
mkdir -p backups
tar -czf backups/wordpress-data-$(date +%Y%m%d).tar.gz -C wordpress data
tar -czf backups/mysql-data-$(date +%Y%m%d).tar.gz -C mysql data
```

### Восстановление из резервной копии

```bash
tar -xzf backups/wordpress-data-YYYYMMDD.tar.gz -C wordpress
tar -xzf backups/mysql-data-YYYYMMDD.tar.gz -C mysql
./wordpress/fix-permissions.sh
docker compose restart
```

## Настройка WordPress

### Использование плагина Duplicator

1. После установки WordPress, установите плагин Duplicator
2. Загрузите файлы installer.php и архив (.zip/.daf) в корневую директорию WordPress
3. Выполните установку по адресу: http://povestkenet.kz/installer.php
4. Следуйте инструкциям мастера установки

## Настройка SSL (для продакшена)

1. Получите SSL-сертификаты
2. Поместите файлы сертификатов в директорию `nginx/ssl/`
3. Настройте конфигурацию в `nginx/conf.d/default.conf`
4. Перезапустите Nginx: `docker compose restart nginx` 