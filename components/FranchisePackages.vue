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
        <h2 class="section-title">Пакеты франшизы</h2>
        <p class="section-subtitle">Выберите оптимальный пакет для вашего бизнеса</p>
      </div>

      <!-- Основные пакеты -->
      <div class="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
        <!-- Премиальный пакет -->
        <div class="card-container animate-slide-up transform scale-105">
          <div class="absolute top-0 right-0 bg-[#D50404] text-white px-4 py-1 rounded-bl-lg text-sm">
            Эксклюзивное предложение
          </div>
          
          <div class="text-center mb-8">
            <div class="w-16 h-16 rounded-full bg-[#D50404]/20 flex items-center justify-center mx-auto mb-4">
              <i class="pi pi-crown text-[#D50404] text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Премиальный пакет</h3>
            <div class="card-price">
              <span class="text-4xl font-bold">7 000 000₸</span>
              <span class="text-gray-400">/ единоразово</span>
            </div>
            <p class="text-gray-400 mt-4">Полный комплект для максимально быстрого старта</p>
          </div>

          <ul class="feature-list space-y-4 mb-8">
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Индивидуальное VIP обучение (7 дней)</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Полный пакет юридических документов</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Премиальные маркетинговые материалы</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Круглосуточная поддержка 24/7</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Доступ к расширенной CRM-системе</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Персональный менеджер проекта</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Гарантия прибыли от 3.5M₸ в месяц</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Эксклюзивная территория</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Готовая база клиентов</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Бизнес под ключ за 30 дней</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Полная автоматизация процессов</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Доступ к базе поставщиков</span>
            </li>
          </ul>

          <div class="text-center">
            <button class="btn-primary w-full" @click="$emit('scroll-to-form')">
              Получить предложение
            </button>
          </div>
        </div>
      </div>

      <!-- Преимущества -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div class="card-container animate-slide-up" style="animation-delay: 0.4s">
          <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-4">
            <i class="pi pi-shield text-[#D50404] text-xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">Гарантия результата</h3>
          <p class="text-gray-400">Гарантированный доход от 3.5 млн тенге в месяц или возврат инвестиций</p>
        </div>

        <div class="card-container animate-slide-up" style="animation-delay: 0.5s">
          <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-4">
            <i class="pi pi-clock text-[#D50404] text-xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">Быстрый запуск</h3>
          <p class="text-gray-400">Полностью готовый бизнес через 30 дней после подписания договора</p>
        </div>

        <div class="card-container animate-slide-up" style="animation-delay: 0.6s">
          <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-4">
            <i class="pi pi-users text-[#D50404] text-xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">Поддержка 24/7</h3>
          <p class="text-gray-400">Персональный менеджер и круглосуточная поддержка на всех этапах</p>
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