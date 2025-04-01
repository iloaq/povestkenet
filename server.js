const express = require('express');
const { Nuxt, Builder } = require('nuxt');

const config = require('./nuxt.config.js');

// Создаем новое express приложение
const app = express();

// Включаем production режим
config.dev = false;

// Создаем экземпляр nuxt
const nuxt = new Nuxt(config);

// Добавляем middleware nuxt
app.use(nuxt.render);

// Слушаем порт из переменных окружения Plesk
const port = process.env.PORT || 3000;

// Сборка и запуск приложения
async function start() {
  try {
    // Собираем приложение
    await new Builder(nuxt).build();
    
    // Запускаем сервер
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

start();