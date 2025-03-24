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
        <h2 class="section-title">Наши гарантии</h2>
        <p class="section-subtitle">Мы обеспечиваем полную поддержку на всех этапах</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Гарантия 1 -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.1s">
          <div class="w-16 h-16 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-6">
            <i class="pi pi-shield-check text-[#D50404] text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Гарантия прибыли</h3>
          <p class="text-gray-400 mb-6">Мы гарантируем окупаемость инвестиций в течение 6 месяцев при соблюдении нашей бизнес-модели</p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Финансовая поддержка</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Маркетинговая помощь</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Обучение персонала</span>
            </li>
          </ul>
        </div>

        <!-- Гарантия 2 -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.2s">
          <div class="w-16 h-16 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-6">
            <i class="pi pi-handshake text-[#D50404] text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Поддержка 24/7</h3>
          <p class="text-gray-400 mb-6">Наша команда экспертов всегда готова помочь вам с любыми вопросами и задачами</p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Техническая поддержка</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Консультации экспертов</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Решение проблем</span>
            </li>
          </ul>
        </div>

        <!-- Гарантия 3 -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.3s">
          <div class="w-16 h-16 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-6">
            <i class="pi pi-sync text-[#D50404] text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Обновление технологий</h3>
          <p class="text-gray-400 mb-6">Бесплатное обновление всех технологий и методик в течение всего срока сотрудничества</p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Новые методики</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Обновление ПО</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Обучение новинкам</span>
            </li>
          </ul>
        </div>

        <!-- Гарантия 4 -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.4s">
          <div class="w-16 h-16 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-6">
            <i class="pi pi-chart-line text-[#D50404] text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Рост бизнеса</h3>
          <p class="text-gray-400 mb-6">Гарантируем постоянный рост вашего бизнеса и увеличение прибыли</p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Масштабирование</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Новые рынки</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Развитие сети</span>
            </li>
          </ul>
        </div>

        <!-- Гарантия 5 -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.5s">
          <div class="w-16 h-16 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-6">
            <i class="pi pi-users text-[#D50404] text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Сообщество партнеров</h3>
          <p class="text-gray-400 mb-6">Доступ к закрытому сообществу успешных предпринимателей</p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Обмен опытом</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Совместные проекты</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Нетворкинг</span>
            </li>
          </ul>
        </div>

        <!-- Гарантия 6 -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.6s">
          <div class="w-16 h-16 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-6">
            <i class="pi pi-file-edit text-[#D50404] text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Юридическая защита</h3>
          <p class="text-gray-400 mb-6">Полная юридическая поддержка и защита ваших интересов</p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Правовая помощь</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Документация</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-[#D50404]"></i>
              <span>Защита бренда</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Кнопка призыва -->
      <div class="text-center mt-12 animate-slide-up" style="animation-delay: 0.7s">
        <button 
          class="btn-primary px-8 py-4 text-lg"
          @click="$emit('scroll-to-form')"
        >
          Получить подробную информацию
        </button>
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