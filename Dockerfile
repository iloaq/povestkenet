# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем остальные файлы проекта
COPY . .

# Собираем Nuxt-приложение
RUN npm run build

# Устанавливаем PM2 для управления процессом
RUN npm install -g pm2

# Экспортируем порт
EXPOSE 3000

# Запуск через PM2
CMD ["pm2-runtime", "start", "npm", "--", "start"] 