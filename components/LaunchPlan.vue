<template>
  <section id="launch-plan" class="relative  flex items-center  overflow-hidden py-12 md:py-16 lg:py-20">
    <!-- Фоновые эффекты -->
    <div class="absolute inset-0">
      <!-- Анимированные частицы -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div v-for="i in 20" :key="i" 
             class="absolute w-1 h-1 bg-[#D50404] rounded-full"
             :style="{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 5}s`,
               animation: 'particle-float 10s linear infinite'
             }">
        </div>
      </div>

      
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Заголовок -->
      <div class="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
          <span class="text-white/90">{{ $t('launchPlan.title1') }}</span>
          <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">{{ $t('launchPlan.title2') }}</span>
          <span class="text-white/90">{{ $t('launchPlan.title3') }}</span>
        </h2>
        <p class="text-lg md:text-xl text-white/60 px-2">{{ $t('launchPlan.description') }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
        <!-- План запуска -->
        <div class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/[0.05] 
                    shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300">
          <h3 class="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center">
              <i class="pi pi-calendar text-white text-lg md:text-xl"></i>
            </div>
            <span class="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">{{ $t('launchPlan.titlePlan') }}</span>
          </h3>
          
          <div class="space-y-6 md:space-y-8">
            <div v-for="(step, index) in launchSteps" :key="index"
                 class="flex items-start gap-3 md:gap-4 relative animate-slide-up"
                 :style="{ animationDelay: `${index * 0.1}s` }">
              <!-- Линия соединения -->
              <div v-if="index !== launchSteps.length - 1" 
                   class="absolute left-5 md:left-6 top-10 md:top-12 w-0.5 h-16 md:h-24 bg-gradient-to-b from-[#D50404] to-transparent">
              </div>
              
              <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center shrink-0">
                <i :class="step.icon" class="text-white text-lg md:text-xl"></i>
              </div>
              
              <div class="group-hover:translate-x-2 transition-transform duration-300">
                <h4 class="font-bold text-base md:text-lg mb-1 md:mb-2 text-white/90">{{ step.title }}</h4>
                <p class="text-sm md:text-base text-white/60 mb-2 md:mb-3">{{ step.description }}</p>
                <div class="flex flex-wrap gap-2 md:gap-3">
                  <div class="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-[#D50404]/10 text-[#D50404] text-xs md:text-sm">
                    {{ step.duration }}
                  </div>
                  <div class="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-white/5 text-white/60 text-xs md:text-sm">
                    {{ step.focus }}
                  </div>
                </div>
                <div class="text-xs md:text-sm text-[#D50404] mt-1 md:mt-2">{{ step.result }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка -->
        <div class="space-y-6 md:space-y-8">
          <!-- Ключевые показатели -->
          <div class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/[0.05] 
                      shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300">
            <h3 class="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
              <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center">
                <i class="pi pi-chart-bar text-white text-lg md:text-xl"></i>
              </div>
              <span class="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">{{ $t('launchPlan.keyMetrics') }}</span>
            </h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div v-for="metric in metrics" :key="metric.label"
                   class="group/card p-4 md:p-6 rounded-lg md:rounded-xl bg-black/20 border border-white/5 hover:border-[#D50404]/20 
                          transition-all duration-300 hover:-translate-y-1">
                <div class="text-2xl md:text-3xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">
                  {{ metric.value }}
                </div>
                <div class="text-sm md:text-base text-white/60">{{ metric.label }}</div>
                <div class="text-xs md:text-sm text-[#D50404] mt-1">{{ metric.comment }}</div>
              </div>
            </div>
          </div>

          <!-- Команда поддержки -->
          <div class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/[0.05] 
                      shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300">
            <h3 class="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
              <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] flex items-center justify-center">
                <i class="pi pi-users text-white text-lg md:text-xl"></i>
              </div>
              <span class="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">{{ $t('launchPlan.supportTeam') }}</span>
            </h3>
            
            <div class="space-y-4 md:space-y-6">
              <div v-for="member in supportTeam" :key="member.role"
                   class="group/member flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-black/20 border border-white/5 
                          hover:border-[#D50404]/20 transition-all duration-300">
                <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] p-0.5">
                  <img :src="member.avatar" class="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h4 class="font-bold text-sm md:text-base text-white/90">{{ member.role }}</h4>
                  <p class="text-xs md:text-sm text-white/60">{{ member.description }}</p>
                  <div class="text-xs md:text-sm text-[#D50404] mt-0.5 md:mt-1">{{ member.experience }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Кнопка -->
      <div class="text-center mt-8 md:mt-12 lg:mt-16">
        <button 
          @click="$emit('scroll-to-form')"
          class="group w-full md:w-auto px-8 md:px-12 py-4 md:py-5 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                 text-white text-lg md:text-xl font-medium rounded-xl md:rounded-2xl transition-all duration-300 
                 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
        >
          <span class="relative z-10">{{ $t('launchPlan.button') }}</span>
          <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const launchSteps = [
  'contract',
  'training',
  'staff',
  'advertising',
  'opening'
].map(key => ({
  title: t(`launchPlan.steps.${key}.title`),
  description: t(`launchPlan.steps.${key}.description`),
  icon: key === 'contract' ? 'pi pi-file-edit' :
        key === 'training' ? 'pi pi-book' :
        key === 'staff' ? 'pi pi-users' :
        key === 'advertising' ? 'pi pi-megaphone' : 'pi pi-flag',
  duration: t(`launchPlan.steps.${key}.duration`),
  focus: t(`launchPlan.steps.${key}.focus`),
  result: t(`launchPlan.steps.${key}.result`)
}))

const metrics = [
  'launch',
  'readiness',
  'support'
].map(key => ({
  label: t(`launchPlan.metrics.${key}.label`),
  value: t(`launchPlan.metrics.${key}.value`),
  comment: t(`launchPlan.metrics.${key}.comment`)
}))

const supportTeam = [
  'manager',
  'marketer',
  'accountant'
].map(key => ({
  role: t(`launchPlan.team.${key}.role`),
  description: t(`launchPlan.team.${key}.description`),
  avatar: `/images/${key}.jpg`,
  experience: t(`launchPlan.team.${key}.experience`)
}))

defineEmits(['scroll-to-form'])
</script>

<style scoped>
@keyframes particle-float {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate(100px, -100px) rotate(360deg);
    opacity: 0;
  }
}

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

/* Оптимизация для мобильных устройств */
@media (max-width: 768px) {
  .backdrop-blur-xl {
    backdrop-filter: blur(8px);
  }

  /* Оптимизация анимации частиц */
  @keyframes particle-float {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 0.8;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      transform: translate(50px, -50px) rotate(360deg);
      opacity: 0;
    }
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

  .group-hover\:translate-x-2 {
    transform: none;
  }
}

/* Улучшенная производительность анимаций */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-pulse-slow-reverse {
    animation: none;
  }

  .animate-slide-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style> 