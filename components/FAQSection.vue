<template>
  <section class="section-container section-dark gradient-bg-dark">
    <!-- Фоновые элементы -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(213,4,4,0.1),transparent_50%)]"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="section-title animate-fade-in">
        ЧАСТО ЗАДАВАЕМЫЕ <span class="text-[#D50404]">ВОПРОСЫ</span>
      </h2>
      <p class="section-subtitle animate-slide-up">
        Ответы на самые популярные вопросы о нашей франшизе
      </p>

      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Левая колонка -->
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs.slice(0, Math.ceil(faqs.length / 2))" 
            :key="index"
            class="card-container animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div 
              class="flex items-start justify-between gap-4 cursor-pointer"
              @click="faq.isOpen = !faq.isOpen"
            >
              <div class="flex items-start gap-3">
                <i class="pi pi-question-circle text-[#D50404] text-xl mt-1"></i>
                <h3 class="text-lg font-bold">{{ faq.question }}</h3>
              </div>
              <i 
                class="pi text-[#D50404] text-xl transition-transform duration-300"
                :class="faq.isOpen ? 'pi-chevron-up' : 'pi-chevron-down'"
              ></i>
            </div>
            <div 
              v-show="faq.isOpen"
              class="pl-8 mt-4 text-gray-400"
            >
              {{ faq.answer }}
              <div v-if="faq.note" class="text-sm text-[#D50404] mt-2">
                {{ faq.note }}
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка -->
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs.slice(Math.ceil(faqs.length / 2))" 
            :key="index"
            class="card-container animate-slide-up"
            :style="{ animationDelay: `${(index + Math.ceil(faqs.length / 2)) * 0.1}s` }"
          >
            <div 
              class="flex items-start justify-between gap-4 cursor-pointer"
              @click="faq.isOpen = !faq.isOpen"
            >
              <div class="flex items-start gap-3">
                <i class="pi pi-question-circle text-[#D50404] text-xl mt-1"></i>
                <h3 class="text-lg font-bold">{{ faq.question }}</h3>
              </div>
              <i 
                class="pi text-[#D50404] text-xl transition-transform duration-300"
                :class="faq.isOpen ? 'pi-chevron-up' : 'pi-chevron-down'"
              ></i>
            </div>
            <div 
              v-show="faq.isOpen"
              class="pl-8 mt-4 text-gray-400"
            >
              {{ faq.answer }}
              <div v-if="faq.note" class="text-sm text-[#D50404] mt-2">
                {{ faq.note }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Дополнительный вопрос -->
      <div class="text-center mt-12 animate-slide-up">
        <p class="text-gray-400 mb-4">Не нашли ответ на свой вопрос?</p>
        <button 
          class="btn-primary text-lg px-12 py-4"
          @click="$emit('scroll-to-form')"
        >
          ЗАДАТЬ СВОЙ ВОПРОС
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Сколько времени нужно для запуска бизнеса?',
    answer: 'Запуск бизнеса занимает 30 дней с момента подписания договора. За это время мы проводим полное обучение, помогаем с регистрацией бизнеса и настройкой всех процессов.',
    note: 'Гарантируем запуск в срок',
    isOpen: false
  },
  {
    question: 'Какие инвестиции требуются?',
    answer: 'Минимальные инвестиции составляют 2,500,000₸. В эту сумму входит паушальный взнос, обучение, маркетинговые материалы и поддержка на всех этапах.',
    note: 'Возможна рассрочка платежа',
    isOpen: false
  },
  {
    question: 'Какая поддержка предоставляется?',
    answer: 'Мы предоставляем полную поддержку 24/7, включая обучение, маркетинговые материалы, помощь в найме персонала и консультации по всем вопросам ведения бизнеса.',
    note: 'Персональный менеджер всегда на связи',
    isOpen: false
  },
  {
    question: 'Есть ли гарантии прибыли?',
    answer: 'Да, мы гарантируем минимальную прибыль 2,500,000₸ в месяц при соблюдении наших рекомендаций и бизнес-процессов.',
    note: 'Подтверждено договором',
    isOpen: false
  },
  {
    question: 'Какой опыт требуется?',
    answer: 'Специальный опыт не требуется. Мы проводим полное обучение и передаем все необходимые знания и навыки для успешного ведения бизнеса.',
    isOpen: false
  },
  {
    question: 'Как быстро окупаются инвестиции?',
    answer: 'Срок окупаемости составляет 3-4 месяца при соблюдении нашей бизнес-модели и рекомендаций.',
    note: 'В среднем по сети',
    isOpen: false
  }
])

defineEmits(['scroll-to-form'])
</script>

<style scoped>
@import '../assets/styles/components.css';
</style>