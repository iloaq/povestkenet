<template>
  <section class="relative min-h-screen flex items-center  overflow-hidden -mt-32 pt-32 py-12 md:py-16 lg:py-20">
    <!-- Фоновые эффекты -->
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
          <span class="text-white/90">{{ $t('competitorsComparison.title1') }}</span>
          <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">{{ $t('competitorsComparison.title2') }}</span>
        </h2>
        <p class="text-lg md:text-xl text-white/60 px-2">{{ $t('competitorsComparison.description') }}</p>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Таблица сравнения -->
        <div class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300 card-container mb-8 md:mb-12">
          <div class="overflow-x-auto -mx-4 md:mx-0">
            <table class="w-full min-w-[640px]">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="py-3 md:py-4 px-4 md:px-6 text-left text-base md:text-lg font-bold text-white/90">{{ $t('competitorsComparison.parameter') }}</th>
                  <th class="py-3 md:py-4 px-4 md:px-6 text-center text-base md:text-lg font-bold text-white/90">{{ $t('competitorsComparison.we') }}</th>
                  <th class="py-3 md:py-4 px-4 md:px-6 text-center text-base md:text-lg font-bold text-white/90">{{ $t('competitorsComparison.competitors') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in comparisonItems" :key="index"
                    class="border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-200">
                  <td class="py-3 md:py-4 px-4 md:px-6 text-sm md:text-base text-white/80 font-medium">{{ item.parameter }}</td>
                  <td class="py-3 md:py-4 px-4 md:px-6 text-center">
                    <div class="flex items-center justify-center gap-2 md:gap-3">
                      <div class="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center">
                        <i class="pi pi-check text-white text-sm md:text-base"></i>
                      </div>
                      <span class="text-sm md:text-base text-white/90">{{ item.we }}</span>
                    </div>
                  </td>
                  <td class="py-3 md:py-4 px-4 md:px-6 text-center text-sm md:text-base text-white/40">{{ item.competitors }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Ключевые преимущества -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <div v-for="(advantage, index) in advantages" 
               :key="index"
               class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/[0.05] 
                      shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300 
                      card-container"
               :style="{ 'animation-delay': `${index * 0.1}s` }"
          >
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                        flex items-center justify-center mb-4 md:mb-6 transform group-hover:scale-110 transition-all duration-300">
              <i :class="advantage.icon" class="text-white text-xl md:text-2xl"></i>
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-white/90 mb-3 md:mb-4">{{ advantage.title }}</h3>
            <p class="text-sm md:text-lg text-white/60">{{ advantage.description }}</p>
          </div>
        </div>

        <!-- Кнопка -->
        <div class="text-center">
          <button 
            @click="$emit('scroll-to-form')"
            class="group w-full md:w-auto px-8 md:px-12 py-4 md:py-5 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                   text-white text-lg md:text-xl font-medium rounded-xl md:rounded-2xl transition-all duration-300 
                   transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
          >
            <span class="relative z-10">{{ $t('competitorsComparison.button') }}</span>
            <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const comparisonItems = [
  'experience',
  'support',
  'training',
  'marketing',
  'technology',
  'payback',
  'profit',
  'territory'
].map(key => ({
  parameter: t(`competitorsComparison.items.${key}.name`),
  we: t(`competitorsComparison.items.${key}.we`),
  competitors: t(`competitorsComparison.items.${key}.competitors`)
}))

const advantages = [
  'model',
  'team',
  'quickStart'
].map(key => ({
  icon: key === 'model' ? 'pi pi-shield' : 
        key === 'team' ? 'pi pi-users' : 'pi pi-chart-line',
  title: t(`competitorsComparison.advantages.${key}.title`),
  description: t(`competitorsComparison.advantages.${key}.description`)
}))

defineEmits(['scroll-to-form'])
</script>

<style scoped>
@import '../assets/styles/components.css';

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

  /* Оптимизация таблицы для мобильных */
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .overflow-x-auto::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
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