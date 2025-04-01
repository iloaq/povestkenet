<template>
  <section class="relative flex items-center overflow-hidden py-12 md:py-16 lg:py-20">
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
          <span class="text-white/90">{{ $t('faqSection.title1') }}</span>
          <span class="bg-gradient-to-r from-[#D50404] to-[#FF0000] bg-clip-text text-transparent">{{ $t('faqSection.title2') }}</span>
        </h2>
        <p class="text-lg md:text-xl text-white/60 px-2">{{ $t('faqSection.description') }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
        <!-- Левая колонка -->
        <div class="space-y-4 md:space-y-6">
          <div v-for="(faq, index) in faqs.slice(0, Math.ceil(faqs.length / 2))" 
               :key="index"
               class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/[0.05] 
                      shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300
                      animate-slide-up overflow-hidden"
               :style="{ animationDelay: `${index * 0.1}s` }">
            
            <div class="p-4 md:p-6 cursor-pointer" @click="faq.isOpen = !faq.isOpen">
              <div class="flex items-start justify-between gap-3 md:gap-4">
                <div class="flex items-start gap-3 md:gap-4">
                  <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                              flex items-center justify-center shrink-0">
                    <i class="pi pi-question-circle text-white text-base md:text-xl"></i>
                  </div>
                  <h3 class="text-base md:text-lg font-bold text-white/90 group-hover:text-white transition-colors">
                    {{ faq.question }}
                  </h3>
                </div>
                <div class="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white/[0.03] flex items-center justify-center
                            group-hover:bg-[#D50404]/10 transition-all duration-300">
                  <i class="pi text-[#D50404] text-sm md:text-base transition-transform duration-300"
                     :class="faq.isOpen ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
                </div>
              </div>
              
              <div v-show="faq.isOpen" 
                   class="mt-4 md:mt-6 pl-11 md:pl-14 text-white/60 space-y-3 md:space-y-4 animate-fade-in">
                <p class="text-sm md:text-base">{{ faq.answer }}</p>
                <div v-if="faq.note" 
                     class="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-[#D50404]/10 text-xs md:text-sm text-[#D50404]">
                  {{ faq.note }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка -->
        <div class="space-y-4 md:space-y-6">
          <div v-for="(faq, index) in faqs.slice(Math.ceil(faqs.length / 2))" 
               :key="index"
               class="group bg-white/[0.03] backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/[0.05] 
                      shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.05] transition-all duration-300
                      animate-slide-up overflow-hidden"
               :style="{ animationDelay: `${(index + Math.ceil(faqs.length / 2)) * 0.1}s` }">
            
            <div class="p-4 md:p-6 cursor-pointer" @click="faq.isOpen = !faq.isOpen">
              <div class="flex items-start justify-between gap-3 md:gap-4">
                <div class="flex items-start gap-3 md:gap-4">
                  <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                              flex items-center justify-center shrink-0">
                    <i class="pi pi-question-circle text-white text-base md:text-xl"></i>
                  </div>
                  <h3 class="text-base md:text-lg font-bold text-white/90 group-hover:text-white transition-colors">
                    {{ faq.question }}
                  </h3>
                </div>
                <div class="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white/[0.03] flex items-center justify-center
                            group-hover:bg-[#D50404]/10 transition-all duration-300">
                  <i class="pi text-[#D50404] text-sm md:text-base transition-transform duration-300"
                     :class="faq.isOpen ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
                </div>
              </div>
              
              <div v-show="faq.isOpen" 
                   class="mt-4 md:mt-6 pl-11 md:pl-14 text-white/60 space-y-3 md:space-y-4 animate-fade-in">
                <p class="text-sm md:text-base">{{ faq.answer }}</p>
                <div v-if="faq.note" 
                     class="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-[#D50404]/10 text-xs md:text-sm text-[#D50404]">
                  {{ faq.note }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Дополнительный вопрос -->
      <div class="text-center mt-8 md:mt-12 lg:mt-16">
        <p class="text-white/60 text-base md:text-lg mb-4 md:mb-6">{{ $t('faqSection.additionalQuestion') }}</p>
        <button 
          @click="$emit('scroll-to-form')"
          class="group w-full md:w-auto px-8 md:px-12 py-4 md:py-5 relative bg-gradient-to-r from-[#D50404] to-[#FF0000] 
                 text-white text-lg md:text-xl font-medium rounded-xl md:rounded-2xl transition-all duration-300 
                 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(213,4,4,0.3)] overflow-hidden"
        >
          <span class="relative z-10">{{ $t('faqSection.button') }}</span>
          <div class="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#D50404] 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const faqs = ref([
  {
    question: t('faqSection.questions.launchTime.question'),
    answer: t('faqSection.questions.launchTime.answer'),
    note: t('faqSection.questions.launchTime.note'),
    isOpen: false
  },
  {
    question: t('faqSection.questions.investment.question'),
    answer: t('faqSection.questions.investment.answer'),
    note: t('faqSection.questions.investment.note'),
    isOpen: false
  },
  {
    question: t('faqSection.questions.support.question'),
    answer: t('faqSection.questions.support.answer'),
    note: t('faqSection.questions.support.note'),
    isOpen: false
  },
  {
    question: t('faqSection.questions.profitGuarantee.question'),
    answer: t('faqSection.questions.profitGuarantee.answer'),
    note: t('faqSection.questions.profitGuarantee.note'),
    isOpen: false
  },
  {
    question: t('faqSection.questions.experience.question'),
    answer: t('faqSection.questions.experience.answer'),
    isOpen: false
  },
  {
    question: t('faqSection.questions.payback.question'),
    answer: t('faqSection.questions.payback.answer'),
    note: t('faqSection.questions.payback.note'),
    isOpen: false
  }
])

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

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

/* Оптимизация для мобильных устройств */
@media (max-width: 768px) {
  .backdrop-blur-xl {
    backdrop-filter: blur(8px);
  }

  .animate-slide-up {
    animation-duration: 0.4s;
  }

  /* Оптимизация частиц для мобильных */
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
  
  .animate-slide-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .animate-fade-in {
    animation: none;
    opacity: 1;
  }
}
</style>