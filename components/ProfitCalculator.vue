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
        <h2 class="section-title">Рассчитайте свою прибыль</h2>
        <p class="section-subtitle">Укажите параметры и получите точный расчет</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Форма калькулятора -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.1s">
          <h3 class="text-xl font-bold mb-6">Параметры расчета</h3>
          
          <!-- Город -->
          <div class="mb-6">
            <label class="block text-sm font-medium mb-2">Ваш город</label>
            <Dropdown
              v-model="selectedCity"
              :options="cities"
              optionLabel="name"
              placeholder="Выберите город"
              class="w-full"
            />
          </div>

          <!-- Количество клиентов -->
          <div class="mb-6">
            <label class="block text-sm font-medium mb-2">Количество клиентов в месяц</label>
            <Slider
              v-model="clientsCount"
              :min="1"
              :max="20"
              :step="1"
              class="w-full"
            />
            <div class="text-center mt-2 text-[#D50404] font-bold">{{ clientsCount }} клиентов</div>
          </div>

          <!-- Средний чек -->
          <div class="mb-6">
            <label class="block text-sm font-medium mb-2">Средний чек (₸)</label>
            <InputNumber
              v-model="averageCheck"
              :min="4000000"
              :max="7000000"
              :step="500000"
              class="w-full"
              :useGrouping="true"
              suffix=" ₸"
            />
          </div>

          <!-- Дополнительный чек -->
          <div class="mb-6">
            <label class="block text-sm font-medium mb-2">Дополнительный чек (₸)</label>
            <InputNumber
              v-model="additionalCheck"
              :min="50000"
              :max="500000"
              :step="50000"
              class="w-full"
              :useGrouping="true"
              suffix=" ₸"
            />
          </div>

          <!-- Кнопка получения детального расчета -->
          <button 
            class="btn-primary w-full py-3"
            @click="$emit('scroll-to-form')"
          >
            Получить детальный расчет
          </button>
        </div>

        <!-- Результаты расчета -->
        <div class="card-container animate-slide-up" style="animation-delay: 0.2s">
          <h3 class="text-xl font-bold mb-6">Ваша прибыль</h3>

          <!-- Основные показатели -->
          <div class="space-y-4 mb-8">
            <div class="flex justify-between items-center">
              <span class="text-gray-400">Выручка</span>
              <span class="text-xl font-bold">{{ totalRevenue.toLocaleString() }} ₸</span>
            </div>
            
            <!-- Детализация расходов -->
            <div class="bg-black/20 rounded-lg p-4 space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-400">Аренда офиса</span>
                <span class="text-sm">-150 000 ₸</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-400">Реклама</span>
                <span class="text-sm">-500 000 ₸</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-400">Прочие расходы</span>
                <span class="text-sm">-1 950 000 ₸</span>
              </div>
              <div class="border-t border-gray-800 pt-2 mt-2">
                <div class="flex justify-between items-center">
                  <span class="text-sm font-medium">Итого расходы</span>
                  <span class="text-sm font-medium text-[#D50404]">-{{ totalExpenses.toLocaleString() }} ₸</span>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-800 pt-4">
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold">Чистая прибыль (50%)</span>
                <span class="text-2xl font-bold text-[#D50404]">{{ netProfit.toLocaleString() }} ₸</span>
              </div>
            </div>
          </div>

          <!-- График роста -->
          <div class="mb-8">
            <h4 class="font-bold mb-4">Прогноз прибыли с учетом сезонности</h4>
            <div class=" bg-black/30 rounded-lg p-4">
              <Chart type="line" :data="chartData" :options="chartOptions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Chart from 'primevue/chart'

const selectedCity = ref(null)
const clientsCount = ref(10)
const averageCheck = ref(500000)
const additionalCheck = ref(200000)

const cities = [
  { name: 'Алматы' },
  { name: 'Астана' },
  { name: 'Шымкент' },
  { name: 'Караганда' },
  { name: 'Актобе' }
]

const additionalServices = ref([
  { name: 'Консультация по телефону', price: 50000, selected: true },
  { name: 'Выезд к клиенту', price: 100000, selected: true },
  { name: 'Срочное решение', price: 150000, selected: true },
  { name: 'Дополнительная консультация', price: 75000, selected: true }
])

// Расчеты
const totalRevenue = computed(() => {
  const baseRevenue = clientsCount.value * averageCheck.value
  const additionalRevenue = clientsCount.value * additionalCheck.value
  return baseRevenue + additionalRevenue
})

const totalExpenses = computed(() => {
  const officeRent = 150000 // Аренда офиса
  const marketing = 500000 // Реклама
  const other = 1950000 // Прочие расходы (включая зарплату, коммунальные и т.д.)
  
  return officeRent + marketing + other
})

const netProfit = computed(() => {
  return totalRevenue.value - totalExpenses.value
})

// Данные для графика
const chartData = computed(() => {
  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн']
  const seasonalFactors = [0.8, 0.9, 1.0, 1.1, 1.2, 1.1] // Сезонные коэффициенты
  const profit = months.map((_, index) => {
    const seasonalRevenue = totalRevenue.value * seasonalFactors[index]
    return Math.round(seasonalRevenue - totalExpenses.value) // Прибыль с учетом расходов
  })

  return {
    labels: months,
    datasets: [
      {
        label: 'Прибыль',
        data: profit,
        borderColor: '#D50404',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(213, 4, 4, 0.1)'
      }
    ]
  }
})

const chartOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#9CA3AF'
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#9CA3AF'
      }
    }
  }
}

defineEmits(['scroll-to-form'])
</script>

<style scoped>
@import '../assets/styles/components.css';

:deep(.p-slider) {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

:deep(.p-slider .p-slider-handle) {
  width: 20px;
  height: 20px;
  background: #D50404;
  border: none;
  border-radius: 50%;
  top: -7px;
}

:deep(.p-slider .p-slider-range) {
  background: #D50404;
  border-radius: 3px;
}


:deep(.p-inputnumber) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

:deep(.p-inputnumber-input) {
  color: white;
}

</style> 