<template>
  <section class="section-container section-dark min-h-screen flex items-center">
    <!-- Фоновые элементы -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
      <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D50404] rounded-full opacity-10 blur-[100px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(213,4,4,0.1),transparent_50%)]"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Левая колонка -->
        <div class="lg:w-1/2 text-center lg:text-left">
          <!-- Счетчик просмотров -->
          <div class="inline-flex items-center gap-2 glassmorphism-dark px-4 py-2 rounded-full mb-6 animate-fade-in">
            <div class="w-2 h-2 rounded-full bg-[#D50404] animate-pulse"></div>
            <span>Сейчас просматривают: <b>14</b> человек</span>
          </div>

          <!-- Таймер акции -->
          <div class="card-container mb-8 animate-slide-up" style="animation-delay: 0.1s">
            <p class="text-lg font-bold">До конца акции осталось:</p>
            <div class="text-3xl font-bold mt-2 text-[#D50404]">23:45:60</div>
          </div>

          <!-- Заголовок -->
          <h1 class="section-title text-left !mb-6 animate-fade-in" style="animation-delay: 0.2s">
            ГОТОВЫЙ БИЗНЕС НА ЮРИДИЧЕСКИХ УСЛУГАХ
            <span class="text-[#D50404] block mt-4">С ГАРАНТИРОВАННОЙ ПРИБЫЛЬЮ ОТ 2 500 000 ₸ В МЕСЯЦ</span>
          </h1>

          <!-- Ключевые показатели -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="card-container animate-slide-up" style="animation-delay: 0.3s">
              <div class="text-2xl font-bold text-[#D50404]">90%</div>
              <div class="text-sm text-gray-400">партнеров окупают вложения за 3 месяца</div>
            </div>
            <div class="card-container animate-slide-up" style="animation-delay: 0.4s">
              <div class="text-2xl font-bold text-[#D50404]">535 000₸</div>
              <div class="text-sm text-gray-400">средний чек с клиента</div>
            </div>
          </div>

          <!-- Кнопка призыва -->
          <button 
            class="btn-primary text-xl py-4 w-full lg:w-auto animate-slide-up"
            style="animation-delay: 0.5s"
            @click="$emit('scroll-to-form')"
          >
            ПОЛУЧИТЬ БИЗНЕС-ПЛАН + БОНУС 500 000₸
          </button>

          <!-- Социальное доказательство -->
          <div class="mt-8 flex items-center justify-center lg:justify-start gap-4 animate-fade-in" style="animation-delay: 0.6s">
            <div class="flex -space-x-2">
              <div v-for="i in 3" :key="i" class="w-8 h-8 rounded-full bg-[#D50404] border-2 border-black"></div>
            </div>
            <div class="text-sm">
              <div class="font-bold">247 человек</div>
              <div class="text-gray-400">уже запросили расчет</div>
            </div>
          </div>
        </div>

        <!-- Правая колонка - видео -->
        <div class="lg:w-1/2 animate-slide-up" style="animation-delay: 0.7s">
          <div class="card-container p-0 overflow-hidden">
            <div class="aspect-video flex items-center justify-center">
              <div class="w-20 h-20 rounded-full bg-[#D50404] flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all">
                <i class="pi pi-play text-white text-2xl"></i>
              </div>
            </div>
          </div>
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

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style> 