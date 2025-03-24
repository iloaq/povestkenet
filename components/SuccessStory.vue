<template>
  <section class="section-container section-dark">
    <!-- Фоновые элементы -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
      <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D50404] rounded-full opacity-10 blur-[100px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(213,4,4,0.1),transparent_50%)]"></div>
    </div>

    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="section-title">История успеха</h2>
        <p class="section-subtitle">Реальная история нашего первого партнера</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- История успеха -->
        <div class="card-container animate-slide-up">
          <div class="flex items-center gap-6 mb-8">
            <div class="w-24 h-24 rounded-full overflow-hidden">
              <img src="/hero-img.png" alt="Арман" class="w-full h-full object-cover">
            </div>
            <div>
              <h3 class="text-xl font-bold">Арман</h3>
              <p class="text-gray-400">Петропавловск</p>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-black/30 p-4 rounded-lg">
              <div class="text-sm text-gray-400">Доход за первый месяц</div>
              <div class="text-2xl font-bold text-[#D50404]">2 800 000 ₸</div>
            </div>

            <div class="space-y-4">
              <h4 class="font-bold">История успеха:</h4>
              <p class="text-gray-400">
                "Я начал с нуля, без опыта в юридической сфере. Уже через 30 дней получил первую прибыль 2 800 000₸. Команда поддержки помогла на каждом этапе. Сейчас у нас работает команда из 5 человек, и мы планируем открыть второй офис."
              </p>
            </div>

            <!-- Путь к успеху -->
            <div class="space-y-4">
              <h4 class="font-bold">Путь к успеху:</h4>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-8 h-8 rounded-full bg-[#D50404]/10 flex items-center justify-center">
                    <i class="pi pi-file-edit text-[#D50404]"></i>
                  </div>
                  <div>
                    <div class="font-bold">Подписание договора</div>
                    <div class="text-sm text-gray-400">1 марта 2023</div>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-8 h-8 rounded-full bg-[#D50404]/10 flex items-center justify-center">
                    <i class="pi pi-book text-[#D50404]"></i>
                  </div>
                  <div>
                    <div class="font-bold">Обучение</div>
                    <div class="text-sm text-gray-400">5 дней интенсивного обучения</div>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-8 h-8 rounded-full bg-[#D50404]/10 flex items-center justify-center">
                    <i class="pi pi-flag text-[#D50404]"></i>
                  </div>
                  <div>
                    <div class="font-bold">Запуск бизнеса</div>
                    <div class="text-sm text-gray-400">30 марта 2023</div>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-8 h-8 rounded-full bg-[#D50404]/10 flex items-center justify-center">
                    <i class="pi pi-chart-line text-[#D50404]"></i>
                  </div>
                  <div>
                    <div class="font-bold">Первая прибыль</div>
                    <div class="text-sm text-gray-400">2 800 000₸ в первый месяц</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Достижения -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-black/30 p-4 rounded-lg">
                <div class="text-sm text-gray-400">Средний чек</div>
                <div class="text-xl font-bold">535 000 ₸</div>
                <div class="text-xs text-[#D50404] mt-1">Выше среднего на 35%</div>
              </div>
              <div class="bg-black/30 p-4 rounded-lg">
                <div class="text-sm text-gray-400">Клиентов в месяц</div>
                <div class="text-xl font-bold">7</div>
                <div class="text-xs text-[#D50404] mt-1">Стабильный поток</div>
              </div>
              <div class="bg-black/30 p-4 rounded-lg">
                <div class="text-sm text-gray-400">Выручка</div>
                <div class="text-xl font-bold">3 745 000 ₸</div>
                <div class="text-xs text-[#D50404] mt-1">Рост 15% в месяц</div>
              </div>
              <div class="bg-black/30 p-4 rounded-lg">
                <div class="text-sm text-gray-400">Чистая прибыль</div>
                <div class="text-xl font-bold">2 800 000 ₸</div>
                <div class="text-xs text-[#D50404] mt-1">Окупаемость за 3 месяца</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Кнопка призыва -->
        <div class="text-center mt-12 animate-slide-up" style="animation-delay: 0.2s">
          <button 
            class="btn-primary px-8 py-4 text-lg"
            @click="$emit('scroll-to-form')"
          >
            Стать следующим успешным партнером
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
@import '../assets/styles/components.css';
</style> 