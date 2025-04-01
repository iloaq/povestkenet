<template>
  <section class="relative flex items-center  overflow-hidden py-12 md:py-16 lg:py-20">
    <!-- Удаляем старый верхний разделитель и добавляем новые эффекты -->
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
      <div class="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 class="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
          <span class="text-white/90">{{ $t('advantages.title1') }}</span>
          <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">{{ $t('advantages.title2') }}</span>
          <span class="text-white/90">{{ $t('advantages.title3') }}</span>
        </h2>
        <p class="text-base md:text-xl text-white/60">{{ $t('advantages.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <!-- Карточки преимуществ -->
        <div v-for="(advantage, index) in advantages" :key="index"
             class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300 card-container"
             :style="{ 'animation-delay': `${index * 0.1}s` }">
          <div class="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <i :class="advantage.icon" class="text-white text-lg md:text-xl"></i>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-white/90">{{ $t(advantage.title) }}</h3>
          </div>
          <p class="text-sm md:text-base text-white/60">{{ $t(advantage.description) }}</p>
        </div>
      </div>

      <div class="text-center mt-8 md:mt-12 lg:mt-16">
        <button 
          @click="$emit('scroll-to-form')"
          class="group w-full md:w-auto px-6 md:px-12 py-4 md:py-5 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                 text-white text-lg md:text-xl font-medium rounded-xl md:rounded-2xl transition-all duration-300 
                 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
        >
          <span class="relative z-10">{{ $t('advantages.cta') }}</span>
          <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const advantages = [
  {
    icon: 'pi pi-chart-line',
    title: 'advantages.demand',
    description: 'advantages.demandDescription'
  },
  {
    icon: 'pi pi-map',
    title: 'advantages.freeCities',
    description: 'advantages.freeCitiesDescription'
  },
  {
    icon: 'pi pi-dollar',
    title: 'advantages.highMargin',
    description: 'advantages.highMarginDescription'
  },
  {
    icon: 'pi pi-file-edit',
    title: 'advantages.legalChanges',
    description: 'advantages.legalChangesDescription'
  },
  {
    icon: 'pi pi-calendar',
    title: 'advantages.seasonalDemand',
    description: 'advantages.seasonalDemandDescription'
  },
  {
    icon: 'pi pi-heart',
    title: 'advantages.socialImpact',
    description: 'advantages.socialImpactDescription'
  }
]

defineEmits(['scroll-to-form'])
</script>

<style scoped>
.why-now-section {
  background: #1a1a1a;
  padding: 0 1rem;
}

.section-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@import '../assets/styles/components.css';

/* Добавляем анимацию падающих частиц */
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

/* Добавляем анимации для градиентных кругов */
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

/* Добавляем плавное появление для карточек */
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
  .animate-pulse-slow-reverse,
  .card-container {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* Оптимизация для маленьких экранов */
@media (max-width: 360px) {
  .text-sm {
    font-size: 0.75rem;
  }
  
  .text-lg {
    font-size: 1rem;
  }
  
  .rounded-xl {
    border-radius: 0.5rem;
  }
}
</style> 