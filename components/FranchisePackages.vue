<template>
  <section class="relative flex items-center overflow-hidden py-12 md:py-16 lg:py-20">
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Заголовок -->
      <div class="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
          <span class="text-white/90">{{ $t('franchisePackages.title1') }}</span>
          <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">{{ $t('franchisePackages.title2') }}</span>
        </h2>
        <p class="text-lg md:text-xl text-white/60 px-2">{{ $t('franchisePackages.description') }}</p>
      </div>

      <!-- Премиальный пакет -->
      <div class="max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
        <div class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/[0.05] 
                    shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300
                    relative overflow-hidden">
          <!-- Эксклюзивная метка -->
          <div class="absolute -right-14 md:-right-12 top-6 md:top-8 bg-gradient-to-r from-[#D50404] to-[#FF0000] text-white px-16 py-1 md:py-2 
                      transform rotate-45 text-xs md:text-sm font-medium">
            {{ $t('franchisePackages.exclusiveOffer') }}
          </div>

          <div class="text-center mb-6 md:mb-8">
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                        flex items-center justify-center mx-auto mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <i class="pi pi-crown text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white/90">{{ $t('franchisePackages.premium.title') }}</h3>
            <div class="mb-3 md:mb-4">
              <span class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">
                {{ $t('franchisePackages.premium.price') }}
              </span>
              <span class="text-white/60 ml-2 text-sm md:text-base">/ {{ $t('franchisePackages.premium.priceDescription') }}</span>
            </div>
            <p class="text-white/60 text-base md:text-lg">{{ $t('franchisePackages.premium.description') }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div v-for="(feature, index) in features" :key="index"
                 class="flex items-center gap-3 md:gap-4 group/feature">
              <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                          flex items-center justify-center shrink-0 opacity-80 group-hover/feature:opacity-100 transition-opacity">
                <i class="pi pi-check text-white text-sm md:text-base"></i>
              </div>
              <span class="text-sm md:text-base text-white/80 group-hover/feature:text-white transition-colors">{{ feature }}</span>
            </div>
          </div>

          <div class="text-center">
            <button 
              @click="$emit('scroll-to-form')"
              class="group w-full px-8 md:px-12 py-4 md:py-5 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                     text-white text-lg md:text-xl font-medium rounded-xl md:rounded-2xl transition-all duration-300 
                     transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
            >
              <span class="relative z-10">{{ $t('franchisePackages.button') }}</span>
              <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <!-- Преимущества -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
        <div v-for="(advantage, index) in advantages" :key="index"
             class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/[0.05] 
                    shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300"
             :style="{ 'animation-delay': `${index * 0.1}s` }">
          <div class="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                      flex items-center justify-center mb-4 md:mb-6 transform group-hover:scale-110 transition-all duration-300">
            <i :class="advantage.icon" class="text-white text-xl md:text-2xl"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-white/90 mb-3 md:mb-4">{{ advantage.title }}</h3>
          <p class="text-sm md:text-lg text-white/60">{{ advantage.description }}</p>
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
          <span class="relative z-10">{{ $t('franchisePackages.button') }}</span>
          <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = [
  'training',
  'documents',
  'marketing',
  'support',
  'crm',
  'manager',
  'profit',
  'territory',
  'clients',
  'launch',
  'automation',
  'suppliers'
].map(key => t(`franchisePackages.premium.features.${key}`))

const advantages = [
  {
    icon: 'pi pi-shield',
    title: t('franchisePackages.advantages.guarantee.title'),
    description: t('franchisePackages.advantages.guarantee.description')
  },
  {
    icon: 'pi pi-clock',
    title: t('franchisePackages.advantages.quickStart.title'),
    description: t('franchisePackages.advantages.quickStart.description')
  },
  {
    icon: 'pi pi-users',
    title: t('franchisePackages.advantages.support.title'),
    description: t('franchisePackages.advantages.support.description')
  }
]

defineEmits(['scroll-to-form'])
</script>

<style scoped>
@keyframes particle-float {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate(100px, -100px) rotate(360deg);
    opacity: 0;
  }
}

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

/* Оптимизация для мобильных устройств */
@media (max-width: 768px) {
  .backdrop-blur-xl {
    backdrop-filter: blur(8px);
  }

  /* Оптимизация частиц для мобильных */
  @keyframes particle-float {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 0.8;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      transform: translate(50px, -50px) rotate(360deg);
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
}

/* Улучшенная производительность анимаций */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-pulse-slow-reverse {
    animation: none;
  }
}
</style> 