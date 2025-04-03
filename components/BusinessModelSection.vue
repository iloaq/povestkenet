<template>
  <section id="business-model" class="relative flex items-center overflow-hidden py-12 md:py-16 lg:py-20">
   

    <div class="container mx-auto px-4 relative z-10">
      <!-- Заголовок -->
      <div class="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
          <span class="text-white/90">{{ $t('businessModel.title1') }}</span>
          <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">{{ $t('businessModel.title2') }}</span>
          <span class="text-white/90">{{ $t('businessModel.title3') }}</span>
        </h2>
        <p class="text-lg md:text-xl text-white/60 px-2">{{ $t('businessModel.description') }}</p>
      </div>

      <!-- Основные шаги -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
        <div v-for="i in 3" :key="i"
             class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300"
             :class="{'animate-slide-up': true}"
             :style="{ 'animation-delay': `${i * 0.1}s` }">
          <div class="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <span class="text-white text-xl md:text-2xl font-bold">0{{ i }}</span>
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-white/90">{{ $t(`businessModel.step${i}`) }}</h3>
          </div>
          <p class="text-base md:text-lg text-white/60">{{ $t(`businessModel.step${i}Description`) }}</p>
        </div>
      </div>

      <!-- Преимущества -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
        <div v-for="i in 4" :key="i"
             class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300"
             :class="{'animate-slide-up': true}"
             :style="{ 'animation-delay': `${(i + 3) * 0.1}s` }">
          <div class="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <i class="pi pi-check text-white text-lg md:text-xl"></i>
            </div>
            <h4 class="text-lg md:text-xl font-bold text-white/90">{{ $t(`businessModel.advantages${i}`) }}</h4>
          </div>
          <p class="text-sm md:text-base text-white/60">{{ $t(`businessModel.advantages${i}Description`) }}</p>
        </div>
      </div>

      <!-- Кнопка -->
      <div class="text-center">
        <button 
          @click="$emit('scroll-to-form')"
          class="group w-full md:w-auto px-8 md:px-12 py-4 md:py-5 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] text-white text-lg md:text-xl font-medium rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
        >
          <span class="relative z-10">{{ $t('businessModel.cta') }}</span>
          <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['scroll-to-form'])
</script>

<style scoped>
.business-model-section {
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

.animate-slide-up {
  opacity: 0;
  transform: translateY(20px);
  animation: slide-up 0.6s ease-out forwards;
}

@keyframes slide-up {
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
  
  .animate-slide-up {
    animation-duration: 0.4s;
  }
}

/* Оптимизация для touch-устройств */
@media (hover: none) {
  .group:active {
    transform: scale(0.98);
  }
  
  .button:active {
    transform: scale(0.98);
  }
}
</style>