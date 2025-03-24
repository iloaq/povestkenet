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
        <h2 class="section-title">Доступные территории</h2>
        <p class="section-subtitle">Выберите город для открытия бизнеса</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Карта -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.1s">
          <div class="relative h-[500px] rounded-lg overflow-hidden">
            <!-- Здесь будет карта Казахстана -->
            <div class="absolute inset-0 bg-[url('/kz-map.svg')] bg-contain bg-center bg-no-repeat opacity-20"></div>
            
            <!-- Точки на карте -->
            <div 
              v-for="city in cities" 
              :key="city.name"
              class="absolute cursor-pointer transform hover:scale-110 transition-all"
              :style="{ left: city.x + '%', top: city.y + '%' }"
              @click="selectedCity = city"
            >
              <div class="relative">
                <div class="w-4 h-4 rounded-full bg-[#D50404]"></div>
                <div 
                  class="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black/80 rounded-lg text-sm whitespace-nowrap"
                  :class="{ 'opacity-100': selectedCity?.name === city.name, 'opacity-0': selectedCity?.name !== city.name }"
                >
                  {{ city.name }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Информация о городе -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.2s">
          <template v-if="selectedCity">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-full bg-[#D50404]/10 flex items-center justify-center">
                <i class="pi pi-map-marker text-[#D50404] text-xl"></i>
              </div>
              <h3 class="text-xl font-bold">{{ selectedCity.name }}</h3>
            </div>

            <!-- Статистика города -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="bg-black/30 p-4 rounded-lg">
                <div class="text-sm text-gray-400">Население</div>
                <div class="text-xl font-bold">{{ selectedCity.population.toLocaleString() }}</div>
              </div>
              <div class="bg-black/30 p-4 rounded-lg">
                <div class="text-sm text-gray-400">Свободных территорий</div>
                <div class="text-xl font-bold text-[#D50404]">{{ selectedCity.available }}%</div>
              </div>
            </div>

            <!-- Преимущества города -->
            <div class="space-y-4 mb-8">
              <h4 class="font-bold">Преимущества города:</h4>
              <ul class="space-y-2">
                <li v-for="(advantage, index) in selectedCity.advantages" :key="index" class="flex items-center gap-2">
                  <i class="pi pi-check-circle text-[#D50404]"></i>
                  <span class="text-gray-400">{{ advantage }}</span>
                </li>
              </ul>
            </div>

            <!-- Потенциальная прибыль -->
            <div class="bg-black/30 p-4 rounded-lg mb-8">
              <div class="text-sm text-gray-400">Потенциальная прибыль в месяц</div>
              <div class="text-2xl font-bold text-[#D50404]">{{ selectedCity.potentialProfit.toLocaleString() }} ₸</div>
            </div>

            <!-- Кнопка выбора города -->
            <button 
              class="btn-primary w-full py-3"
              @click="$emit('select-city', selectedCity)"
            >
              Выбрать {{ selectedCity.name }}
            </button>
          </template>

          <template v-else>
            <div class="h-full flex items-center justify-center text-center">
              <div>
                <i class="pi pi-map-marker text-[#D50404] text-4xl mb-4"></i>
                <p class="text-gray-400">Выберите город на карте для просмотра подробной информации</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedCity = ref(null)

const cities = [
  {
    name: 'Алматы',
    x: 75,
    y: 40,
    population: 2000000,
    available: 60,
    potentialProfit: 3500000,
    advantages: [
      'Большой рынок сбыта',
      'Высокая платежеспособность населения',
      'Развитая инфраструктура',
      'Благоприятный климат'
    ]
  },
  {
    name: 'Астана',
    x: 65,
    y: 30,
    population: 1200000,
    available: 75,
    potentialProfit: 3000000,
    advantages: [
      'Столица государства',
      'Растущий рынок',
      'Современная инфраструктура',
      'Высокий уровень жизни'
    ]
  },
  {
    name: 'Шымкент',
    x: 70,
    y: 45,
    population: 1000000,
    available: 85,
    potentialProfit: 2500000,
    advantages: [
      'Третий по величине город',
      'Развивающийся рынок',
      'Доступные цены',
      'Благоприятный бизнес-климат'
    ]
  },
  {
    name: 'Караганда',
    x: 60,
    y: 35,
    population: 500000,
    available: 90,
    potentialProfit: 2000000,
    advantages: [
      'Крупный промышленный центр',
      'Стабильный рынок',
      'Доступные офисные помещения',
      'Развитая транспортная сеть'
    ]
  },
  {
    name: 'Актобе',
    x: 55,
    y: 40,
    population: 400000,
    available: 95,
    potentialProfit: 1800000,
    advantages: [
      'Растущий рынок',
      'Низкая конкуренция',
      'Доступные цены',
      'Благоприятные условия для бизнеса'
    ]
  }
]

defineEmits(['select-city'])
</script>

<style scoped>
@import '../assets/styles/components.css';
</style>