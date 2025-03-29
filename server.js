const express = require('express');
const { Nuxt, Builder } = require('nuxt');

const config = require('./nuxt.config.js');

// Создаем новое express приложение
const app = express();

// Слушаем порт 3000 или PORT из переменных окружения
app.listen(process.env.PORT || 3000);

// Включаем production режим
config.dev = false;

// Создаем экземпляр nuxt
const nuxt = new Nuxt(config);

// Добавляем middleware nuxt
app.use(nuxt.render);

// Автоматическая сборка при старте
new Builder(nuxt).build().catch(err => {
  console.error(err);
  process.exit(1);
});