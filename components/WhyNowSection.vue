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
        <h2 class="section-title">Почему сейчас самое время?</h2>
        <p class="section-subtitle">Идеальный момент для запуска бизнеса на юридических услугах</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Рост рынка -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.1s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center">
              <i class="pi pi-chart-line text-[#D50404] text-xl"></i>
            </div>
            <h3 class="text-xl font-bold">Рост рынка</h3>
          </div>
          <p class="text-gray-400">
            Рынок юридических услуг растет на 25% ежегодно. Спрос превышает предложение, что создает идеальные условия для новых игроков.
          </p>
        </div>

        <!-- Низкая конкуренция -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.2s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center">
              <i class="pi pi-users text-[#D50404] text-xl"></i>
            </div>
            <h3 class="text-xl font-bold">Низкая конкуренция</h3>
          </div>
          <p class="text-gray-400">
            В большинстве регионов рынок юридических услуг не насыщен. У вас есть возможность занять лидирующие позиции.
          </p>
        </div>

        <!-- Цифровизация -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.3s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center">
              <i class="pi pi-globe text-[#D50404] text-xl"></i>
            </div>
            <h3 class="text-xl font-bold">Цифровизация</h3>
          </div>
          <p class="text-gray-400">
            Переход на онлайн-формат работы открывает новые возможности для масштабирования бизнеса и снижения издержек.
          </p>
        </div>

        <!-- Изменения в законодательстве -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.4s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center">
              <i class="pi pi-file-edit text-[#D50404] text-xl"></i>
            </div>
            <h3 class="text-xl font-bold">Изменения в законодательстве</h3>
          </div>
          <p class="text-gray-400">
            Частые изменения в законодательстве увеличивают спрос на юридические услуги и консультации.
          </p>
        </div>

        <!-- Экономическая ситуация -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.5s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center">
              <i class="pi pi-dollar text-[#D50404] text-xl"></i>
            </div>
            <h3 class="text-xl font-bold">Экономическая ситуация</h3>
          </div>
          <p class="text-gray-400">
            В условиях экономической нестабильности бизнесу как никогда нужна юридическая поддержка и защита.
          </p>
        </div>

        <!-- Технологический прорыв -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.6s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center">
              <i class="pi pi-mobile text-[#D50404] text-xl"></i>
            </div>
            <h3 class="text-xl font-bold">Технологический прорыв</h3>
          </div>
          <p class="text-gray-400">
            Новые технологии позволяют автоматизировать рутинные процессы и повысить эффективность работы.
          </p>
        </div>
      </div>

      <!-- Призыв к действию -->
      <div class="text-center mt-16 animate-fade-in" style="animation-delay: 0.7s">
        <button 
          class="btn-primary text-lg py-3 px-8"
          @click="$emit('scroll-to-form')"
        >
          Начать бизнес сейчас
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