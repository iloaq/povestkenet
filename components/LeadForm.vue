<template>
  <section id="lead-form" class="relative  flex items-center  overflow-hidden py-12 md:py-16">
    <!-- Фоновые эффекты -->
    <div class="absolute inset-0">
      <!-- Анимированные частицы - используем фиксированные позиции -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div v-for="i in 20" :key="i" 
             class="absolute w-1 h-1 bg-[#D50404] rounded-full particle"
             :style="{
               left: `${(i * 5) % 100}%`,
               top: `${(i * 7) % 100}%`,
               animationDelay: `${(i * 0.25)}s`
             }">
        </div>
      </div>

      
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Адаптивный заголовок -->
      <h2 class="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8 md:mb-12 px-2">
        <span class="text-white/90">{{ $t('leadForm.title1') }}</span>
        <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">
          {{ $t('leadForm.title2') }}
        </span>
      </h2>

      <div class="max-w-2xl mx-auto">
        <div class="bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4 md:p-6 lg:p-8">

          <!-- Форма -->
          <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
            <div class="space-y-1 md:space-y-2">
              <label class="block text-white/80 font-medium text-sm md:text-base">{{ $t('leadForm.form.nameLabel') }}</label>
              <input 
                v-model="formData.name"
                type="text"
                :placeholder="$t('leadForm.form.namePlaceholder')"
                class="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-white/90 
                       focus:border-[#D50404] focus:ring-1 focus:ring-[#D50404] transition-all duration-300
                       placeholder:text-white/30"
              />
            </div>

            <div class="space-y-1 md:space-y-2">
              <label class="block text-white/80 font-medium text-sm md:text-base">{{ $t('leadForm.form.phoneLabel') }}</label>
              <input 
                v-model="formData.phone"
                type="tel"
                :placeholder="$t('leadForm.form.phonePlaceholder')"
                class="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-white/90 
                       focus:border-[#D50404] focus:ring-1 focus:ring-[#D50404] transition-all duration-300
                       placeholder:text-white/30"
              />
            </div>

            <div class="flex items-center gap-2 md:gap-3">
              <div class="relative">
                <input 
                  v-model="consentChecked"
                  type="checkbox"
                  class="w-4 md:w-5 h-4 md:h-5 bg-white/[0.03] border border-white/[0.1] rounded
                         checked:bg-[#D50404] checked:border-[#D50404] transition-all duration-300"
                />
              </div>
              <label class="text-xs md:text-sm text-white/60">
                {{ $t('leadForm.form.consent') }}
              </label>
            </div>

            <button 
              type="submit"
              :disabled="!consentChecked"
              class="w-full group relative bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                     text-white text-lg md:text-xl font-medium rounded-lg md:rounded-xl py-3 md:py-4 px-6 md:px-8 
                     transform transition-all duration-300 
                     hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(213,4,4,0.3)]
                     disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span class="relative z-10">{{ $t('leadForm.form.button') }}</span>
              <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] 
                          rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          <!-- Бонусы -->
          <div class="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/[0.05]">
            <h3 class="text-lg md:text-xl font-bold text-white/90 mb-4 md:mb-6">{{ $t('leadForm.bonuses.title') }}</h3>
            <div class="grid gap-3 md:gap-4">
              <!-- Бонусные элементы -->
              <div class="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/[0.03] rounded-lg md:rounded-xl group hover:bg-white/[0.05] transition-all duration-300">
                <div class="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                            flex items-center justify-center shrink-0">
                  <i class="pi pi-file-edit text-white text-lg md:text-xl"></i>
                </div>
                <span class="text-sm md:text-base text-white/80">{{ $t('leadForm.bonuses.items.businessPlan.title') }}</span>
              </div>

              <div class="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/[0.03] rounded-lg md:rounded-xl group hover:bg-white/[0.05] transition-all duration-300">
                <div class="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                            flex items-center justify-center shrink-0">
                  <i class="pi pi-users text-white text-lg md:text-xl"></i>
                </div>
                <span class="text-sm md:text-base text-white/80">{{ $t('leadForm.bonuses.items.consultation.title') }}</span>
              </div>
            </div>
          </div>

          <!-- Социальные сети и доказательства -->
          <div class="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/[0.05]">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <!-- Социальные сети -->
              <div class="flex items-center gap-3 md:gap-4">
                <a v-for="(social, key) in ['telegram', 'whatsapp', 'instagram']" :key="social"
                   :href="`https://t.me/${social}`"
                   :title="$t(`leadForm.social.${social}`)"
                   class="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-white/[0.03] flex items-center justify-center
                          hover:bg-[#D50404]/10 transition-all duration-300 group">
                  <i :class="`pi pi-${social} text-[#D50404] text-lg md:text-xl group-hover:scale-110 transition-transform duration-300`"></i>
                </a>
              </div>

              <!-- Социальное доказательство -->
              <div class="flex items-center gap-3 md:gap-4">
                <div class="flex -space-x-2 md:-space-x-3">
                  <div v-for="i in 3" :key="i" 
                       class="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                              border-2 border-black flex items-center justify-center text-white text-sm md:text-base font-bold">
                    {{ i }}
                  </div>
                </div>
                <div>
                  <div class="font-bold text-sm md:text-base text-white/90">{{ $t('leadForm.proof.count') }}</div>
                  <div class="text-xs md:text-sm text-white/60">{{ $t('leadForm.proof.description') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Добавляем градиентные кружки внизу -->
    <div class="absolute -bottom-32 left-0 w-full h-48 md:h-64 pointer-events-none">
      <!-- Волнистый переход -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg class="w-full h-32" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path d="M0 25L48 31.7C96 38.3 192 51.7 288 55.8C384 60 480 55 576 46.7C672 38.3 768 26.7 864 25C960 23.3 1056 31.7 1152 36.7C1248 41.7 1344 43.3 1392 44.2L1440 45V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V25Z" 
                fill="url(#gradient-fill)"/>
          <defs>
            <linearGradient id="gradient-fill" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#D50404" stop-opacity="0.2"/>
              <stop offset="1" stop-color="#FF0000" stop-opacity="0.25"/>
              <stop offset="5" stop-color="#D50404" stop-opacity="0.2"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Градиентная линия -->
      <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D50404] to-transparent opacity-30"></div>

      <!-- Светящиеся точки -->
      <div class="absolute bottom-0 w-full flex justify-between px-4">
        <div class="w-2 h-2 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] shadow-[0_0_10px_rgba(213,4,4,0.5)] animate-pulse"></div>
        <div class="w-2 h-2 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] shadow-[0_0_10px_rgba(213,4,4,0.5)] animate-pulse" style="animation-delay: 0.5s"></div>
        <div class="w-2 h-2 rounded-full bg-gradient-to-r from-[#D50404] to-[#FF0000] shadow-[0_0_10px_rgba(213,4,4,0.5)] animate-pulse" style="animation-delay: 1s"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const config = useRuntimeConfig()

const consentChecked = ref(false)
const formData = reactive({
  name: '',
  phone: ''
})

const handleSubmit = async () => {
  if (!consentChecked.value) return

  const botToken = config.public.telegramBotToken
  const chatId = config.public.telegramChatId

  try {
    const response = await fetch(`https://api.telegram.org/bot8027243391:AAHGXl9P0OZuEqt5L_Wcu9Ko7Q13-Zd32oE/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: '-4712809342',
        text: `🎯 Новая заявка с сайта!\n\n👤 Имя: ${formData.name}\n📱 Телефон: ${formData.phone}\n\n🌐 Источник: ${window.location.href}`,
        parse_mode: 'HTML'
      })
    })

    if (!response.ok) {
      throw new Error('Ошибка отправки')
    }

    // Очищаем форму после успешной отправки
    formData.name = ''
    formData.phone = ''
    consentChecked.value = false

    // Показываем уведомление об успехе
    alert(t('leadForm.success'))
  } catch (e) {
    // Показываем уведомление об ошибке
    alert(t('leadForm.error'))
  }
}
</script>

<style scoped>
.particle {
  animation: particle-float 10s linear infinite;
}

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
}

/* Улучшенная производительность анимаций */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-pulse-slow-reverse {
    animation: none;
  }
}
</style> 