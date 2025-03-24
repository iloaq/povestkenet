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
              :min="100000"
              :max="1000000"
              :step="50000"
              class="w-full"
              :useGrouping="true"
              suffix=" ₸"
            />
          </div>

          <!-- Дополнительные услуги -->
          <div class="mb-6">
            <label class="block text-sm font-medium mb-2">Дополнительные услуги</label>
            <div class="space-y-2">
              <div v-for="service in additionalServices" :key="service.name" class="flex items-center gap-2">
                <Checkbox
                  v-model="service.selected"
                  :binary="true"
                  class="!w-5 !h-5"
                />
                <span class="text-sm">{{ service.name }}</span>
                <span class="text-sm text-[#D50404] ml-auto">+{{ service.price.toLocaleString() }} ₸</span>
              </div>
            </div>
          </div>
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
            <div class="flex justify-between items-center">
              <span class="text-gray-400">Расходы</span>
              <span class="text-xl font-bold text-[#D50404]">-{{ totalExpenses.toLocaleString() }} ₸</span>
            </div>
            <div class="border-t border-gray-800 pt-4">
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold">Чистая прибыль</span>
                <span class="text-2xl font-bold text-[#D50404]">{{ netProfit.toLocaleString() }} ₸</span>
              </div>
            </div>
          </div>

          <!-- График роста -->
          <div class="mb-8">
            <h4 class="font-bold mb-4">Прогноз роста прибыли</h4>
            <div class="h-40 bg-black/30 rounded-lg p-4">
              <Chart type="line" :data="chartData" :options="chartOptions" />
            </div>
          </div>

          <!-- Кнопка получения детального расчета -->
          <button 
            class="btn-primary w-full py-3"
            @click="$emit('scroll-to-form')"
          >
            Получить детальный расчет
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Chart from 'primevue/chart'

const selectedCity = ref(null)
const clientsCount = ref(5)
const averageCheck = ref(535000)

const cities = [
  { name: 'Алматы' },
  { name: 'Астана' },
  { name: 'Шымкент' },
  { name: 'Караганда' },
  { name: 'Актобе' }
]

const additionalServices = ref([
  { name: 'Консультация по телефону', price: 50000, selected: false },
  { name: 'Выезд к клиенту', price: 100000, selected: false },
  { name: 'Срочное решение', price: 150000, selected: false },
  { name: 'Дополнительная консультация', price: 75000, selected: false }
])

// Расчеты
const totalRevenue = computed(() => {
  return clientsCount.value * averageCheck.value
})

const totalExpenses = computed(() => {
  const baseExpenses = 500000 // Базовые расходы
  const additionalExpenses = additionalServices.value
    .filter(service => service.selected)
    .reduce((sum, service) => sum + service.price, 0)
  return baseExpenses + additionalExpenses
})

const netProfit = computed(() => {
  return totalRevenue.value - totalExpenses.value
})

// Данные для графика
const chartData = computed(() => {
  const months = ['Месяц 1', 'Месяц 2', 'Месяц 3', 'Месяц 4', 'Месяц 5', 'Месяц 6']
  const profit = months.map((_, index) => {
    const growth = 1 + (index * 0.2) // 20% рост каждый месяц
    return Math.round(netProfit.value * growth)
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

:deep(.p-dropdown) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

:deep(.p-dropdown-panel) {
  background: #1F2937;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

:deep(.p-dropdown-item) {
  color: white;
}

:deep(.p-dropdown-item:hover) {
  background: rgba(213, 4, 4, 0.1);
}

:deep(.p-inputnumber) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

:deep(.p-inputnumber-input) {
  color: white;
}

:deep(.p-checkbox) {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

:deep(.p-checkbox.p-highlight) {
  background: #D50404;
  border-color: #D50404;
}

:deep(.p-checkbox .p-checkbox-box) {
  border-color: rgba(255, 255, 255, 0.2);
}

:deep(.p-checkbox.p-highlight .p-checkbox-box) {
  background: #D50404;
  border-color: #D50404;
}
</style> 