<template>
  <section class="section-container section-dark">
    <!-- Фоновые элементы -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
      <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D50404] rounded-full opacity-10 blur-[100px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(213,4,4,0.1),transparent_50%)]"></div>
    </div>

    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="section-title">Почему мы лучше конкурентов</h2>
        <p class="section-subtitle">Сравните нас с другими франшизами</p>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Таблица сравнения -->
        <div class="card-container animate-slide-up">
          <div class="overflow-x-auto">
            <table class="custom-table">
              <thead>
                <tr>
                  <th class="text-left">Параметры</th>
                  <th class="text-center">Мы</th>
                  <th class="text-center">Конкуренты</th>
                </tr>
              </thead>
              <tbody>
                <!-- Опыт и экспертиза -->
                <tr>
                  <td class="font-bold">Опыт и экспертиза</td>
                  <td class="text-center">
                    <div class="flex items-center justify-center gap-2">
                      <i class="pi pi-check text-[#D50404]"></i>
                      <span>10+ лет опыта</span>
                    </div>
                  </td>
                  <td class="text-center text-gray-400">2-3 года</td>
                </tr>

                <!-- Поддержка -->
                <tr>
                  <td class="font-bold">Поддержка 24/7</td>
                  <td class="text-center">
                    <div class="flex items-center justify-center gap-2">
                      <i class="pi pi-check text-[#D50404]"></i>
                      <span>Полная поддержка</span>
                    </div>
                  </td>
                  <td class="text-center text-gray-400">Ограниченная</td>
                </tr>

                <!-- Обучение -->
                <tr>
                  <td class="font-bold">Обучение</td>
                  <td class="text-center">
                    <div class="flex items-center justify-center gap-2">
                      <i class="pi pi-check text-[#D50404]"></i>
                      <span>5 дней интенсивного обучения</span>
                    </div>
                  </td>
                  <td class="text-center text-gray-400">2-3 дня</td>
                </tr>

                <!-- Маркетинг -->
                <tr>
                  <td class="font-bold">Маркетинговая поддержка</td>
                  <td class="text-center">
                    <div class="flex items-center justify-center gap-2">
                      <i class="pi pi-check text-[#D50404]"></i>
                      <span>Готовые материалы</span>
                    </div>
                  </td>
                  <td class="text-center text-gray-400">Базовые материалы</td>
                </tr>

                <!-- Технологии -->
                <tr>
                  <td class="font-bold">Современные технологии</td>
                  <td class="text-center">
                    <div class="flex items-center justify-center gap-2">
                      <i class="pi pi-check text-[#D50404]"></i>
                      <span>Автоматизация процессов</span>
                    </div>
                  </td>
                  <td class="text-center text-gray-400">Ручная работа</td>
                </tr>

                <!-- Окупаемость -->
                <tr>
                  <td class="font-bold">Окупаемость</td>
                  <td class="text-center">
                    <div class="flex items-center justify-center gap-2">
                      <i class="pi pi-check text-[#D50404]"></i>
                      <span>3-4 месяца</span>
                    </div>
                  </td>
                  <td class="text-center text-gray-400">6-12 месяцев</td>
                </tr>

                <!-- Прибыль -->
                <tr>
                  <td class="font-bold">Средняя прибыль</td>
                  <td class="text-center">
                    <div class="flex items-center justify-center gap-2">
                      <i class="pi pi-check text-[#D50404]"></i>
                      <span>2.8M₸ в месяц</span>
                    </div>
                  </td>
                  <td class="text-center text-gray-400">1.2M₸ в месяц</td>
                </tr>

                <!-- Территория -->
                <tr>
                  <td class="font-bold">Территория</td>
                  <td class="text-center">
                    <div class="flex items-center justify-center gap-2">
                      <i class="pi pi-check text-[#D50404]"></i>
                      <span>Свободные города</span>
                    </div>
                  </td>
                  <td class="text-center text-gray-400">Конкуренция</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Ключевые преимущества -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div class="card-container animate-slide-up" style="animation-delay: 0.1s">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-4">
              <i class="pi pi-shield text-[#D50404] text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Проверенная модель</h3>
            <p class="text-gray-400">Успешно работающая бизнес-модель с подтвержденной прибылью</p>
          </div>

          <div class="card-container animate-slide-up" style="animation-delay: 0.2s">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-4">
              <i class="pi pi-users text-[#D50404] text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Команда экспертов</h3>
            <p class="text-gray-400">Профессиональная поддержка на всех этапах развития</p>
          </div>

          <div class="card-container animate-slide-up" style="animation-delay: 0.3s">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-4">
              <i class="pi pi-chart-line text-[#D50404] text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Быстрый старт</h3>
            <p class="text-gray-400">Запуск бизнеса через 30 дней после подписания договора</p>
          </div>
        </div>

        <!-- Кнопка призыва -->
        <div class="text-center mt-12 animate-slide-up" style="animation-delay: 0.4s">
          <button 
            class="btn-primary px-8 py-4 text-lg"
            @click="$emit('scroll-to-form')"
          >
            Стать нашим партнером
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['scroll-to-form'])
</script>

<style scoped>
@import '../assets/styles/components.css';
</style> 