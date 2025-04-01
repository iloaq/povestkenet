<template>
  <section class="relative  flex items-center  overflow-hidden py-12 md:py-16">
    <!-- Фоновые эффекты -->
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Заголовок -->
      <div class="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 class="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
          <span class="text-white/90">{{ $t('successStory.title1') }}</span>
          <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">{{ $t('successStory.title2') }}</span>
        </h2>
        <p class="text-base md:text-xl text-white/60">{{ $t('successStory.description') }}</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- История успеха -->
        <div class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300 card-container">
          <!-- Профиль -->
          <div class="flex items-center gap-3 md:gap-6 mb-6 md:mb-8">
            <div class="w-16 h-16 md:w-24 md:h-24 rounded-lg md:rounded-xl overflow-hidden bg-gradient-to-r from-[#D50404] to-[#FF0000]">
              <div class="w-full h-full rounded-lg md:rounded-xl overflow-hidden">
                <img src="/hero-img.png" alt="Давид" class="w-full h-full object-contain scale-125">
              </div>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-white/90">Давид</h3>
              <p class="text-sm md:text-base text-white/60">Петропавловск</p>
            </div>
          </div>

          <!-- Доход -->
          <div class="bg-gradient-to-r from-[#D50404]/10 to-transparent p-4 md:p-6 rounded-lg md:rounded-xl mb-6 md:mb-8 border border-[#D50404]/20">
            <div class="text-xs md:text-sm text-white/60 mb-1">{{ $t('successStory.income') }}</div>
            <div class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">
              3 800 000 ₸
            </div>
          </div>

          <!-- История -->
          <div class="space-y-4 md:space-y-6 mb-6 md:mb-8">
            <h4 class="text-lg md:text-xl font-bold text-white/90">{{ $t('successStory.history') }}</h4>
            <p class="text-base md:text-lg text-white/70 leading-relaxed">
              {{ $t('successStory.historyText') }}
            </p>
          </div>

          <!-- Путь к успеху -->
          <div class="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <h4 class="text-lg md:text-xl font-bold text-white/90">{{ $t('successStory.path') }}</h4>
            <div class="space-y-4 md:space-y-6">
              <div v-for="(item, index) in ['historyItem1', 'historyItem2', 'historyItem3', 'historyItem4']" 
                   :key="index"
                   class="flex items-center gap-3 md:gap-4">
                <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <i :class="`pi pi-${['file-edit', 'book', 'flag', 'chart-line'][index]} text-white text-lg md:text-xl`"></i>
                </div>
                <div>
                  <div class="text-base md:text-lg font-bold text-white/90">{{ $t(`successStory.${item}`) }}</div>
                  <div class="text-sm md:text-base text-white/60">{{ $t(`successStory.${item}Description`) }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Достижения -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div v-for="(stat, index) in ['averageCheck', 'clientsPerMonth', 'revenue', 'netProfit']" 
                 :key="index"
                 class="bg-white/[0.03] rounded-lg md:rounded-xl p-4 md:p-5 border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-300">
              <div class="text-xs md:text-sm text-white/60 mb-1">{{ $t(`successStory.${stat}`) }}</div>
              <div class="text-xl md:text-2xl font-bold text-white/90">
                {{ ['535 000 ₸', '7', '3 745 000 ₸', '2 800 000 ₸'][index] }}
              </div>
              <div class="text-xs md:text-sm bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent mt-1">
                {{ $t(`successStory.${stat}Description`) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Кнопка -->
        <div class="text-center mt-8 md:mt-12">
          <button 
            @click="$emit('scroll-to-form')"
            class="group w-full md:w-auto px-8 md:px-12 py-4 md:py-5 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                   text-white text-lg md:text-xl font-medium rounded-xl md:rounded-2xl transition-all duration-300 
                   transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
          >
            <span class="relative z-10">{{ $t('successStory.button') }}</span>
            <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

/* Анимация падающих частиц */
@keyframes particle-fall {
  0% {
    transform: translateY(-20px) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateY(200px) rotate(360deg);
    opacity: 0;
  }
}

/* Анимации для градиентных кругов */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.1; transform: scale(1.05); }
}

@keyframes pulse-slow-reverse {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.15; transform: scale(1.05); }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slow-reverse {
  animation: pulse-slow-reverse 8s ease-in-out infinite reverse;
}

/* Плавное появление для карточек */
.card-container {
  opacity: 0;
  transform: translateY(20px);
  animation: card-appear 0.6s ease-out forwards;
}

@keyframes card-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Оптимизация для мобильных устройств */
@media (max-width: 768px) {
  .backdrop-blur-xl {
    backdrop-filter: blur(8px);
  }

  @keyframes particle-fall {
    0% {
      transform: translateY(-10px) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(100px) rotate(360deg);
      opacity: 0;
    }
  }

  .animate-pulse-slow,
  .animate-pulse-slow-reverse {
    animation-duration: 10s;
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
  .animate-pulse-slow,
  .animate-pulse-slow-reverse {
    animation: none;
  }

  .card-container {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style> 