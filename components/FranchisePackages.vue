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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Стандартный пакет -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.1s">
          <div class="text-center mb-8">
            <div class="w-16 h-16 rounded-full bg-[#D50404]/10 flex items-center justify-center mx-auto mb-4">
              <i class="pi pi-star text-[#D50404] text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Стандарт</h3>
            <div class="card-price">
              <span class="text-4xl font-bold">2 500 000₸</span>
              <span class="text-gray-400">/ единоразово</span>
            </div>
            <p class="text-gray-400 mt-4">Идеально для начинающих предпринимателей</p>
          </div>

          <ul class="feature-list space-y-4 mb-8">
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Базовое обучение (3 дня)</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Стандартный пакет документов</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Базовые маркетинговые материалы</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Поддержка в рабочее время</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Доступ к базовой CRM</span>
            </li>
          </ul>

          <div class="text-center">
            <button class="btn-outline w-full" @click="$emit('scroll-to-form')">
              Выбрать пакет
            </button>
          </div>
        </div>

        <!-- Премиум пакет -->
        <div class="card-container animate-slide-up transform scale-105" style="animation-delay: 0.2s">
          <div class="absolute top-0 right-0 bg-[#D50404] text-white px-4 py-1 rounded-bl-lg text-sm">
            Популярный выбор
          </div>
          
          <div class="text-center mb-8">
            <div class="w-16 h-16 rounded-full bg-[#D50404]/20 flex items-center justify-center mx-auto mb-4">
              <i class="pi pi-crown text-[#D50404] text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Премиум</h3>
            <div class="card-price">
              <span class="text-4xl font-bold">3 500 000₸</span>
              <span class="text-gray-400">/ единоразово</span>
            </div>
            <p class="text-gray-400 mt-4">Оптимальный выбор для быстрого старта</p>
          </div>

          <ul class="feature-list space-y-4 mb-8">
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Расширенное обучение (5 дней)</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Полный пакет документов</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Расширенные маркетинговые материалы</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Поддержка 24/7</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Доступ к премиум CRM</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Персональный менеджер</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Гарантия прибыли 2.8M₸</span>
            </li>
          </ul>

          <div class="text-center">
            <button class="btn-primary w-full" @click="$emit('scroll-to-form')">
              Выбрать пакет
            </button>
          </div>
        </div>

        <!-- VIP пакет -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.3s">
          <div class="text-center mb-8">
            <div class="w-16 h-16 rounded-full bg-[#D50404]/30 flex items-center justify-center mx-auto mb-4">
              <i class="pi pi-gem text-[#D50404] text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">VIP</h3>
            <div class="card-price">
              <span class="text-4xl font-bold">5 000 000₸</span>
              <span class="text-gray-400">/ единоразово</span>
            </div>
            <p class="text-gray-400 mt-4">Максимальные возможности для роста</p>
          </div>

          <ul class="feature-list space-y-4 mb-8">
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>VIP обучение (7 дней)</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Расширенный пакет документов</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>VIP маркетинговые материалы</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Поддержка 24/7</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Доступ к VIP CRM</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Персональный менеджер</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Гарантия прибыли 3.5M₸</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Приоритетная поддержка</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-check text-[#D50404]"></i>
              <span>Эксклюзивные бонусы</span>
            </li>
          </ul>

          <div class="text-center">
            <button class="btn-outline w-full" @click="$emit('scroll-to-form')">
              Выбрать пакет
            </button>
          </div>
        </div>
      </div>

      <!-- Дополнительные преимущества -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div class="card-container animate-slide-up" style="animation-delay: 0.4s">
          <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-4">
            <i class="pi pi-shield text-[#D50404] text-xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">Гарантия возврата</h3>
          <p class="text-gray-400">Возврат инвестиций в течение 3 месяцев или деньги обратно</p>
        </div>

        <div class="card-container animate-slide-up" style="animation-delay: 0.5s">
          <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-4">
            <i class="pi pi-users text-[#D50404] text-xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">Сообщество партнеров</h3>
          <p class="text-gray-400">Доступ к закрытому сообществу успешных предпринимателей</p>
        </div>

        <div class="card-container animate-slide-up" style="animation-delay: 0.6s">
          <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-4">
            <i class="pi pi-chart-line text-[#D50404] text-xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-2">Быстрый старт</h3>
          <p class="text-gray-400">Запуск бизнеса через 30 дней после подписания договора</p>
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