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
        <h2 class="section-title">Как работает бизнес</h2>
        <p class="section-subtitle">Простая и эффективная модель работы</p>
      </div>

      <!-- Основной процесс -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Шаг 1 -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.1s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center">
              <span class="text-[#D50404] text-xl font-bold">01</span>
            </div>
            <h3 class="text-xl font-bold">Привлечение клиентов</h3>
          </div>
          <p class="text-gray-400">
            Мы предоставляем готовые каналы привлечения клиентов через интернет и офлайн-маркетинг
          </p>
        </div>

        <!-- Шаг 2 -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.2s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center">
              <span class="text-[#D50404] text-xl font-bold">02</span>
            </div>
            <h3 class="text-xl font-bold">Консультация</h3>
          </div>
          <p class="text-gray-400">
            Наши опытные юристы проводят первичную консультацию и определяют потребности клиента
          </p>
        </div>

        <!-- Шаг 3 -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.3s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center">
              <span class="text-[#D50404] text-xl font-bold">03</span>
            </div>
            <h3 class="text-xl font-bold">Решение</h3>
          </div>
          <p class="text-gray-400">
            Разрабатываем оптимальное решение и сопровождаем клиента до получения результата
          </p>
        </div>
      </div>

      <!-- Преимущества -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="card-container animate-slide-up" style="animation-delay: 0.4s">
          <div class="flex items-center gap-3 mb-3">
            <i class="pi pi-check-circle text-[#D50404] text-xl"></i>
            <h4 class="font-bold">Без вложений</h4>
          </div>
          <p class="text-sm text-gray-400">Не требует больших инвестиций в оборудование</p>
        </div>

        <div class="card-container animate-slide-up" style="animation-delay: 0.5s">
          <div class="flex items-center gap-3 mb-3">
            <i class="pi pi-check-circle text-[#D50404] text-xl"></i>
            <h4 class="font-bold">Онлайн</h4>
          </div>
          <p class="text-sm text-gray-400">Работа из любой точки мира</p>
        </div>

        <div class="card-container animate-slide-up" style="animation-delay: 0.6s">
          <div class="flex items-center gap-3 mb-3">
            <i class="pi pi-check-circle text-[#D50404] text-xl"></i>
            <h4 class="font-bold">Автоматизация</h4>
          </div>
          <p class="text-sm text-gray-400">Все процессы автоматизированы</p>
        </div>

        <div class="card-container animate-slide-up" style="animation-delay: 0.7s">
          <div class="flex items-center gap-3 mb-3">
            <i class="pi pi-check-circle text-[#D50404] text-xl"></i>
            <h4 class="font-bold">Поддержка</h4>
          </div>
          <p class="text-sm text-gray-400">Полное сопровождение от старта</p>
        </div>
      </div>

      <!-- Призыв к действию -->
      <div class="text-center mt-16 animate-fade-in" style="animation-delay: 0.8s">
        <button 
          class="btn-primary text-lg py-3 px-8"
          @click="$emit('scroll-to-form')"
        >
          Получить бизнес-план
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