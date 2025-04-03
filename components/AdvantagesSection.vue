<template>
  <section id="advantages" class="relative flex items-center overflow-hidden py-12 md:py-16 lg:py-20">
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16 px-4">
        {{ $t('advantages.title1') }} <span class="text-[#D50404]">{{ $t('advantages.title2') }}</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        <!-- Растущий спрос -->
        <div class="glassmorphism-dark p-5 md:p-6 rounded-lg transform hover:scale-105 transition-all">
          <div class="text-[#D50404] text-3xl md:text-4xl font-bold mb-3 md:mb-4">01</div>
          <h3 class="text-lg md:text-xl font-bold mb-3 md:mb-4">{{ $t('advantages.demand') }}</h3>
          <p class="text-gray-400 text-sm md:text-base">{{ $t('advantages.demandDescription') }}</p>
          <div class="mt-4 h-1 w-16 md:w-20 bg-[#D50404]"></div>
        </div>

        <!-- Свободные города -->
        <div class="glassmorphism-dark p-5 md:p-6 rounded-lg transform hover:scale-105 transition-all">
          <div class="text-[#D50404] text-3xl md:text-4xl font-bold mb-3 md:mb-4">02</div>
          <h3 class="text-lg md:text-xl font-bold mb-3 md:mb-4">{{ $t('advantages.freeCities') }}</h3>
          <p class="text-gray-400 text-sm md:text-base">{{ $t('advantages.freeCitiesDescription') }}</p>
          <div class="mt-4 h-1 w-16 md:w-20 bg-[#D50404]"></div>
        </div>

        <!-- Высокая маржинальность -->
        <div class="glassmorphism-dark p-5 md:p-6 rounded-lg transform hover:scale-105 transition-all">
          <div class="text-[#D50404] text-3xl md:text-4xl font-bold mb-3 md:mb-4">03</div>
          <h3 class="text-lg md:text-xl font-bold mb-3 md:mb-4">{{ $t('advantages.highMargin') }}</h3>
          <p class="text-gray-400 text-sm md:text-base">{{ $t('advantages.highMarginDescription') }}</p>
          <div class="mt-4 h-1 w-16 md:w-20 bg-[#D50404]"></div>
        </div>
      </div>

      <!-- Кнопка призыва -->
      <div class="text-center mt-8 md:mt-10 lg:mt-12">
        <Button 
          :label="$t('advantages.cta')" 
          class="p-button-danger p-button-lg font-bold w-full md:w-auto px-8 py-3 md:px-10 md:py-3"
          @click="$emit('scroll-to-form')"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['scroll-to-form'])
</script>

<style scoped>
.glassmorphism-dark {
  background: rgba(36, 36, 36, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Добавляем медиа-запросы для улучшения адаптивности */
@media (max-width: 768px) {
  .glassmorphism-dark {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
}

/* Оптимизация для устройств с hover */
@media (hover: hover) {
  .glassmorphism-dark:hover {
    background: rgba(36, 36, 36, 0.7);
  }
}

/* Оптимизация для touch-устройств */
@media (hover: none) {
  .glassmorphism-dark:active {
    transform: scale(0.98);
  }
}
</style> 