<template>
  <section class="py-20 bg-black text-white relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-16">
        КОМУ МЫ <span class="text-[#D50404]">ПОМОГАЕМ</span>
      </h2>

      <!-- Целевая аудитория -->
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
        <div class="glassmorphism-dark p-8 rounded-lg">
          <div class="text-[#D50404] text-4xl font-bold mb-4">17-27 лет</div>
          <h3 class="text-xl font-bold mb-4">Призывники</h3>
          <p class="text-gray-400">Молодые люди, которым нужна помощь в защите своих прав при призыве в армию</p>
        </div>

        <div class="glassmorphism-dark p-8 rounded-lg">
          <div class="text-[#D50404] text-4xl font-bold mb-4">35-55 лет</div>
          <h3 class="text-xl font-bold mb-4">Родители</h3>
          <p class="text-gray-400">Заботливые родители, которые хотят защитить здоровье своих детей</p>
        </div>
      </div>

      <!-- Наши услуги -->
      <h2 class="text-4xl font-bold text-center mb-16">
        ЧТО МЫ <span class="text-[#D50404]">ДЕЛАЕМ</span>
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="glassmorphism-dark p-6 rounded-lg">
          <i class="pi pi-shield text-[#D50404] text-3xl mb-4"></i>
          <h3 class="text-xl font-bold mb-4">Защита прав</h3>
          <p class="text-gray-400">Защищаем от неправомерных действий военкомата</p>
        </div>

        <div class="glassmorphism-dark p-6 rounded-lg">
          <i class="pi pi-file text-[#D50404] text-3xl mb-4"></i>
          <h3 class="text-xl font-bold mb-4">Документы</h3>
          <p class="text-gray-400">Помогаем собрать и правильно оформить все необходимые документы</p>
        </div>

        <div class="glassmorphism-dark p-6 rounded-lg">
          <i class="pi pi-users text-[#D50404] text-3xl mb-4"></i>
          <h3 class="text-xl font-bold mb-4">Команда экспертов</h3>
          <p class="text-gray-400">Наши врачи и юристы доказывают диагнозы</p>
        </div>
      </div>

      <!-- Кнопка призыва -->
      <div class="text-center mt-12">
        <Button 
          label="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ" 
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