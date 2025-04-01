<template>
  <section class="relative min-h-screen flex items-center  overflow-hidden -mt-32 pt-32 py-12 md:py-16">
    <!-- Фоновые эффекты -->
    <div class="absolute inset-0">
      <!-- Анимированные частицы -->
      <div class="absolute top-0 left-0 w-full h-64 overflow-hidden opacity-40">
        <div v-for="i in 5" :key="i" 
             class="absolute w-1 h-1 bg-[#D50404] rounded-full"
             :style="{
               left: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 2}s`,
               animation: 'particle-fall 3s linear infinite'
             }">
        </div>
      </div>

      
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Заголовок -->
      <div class="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 class="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
          <span class="text-white/90">{{ $t('territory.title1') }}</span>
          <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">{{ $t('territory.title2') }}</span>
          <span class="text-white/90">{{ $t('territory.title3') }}</span>
        </h2>
        <p class="text-base md:text-xl text-white/60">{{ $t('territory.description') }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <!-- Карта -->
        <div class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300 card-container">
          <div class="relative aspect-[4/3] md:aspect-square lg:h-[100%]">
            <div class="absolute inset-0">
              <img 
                src="/kz-map.svg" 
                alt="Карта Казахстана" 
                class="w-full h-full object-contain opacity-70"
              />
            </div>
            
            <!-- Точки областей -->
            <div 
              v-for="city in citiesWithAdvantages" 
              :key="city.name"
              @click="selectCity(city)"
              class="absolute cursor-pointer group touch-manipulation"
              :style="{ left: city.x + '%', top: city.y + '%' }"
            >
              <div class="relative">
                <div class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] transition-transform duration-300 group-hover:scale-125">
                  <div class="absolute inset-0 rounded-full bg-[#D50404] animate-ping opacity-75"></div>
                </div>
                <div 
                  class="absolute left-1/2 -translate-x-1/2 mt-1 md:mt-2 px-2 md:px-3 py-1 md:py-1.5 
                         bg-white/[0.03] backdrop-blur-xl rounded-lg text-xs md:text-sm
                         transition-all duration-300 border border-white/[0.05]
                         whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                         hidden md:block"
                  :class="{ 'opacity-100 scale-100': selectedCity?.name === city.name, 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100': selectedCity?.name !== city.name }"
                >
                  {{ city.translatedName }}
                </div>
              </div>
            </div>

            <!-- Линии между областями -->
            <svg class="absolute inset-0 pointer-events-none">
              <path 
                v-for="(city, index) in citiesWithAdvantages" 
                :key="city.name + index"
                :d="`M ${city.x * 8} ${city.y * 6} L ${citiesWithAdvantages[(index + 1) % citiesWithAdvantages.length].x * 8} ${citiesWithAdvantages[(index + 1) % citiesWithAdvantages.length].y * 6}`"
                stroke="url(#redGradient)"
                stroke-width="0.5"
                stroke-dasharray="2 2"
                class="opacity-20 md:stroke-width-1 md:stroke-dasharray-4"
              />
              <defs>
                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color: #D50404" />
                  <stop offset="100%" style="stop-color: #FF0000" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <!-- Информация об области -->
        <div class="bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] card-container">
          <template v-if="selectedCity">
            <div class="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center">
                <i class="pi pi-map-marker text-white text-lg md:text-xl"></i>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-white/90">
                {{ $t(`territory.regions.${selectedCity.name}.name`) }}
              </h3>
            </div>

            <!-- Статистика области -->
            <div class="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              <div class="bg-white/[0.03] rounded-lg md:rounded-xl p-4 md:p-5 border border-white/[0.05]">
                <div class="text-xs md:text-sm text-white/60 mb-1">{{ $t('territory.population') }}</div>
                <div class="text-lg md:text-2xl font-bold text-white/90">{{ selectedCity.population.toLocaleString() }}</div>
              </div>
              <div class="bg-white/[0.03] rounded-lg md:rounded-xl p-4 md:p-5 border border-white/[0.05]">
                <div class="text-xs md:text-sm text-white/60 mb-1">{{ $t('territory.available') }}</div>
                <div class="text-lg md:text-2xl font-bold bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">
                  {{ selectedCity.available }}%
                </div>
              </div>
            </div>

            <!-- Преимущества области -->
            <div class="mb-6 md:mb-8">
              <h4 class="text-base md:text-lg font-bold text-white/90 mb-3 md:mb-4">Преимущества региона</h4>
              
              <ul class="space-y-2 md:space-y-3">
                <li v-for="(advantage, index) in getAdvantages(selectedCity.name)" 
                    :key="index" 
                    class="flex items-center gap-2 md:gap-3 group"
                >
                  <div class="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <i class="pi pi-check text-white text-xs md:text-sm"></i>
                  </div>
                  <span class="text-sm md:text-base text-white/70">{{ advantage }}</span>
                </li>
              </ul>
            </div>

            <!-- Потенциальная прибыль -->
            <div class="bg-gradient-to-r from-[#D50404]/10 to-transparent p-4 md:p-6 rounded-lg md:rounded-xl mb-6 md:mb-8 border border-[#D50404]/20">
              <div class="text-xs md:text-sm text-white/60 mb-1">{{ $t('territory.potentialProfit') }}</div>
              <div class="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">
                {{ selectedCity.potentialProfit.toLocaleString() }} ₸
              </div>
            </div>

            <button 
              class="group w-full px-6 md:px-8 py-3 md:py-4 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] text-white text-base md:text-xl font-medium rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
            >
              <span class="relative z-10">
                {{ $t('territory.select') }} {{ $t(`territory.regions.${selectedCity.name}.name`) }}
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </template>

          <template v-else>
            <div class="h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-center">
              <div class="space-y-4 md:space-y-6">
                <div class="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center mx-auto">
                  <i class="pi pi-map-marker text-white text-2xl md:text-3xl"></i>
                </div>
                <p class="text-base md:text-xl text-white/60">{{ $t('territory.select') }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const selectedCity = ref(null)

const cities = [
  {
    name: "almaty",
    x: 75,
    y: 65,
    population: 2100000,
    available: 80,
    potentialProfit: 3000000
  },
  {
    name: "zhambyl",
    x: 62,
    y: 68,
    population: 1130000,
    available: 90,
    potentialProfit: 2200000
  },
  {
    name: "karagandy",
    x: 60,
    y: 45,
    population: 1380000,
    available: 85,
    potentialProfit: 2500000
  },
  {
    name: "aktubinsk",
    x: 29,
    y: 46,
    population: 900000,
    available: 95,
    potentialProfit: 2000000
  },
  {
    name: "pavlodar",
    x: 70,
    y: 32,
    population: 750000,
    available: 90,
    potentialProfit: 1800000,
    advantages: [
      'Индустриальный регион',
      'Высокий потенциал',
      'Развитая логистика',
      'Стабильный рынок'
    ]
  },
  {
    name: "eastKazakhstan",
    x: 84,
    y: 50,
    population: 1360000,
    available: 85,
    potentialProfit: 2300000
  },
  {
    name: "atyrauskaya",
    x: 15,
    y: 52,
    population: 660000,
    available: 90,
    potentialProfit: 2500000
  },
  {
    name: "kostanay",
    x: 42,
    y: 27,
    population: 870000,
    available: 95,
    potentialProfit: 1900000
  },
  {
    name: "westKazakhstan",
    x: 10,
    y: 37,
    population: 660000,
    available: 95,
    potentialProfit: 1800000
  },
  {
    name: "turkestan",
    x: 52,
    y: 78,
    population: 2000000,
    available: 90,
    potentialProfit: 2100000
  },
  {
    name: "kyzylordinskaya",
    x: 42,
    y: 65,
    population: 800000,
    available: 95,
    potentialProfit: 1700000
  },
  {
    name: "mangistauskaya",
    x: 15,
    y: 70,
    population: 700000,
    available: 90,
    potentialProfit: 2000000
  }
]

// Проверим данные при инициализации
console.log('Города при загрузке:', cities)

// Добавим функцию для выбора города с логированием
const selectCity = (city) => {
  console.log('Выбираем город:', city)
  selectedCity.value = city
  console.log('Установлен город:', selectedCity.value)
}

const getAdvantages = (cityName) => {
  const key = `territory.regions.${cityName}.advantages`
  if (t(key)) {
    const advantagesString = t(key)
    return advantagesString.split(', ')
  }
  return []
}

const citiesWithAdvantages = computed(() => {
  return cities.map(city => ({
    ...city,
    advantages: getAdvantages(city.name),
    translatedName: t(`territory.regions.${city.name}.name`)
  }))
})

defineEmits(['select-city'])
</script>

<style scoped>
@import '../assets/styles/components.css';

/* Анимация падающих частиц */
@keyframes particle-fall {
  0% {
    transform: translateY(-20px) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateY(200px) rotate(360deg);
    opacity: 0;
  }
}

/* Анимации для градиентных кругов */
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

/* Плавное появление для карточек */
.card-container {
  opacity: 0;
  transform: translateY(20px);
  animation: card-appear 0.6s ease-out forwards;
}

@keyframes card-appear {
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

  @keyframes particle-fall {
    0% {
      transform: translateY(-10px) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(100px) rotate(360deg);
      opacity: 0;
    }
  }

  .animate-pulse-slow,
  .animate-pulse-slow-reverse {
    animation-duration: 10s;
  }

  /* Уменьшаем размер шрифта для очень длинных названий */
  .whitespace-nowrap {
    font-size: 10px;
    line-height: 1.2;
    max-width: 120px;
    white-space: normal;
    text-align: center;
  }

  /* Увеличиваем область касания */
  .touch-manipulation {
    padding: 8px;
    margin: -8px;
  }

  /* Предотвращаем перекрытие подписей */
  .group:hover .absolute {
    z-index: 51;
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
  .animate-pulse-slow-reverse,
  .card-container {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* Оптимизация для маленьких экранов */
@media (max-width: 360px) {
  .text-xs {
    font-size: 0.65rem;
  }
  
  .rounded-lg {
    border-radius: 0.375rem;
  }

  .whitespace-nowrap {
    font-size: 9px;
    max-width: 100px;
    padding: 2px 4px;
  }
}

/* Улучшаем читаемость подписей */
.bg-white\/\[0\.03\] {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}
</style>