<template>
  <section id="guarantees" class="relative  flex items-center  overflow-hidden py-12 md:py-16 lg:py-20">
    <!-- Фоновые элементы -->
    <div class="absolute inset-0">
      <!-- Анимированные частицы -->
      <div class="absolute top-0 left-0 w-full h-64 overflow-hidden opacity-40">
        <div v-for="i in 5" :key="i" 
             class="absolute w-1 h-1 bg-[#D50404] rounded-full"
             :style="{
               left: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 2}s`,
               animation: 'particle-fall 3s linear infinite'
             }">
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Заголовок -->
      <div class="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
          <span class="text-white/90">{{ $t('guarantees.title1') }}</span>
          <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">{{ $t('guarantees.title2') }}</span>
        </h2>
        <p class="text-lg md:text-xl text-white/60 px-2">{{ $t('guarantees.description') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <!-- Карточки гарантий -->
        <div v-for="(guarantee, index) in guarantees" :key="index"
             class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/[0.05] 
                    shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300 
                    card-container"
             :style="{ 'animation-delay': `${index * 0.1}s` }">
          
          <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#D50404]/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300">
            <i :class="guarantee.icon" class="text-[#D50404] text-xl md:text-2xl"></i>
          </div>

          <h3 class="text-xl md:text-2xl font-bold text-white/90 mb-3 md:mb-4">{{ $t(`guarantees.items.${guarantee.title}.title`) }}</h3>
          <p class="text-sm md:text-base text-white/60 mb-4 md:mb-6">{{ $t(`guarantees.items.${guarantee.title}.description`) }}</p>

          <ul class="space-y-3 md:space-y-4">
            <li v-for="(feature, fIndex) in $t(`guarantees.items.${guarantee.title}.features`).split(',')" 
                :key="fIndex"
                class="flex items-center gap-2 md:gap-3 group/item">
              <div class="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#D50404]/10 flex items-center justify-center
                          group-hover/item:bg-gradient-to-r from-[#D50404] to-[#FF0000] transition-all duration-300">
                <i class="pi pi-check text-[#D50404] text-sm md:text-base group-hover/item:text-white transition-colors duration-300"></i>
              </div>
              <span class="text-sm md:text-base text-white/70">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Кнопка -->
      <div class="text-center mt-8 md:mt-12 lg:mt-16">
        <button 
          @click="$emit('scroll-to-form')"
          class="group w-full md:w-auto px-8 md:px-12 py-4 md:py-5 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                 text-white text-lg md:text-xl font-medium rounded-xl md:rounded-2xl transition-all duration-300 
                 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
        >
          <span class="relative z-10">{{ $t('guarantees.button') }}</span>
          <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const guarantees = [
  {
    icon: 'pi pi-shield',
    title: 'profit',
    description: 'profit.description',
    features: 'profit.features'
  },
  {
    icon: 'pi pi-clock',
    title: 'support',
    description: 'support.description',
    features: 'support.features'
  },
  {
    icon: 'pi pi-sync',
    title: 'technology',
    description: 'technology.description',
    features: 'technology.features'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'growth',
    description: 'growth.description',
    features: 'growth.features'
  },
  {
    icon: 'pi pi-users',
    title: 'community',
    description: 'community.description',
    features: 'community.features'
  },
  {
    icon: 'pi pi-file-edit',
    title: 'legal',
    description: 'legal.description',
    features: 'legal.features'
  }
]

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

  .card-container {
    animation-duration: 0.4s;
  }

  /* Оптимизация анимации частиц */
  @keyframes particle-fall {
    0% {
      transform: translateY(-20px) rotate(0deg);
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
}

/* Оптимизация для touch-устройств */
@media (hover: none) {
  .group:active {
    transform: scale(0.98);
  }
  
  button:active {
    transform: scale(0.98) !important;
  }

  .group:active {
    opacity: 0.8;
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