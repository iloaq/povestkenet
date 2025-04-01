<template>
  <section class="relative flex items-center  overflow-hidden py-12 md:py-16 lg:py-20">

    <div class="container mx-auto px-4 relative z-10 py-8 md:py-12 lg:py-20">
      <!-- Верхняя плашка -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 mb-8 md:mb-12">
        <div class="flex items-center gap-3 md:gap-4 bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-full lg:w-auto">
          <div class="flex -space-x-2 md:-space-x-3">
            <div v-for="i in 3" :key="i" 
                 class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#D50404]/80 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl"></div>
          </div>
          <div>
            <div class="text-white/90 font-medium text-sm md:text-base">{{ $t('hero.views') }}</div>
            <div class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent font-semibold text-sm md:text-base">
              {{ $t('hero.viewsDescription') }}
            </div>
          </div>
        </div>
        
        <div class="bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-full lg:w-auto">
          <div class="text-white/90 font-medium text-sm md:text-base">{{ $t('hero.timer') }}</div>
          <div class="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">
            23:45:60
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Левая колонка -->
        <div class="space-y-6 md:space-y-8">
          <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold">
            <span class="text-white/90">ПОВЕСТКЕ<span class="text-[#D50404]">НЕТ</span></span>
            <span class="block mt-3 md:mt-4 leading-tight">
              <span class="text-white/90">{{ $t('hero.subtitle1') }}</span>
              <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent"> {{ $t('hero.subtitle2') }}</span>
              <span class="text-white/90"> {{ $t('hero.subtitle3') }}</span>
              <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent font-bold"> {{ $t('hero.subtitle4') }}</span>
              <span class="text-white/90"> {{ $t('hero.subtitle5') }}</span>
            </span>
          </h1>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div class="bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300">
              <div class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">
                {{ $t('hero.profit') }}
              </div>
              <div class="text-white/90 mt-2 font-medium text-sm md:text-base">{{ $t('hero.profitDescription') }}</div>
            </div>
            <div class="bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300">
              <div class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">
                {{ $t('hero.averageCheck') }}
              </div>
              <div class="text-white/90 mt-2 font-medium text-sm md:text-base">{{ $t('hero.averageCheckDescription') }}</div>
            </div>
          </div>

          <button 
            @click="$emit('scroll-to-form')"
            class="group w-full lg:w-auto px-8 md:px-12 py-4 md:py-5 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] text-white text-lg md:text-xl font-medium rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
          >
            <span class="relative z-10">{{ $t('hero.cta') }}</span>
            <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <!-- Правая колонка -->
        <div class="relative group">
          <div class="aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl relative border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <!-- Превью видео -->
            <div class="absolute inset-0 bg-[url('/video-preview.jpg')] bg-cover bg-center"></div>
            
            <!-- Оверлей при наведении -->
            <div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
            
            <!-- Кнопка плей -->
            <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#D50404] to-[#FF0000] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(213,4,4,0.3)]">
              <i class="pi pi-play text-white text-xl md:text-2xl ml-1"></i>
            </button>
          </div>

          <!-- Блики на видео -->
          <div class="absolute -inset-1 bg-gradient-to-r from-[#D50404] to-[#FF0000] rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-300"></div>
        </div>
      </div>
    </div>

    <!-- Добавляем новый переход в конце HeroSection -->
    <div class="absolute -bottom-32 left-0 w-full h-48 md:h-64 pointer-events-none">
      <!-- Волнистый переход -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg class="w-full h-32" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path d="M0 25L48 31.7C96 38.3 192 51.7 288 55.8C384 60 480 55 576 46.7C672 38.3 768 26.7 864 25C960 23.3 1056 31.7 1152 36.7C1248 41.7 1344 43.3 1392 44.2L1440 45V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V25Z" 
                fill="url(#gradient-fill)"/>
          <defs>
            <linearGradient id="gradient-fill" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#D50404" stop-opacity="0.1"/>
              <stop offset="0.5" stop-color="#FF0000" stop-opacity="0.15"/>
              <stop offset="1" stop-color="#D50404" stop-opacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Градиентная линия -->
      <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D50404] to-transparent opacity-30"></div>

      <!-- Светящиеся точки -->
      <div class="absolute bottom-0 w-full flex justify-between px-4">
        <div class="w-2 h-2 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] shadow-[0_0_10px_rgba(213,4,4,0.5)] animate-pulse"></div>
        <div class="w-2 h-2 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] shadow-[0_0_10px_rgba(213,4,4,0.5)] animate-pulse" style="animation-delay: 0.5s"></div>
        <div class="w-2 h-2 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] shadow-[0_0_10px_rgba(213,4,4,0.5)] animate-pulse" style="animation-delay: 1s"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['scroll-to-form'])
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
  text-align: center;
  z-index: 1;
}

.text-gradient {
  background: linear-gradient(to right, #D50404, #FF0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Оптимизация для мобильных устройств */
@media (max-width: 768px) {
  .backdrop-blur-xl {
    backdrop-filter: blur(8px);
  }
}

/* Оптимизация для touch-устройств */
@media (hover: none) {
  .group:active {
    transform: scale(0.98);
  }
  
  button:active {
    transform: scale(0.98) !important;
  }
}

/* Улучшенная производительность анимаций */
@media (prefers-reduced-motion: reduce) {
  .group-hover\:scale-110,
  .hover\:scale-105 {
    transform: none;
  }
}
</style> 