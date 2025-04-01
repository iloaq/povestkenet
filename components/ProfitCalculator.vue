<template>
  <section class="relative py-12 md:py-16 lg:py-20 flex items-center  overflow-hidden">

    <div class="container mx-auto px-4 relative z-10">
      <!-- Заголовок -->
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 px-2">
          <span class="text-white/90">{{ $t('profitCalculator.title1') }}</span>
          <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">{{ $t('profitCalculator.title2') }}</span>
          <span class="text-white/90">{{ $t('profitCalculator.title3') }}</span>
        </h2>
        <p class="text-base md:text-lg text-white/60 px-2">{{ $t('profitCalculator.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <!-- Форма калькулятора -->
        <div class="bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <!-- Город -->
          <div class="mb-4 md:mb-6">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <label class="text-white/90 text-base md:text-lg font-medium mb-1 sm:mb-0">{{ $t('profitCalculator.cityLabel') }}</label>
              <span class="text-white/40 text-xs md:text-sm">{{ $t('profitCalculator.cityDescription') }}</span>
            </div>
            <Select
              v-model="selectedCity"
              :options="cities"
              optionLabel="name"
              class="w-full text-sm md:text-base"
            />
          </div>

          <!-- Количество клиентов -->
          <div class="mb-4 md:mb-6">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <label class="text-white/90 text-base md:text-lg font-medium mb-1 sm:mb-0">{{ $t('profitCalculator.clientsLabel') }}</label>
              <span class="text-[#D50404] font-bold text-base md:text-lg">{{ clientsCount }} {{ $t('profitCalculator.clientsSuffix') }}</span>
            </div>
            <Slider v-model="clientsCount" :min="1" :max="15" :step="1" class="w-full" />
            <div class="flex justify-between mt-2 text-xs md:text-sm">
              <span class="text-white/40">Минимум: 1</span>
              <span class="text-white/40">Рекомендуемо: 7</span>
              <span class="text-white/40">Максимум: 15</span>
            </div>
          </div>

          <!-- Кнопка -->
          <button 
            @click="$emit('scroll-to-form')"
            class="group w-full px-6 md:px-8 py-3 md:py-4 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] text-white text-base md:text-lg font-medium rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
          >
            <span class="relative z-10">{{ $t('profitCalculator.cta') }}</span>
            <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <!-- Результаты расчета -->
        <div class="bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <div class="space-y-4 md:space-y-6">
            <!-- Общий доход -->
            <div class="bg-white/[0.03] backdrop-blur-xl rounded-lg md:rounded-xl p-4 md:p-6">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <span class="text-base md:text-lg text-white/90 mb-1 sm:mb-0">{{ $t('profitCalculator.revenue') }}</span>
                <span class="text-lg md:text-xl font-bold text-white/90">
                  {{ totalRevenue.toLocaleString() }} ₸
                </span>
              </div>
              <p class="text-xs md:text-sm text-white/40">{{ $t('profitCalculator.revenueDescription') }}</p>
            </div>

            <!-- Чистая прибыль -->
            <div class="bg-gradient-to-r from-[#D50404]/10 to-transparent backdrop-blur-xl rounded-lg md:rounded-xl p-4 md:p-6">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <span class="text-lg md:text-xl font-bold text-white/90 mb-1 sm:mb-0">{{ $t('profitCalculator.profit.title') }}</span>
                <span class="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">
                  {{ netProfit.toLocaleString() }} ₸
                </span>
              </div>
              <p class="text-xs md:text-sm text-white/40">{{ $t('profitCalculator.profit.subtitle') }}</p>
            </div>

            <!-- График -->
            <div>
              <h4 class="text-base md:text-lg font-bold text-white/90 mb-2 md:mb-3">{{ $t('profitCalculator.forecast.title') }}</h4>
              <p class="text-xs md:text-sm text-white/40 mb-3 md:mb-4">{{ $t('profitCalculator.forecast.description') }}</p>
              <div class="bg-black/20 backdrop-blur-xl rounded-lg md:rounded-xl p-3 md:p-4">
                <Chart type="line" :data="chartData" :options="chartOptions" class="min-h-[160px] md:min-h-[180px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Стилизация слайдера */
:deep(.p-slider) {
  height: 6px;
  @media (min-width: 768px) {
    height: 8px;
  }
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

:deep(.p-slider .p-slider-handle) {
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
  background: linear-gradient(to right, #D50404, #FF0000);
  border: 2px solid white;
  border-radius: 50%;
  top: -7px;
  @media (min-width: 768px) {
    top: -8px;
  }
  transition: all 0.3s ease;
}

:deep(.p-slider .p-slider-handle:hover) {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(213, 4, 4, 0.5);
}

/* Стилизация Select */
:deep(.p-dropdown) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  @media (min-width: 768px) {
    border-radius: 12px;
  }
}

:deep(.p-dropdown-label) {
  padding: 0.5rem 1rem;
  @media (min-width: 768px) {
    padding: 0.75rem 1rem;
  }
  color: rgba(255, 255, 255, 0.9);
}

/* Оптимизация для мобильных устройств */
@media (max-width: 768px) {
  .backdrop-blur-xl {
    backdrop-filter: blur(8px);
  }
  
  /* Уменьшаем интенсивность анимаций */
  .animate-pulse-slow {
    animation-duration: 10s;
  }
  
  .animate-pulse-slow-reverse {
    animation-duration: 10s;
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
}
</style>

<script setup>
import { ref, computed } from 'vue'
import Chart from 'primevue/chart'

const cities = [
  { name: 'Алматы', factor: 1.2 },
  { name: 'Астана', factor: 1.1 },
  { name: 'Шымкент', factor: 0.9 },
  { name: 'Караганда', factor: 0.8 },
  { name: 'Актобе', factor: 0.7 },
  { name: 'Тараз', factor: 0.6 },
  { name: 'Уральск', factor: 0.5 },
  { name: 'Костанай', factor: 0.4 },
  { name: 'Кызылорда', factor: 0.3 },
  { name: 'Туркестан', factor: 0.2 },
  { name: 'Семей', factor: 0.1 },
  { name: 'Другой', factor: 0.5 }
]

const selectedCity = ref(cities[0])
const clientsCount = ref(7)

// Расчет дохода
const averageClientRevenue = 600000 // Средний чек с клиента (между 500 000 и 700 000)

const totalRevenue = computed(() => {
  return clientsCount.value * averageClientRevenue
})

const netProfit = computed(() => {
  return Math.round(totalRevenue.value * 0.5) // 50% чистой прибыли
})

// Данные для графика с учетом сезонности
const chartData = computed(() => {
  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн']
  const seasonalFactors = [0.7, 0.8, 1.2, 1.3, 1.0, 0.9] // Коэффициенты с учетом призывов
  const profit = months.map((_, index) => {
    return Math.round(netProfit.value * seasonalFactors[index])
  })

  return {
    labels: months,
    datasets: [{
      label: 'Прибыль',
      data: profit,
      borderColor: '#D50404',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(213, 4, 4, 0.1)'
    }]
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