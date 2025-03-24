<template>
  <section class="py-20 bg-black text-white relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">
          МЫ ЗА <span class="text-[#D50404]">ЗДОРОВУЮ АРМИЮ</span>
        </h2>
        
        <div class="glassmorphism-dark p-8 rounded-lg mb-12">
          <p class="text-xl mb-6">
            Мы не против армии и не против службы. Мы за здоровую армию, где каждый призывник получает справедливую оценку своего здоровья.
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 mt-12">
            <div class="text-left">
              <div class="text-[#D50404] text-4xl font-bold mb-4">12 марта 2023</div>
              <p class="text-gray-400">Дата основания компании в Петропавловске</p>
            </div>
            <div class="text-left">
              <div class="text-[#D50404] text-4xl font-bold mb-4">1000+</div>
              <p class="text-gray-400">Успешно решенных дел</p>
            </div>
          </div>
        </div>

        <!-- Ключевые отличия -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="glassmorphism-dark p-6 rounded-lg">
            <i class="pi pi-user text-[#D50404] text-3xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Индивидуальный подход</h3>
            <p class="text-gray-400">Разрабатываем стратегию под каждого клиента</p>
          </div>
          
          <div class="glassmorphism-dark p-6 rounded-lg">
            <i class="pi pi-check-circle text-[#D50404] text-3xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Высокое качество</h3>
            <p class="text-gray-400">Используем только проверенные методы</p>
          </div>
          
          <div class="glassmorphism-dark p-6 rounded-lg">
            <i class="pi pi-lightbulb text-[#D50404] text-3xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Инновации</h3>
            <p class="text-gray-400">Постоянно развиваемся и внедряем новое</p>
          </div>
          
          <div class="glassmorphism-dark p-6 rounded-lg">
            <i class="pi pi-headphones text-[#D50404] text-3xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Поддержка 24/7</h3>
            <p class="text-gray-400">Сопровождаем на всех этапах</p>
          </div>
        </div>

        <!-- Кнопка призыва -->
        <div class="mt-12">
          <Button 
            label="ПОЛУЧИТЬ ПОДРОБНУЮ ИНФОРМАЦИЮ" 
            class="p-button-danger p-button-lg font-bold"
            @click="$emit('scroll-to-form')"
          />
        </div>
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