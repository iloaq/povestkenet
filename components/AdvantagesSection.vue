<template>
  <section class="py-20 bg-black text-white relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-16">
        ПОЧЕМУ СЕЙЧАС <span class="text-[#D50404]">САМОЕ ВРЕМЯ</span>
      </h2>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Растущий спрос -->
        <div class="glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all">
          <div class="text-[#D50404] text-4xl font-bold mb-4">01</div>
          <h3 class="text-xl font-bold mb-4">Растущий спрос</h3>
          <p class="text-gray-400">Количество обращений выросло на 300% за последний год</p>
          <div class="mt-4 h-1 w-20 bg-[#D50404]"></div>
        </div>

        <!-- Свободные города -->
        <div class="glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all">
          <div class="text-[#D50404] text-4xl font-bold mb-4">02</div>
          <h3 class="text-xl font-bold mb-4">Свободные города</h3>
          <p class="text-gray-400">89% территорий Казахстана еще свободны для партнеров</p>
          <div class="mt-4 h-1 w-20 bg-[#D50404]"></div>
        </div>

        <!-- Высокая маржинальность -->
        <div class="glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all">
          <div class="text-[#D50404] text-4xl font-bold mb-4">03</div>
          <h3 class="text-xl font-bold mb-4">Высокая маржинальность</h3>
          <p class="text-gray-400">Чистая прибыль от 2 500 000 ₸ уже через 30 дней</p>
          <div class="mt-4 h-1 w-20 bg-[#D50404]"></div>
        </div>
      </div>

      <!-- Кнопка призыва -->
      <div class="text-center mt-12">
        <Button 
          label="ПОЛУЧИТЬ РАСЧЕТ ПРИБЫЛИ ДЛЯ ВАШЕГО ГОРОДА" 
          class="p-button-danger p-button-lg font-bold"
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
</style> 