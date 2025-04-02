#!/bin/bash

# Скрипт для исправления прав доступа в WordPress
echo "Fixing WordPress permissions..."

# Расположение директории WordPress
WP_DIR="/opt/git-repos/work/povestkenet/wordpress/data"

# Установка прав доступа для wp-content и всех поддиректорий
chown -R www-data:www-data $WP_DIR/wp-content
find $WP_DIR/wp-content -type d -exec chmod 755 {} \;
find $WP_DIR/wp-content -type f -exec chmod 644 {} \;

# Особое внимание директории uploads
mkdir -p $WP_DIR/wp-content/uploads
chown -R www-data:www-data $WP_DIR/wp-content/uploads
chmod -R 755 $WP_DIR/wp-content/uploads

echo "Permissions fixed!" 