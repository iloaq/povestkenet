<template>
  <section class="py-20 bg-black text-white relative overflow-hidden">
    <!-- Фоновые элементы -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(213,4,4,0.1),transparent_50%)]"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-4 animate-fade-in">
        КАК МЫ <span class="text-[#D50404]">ЗАПУСКАЕМ</span> ВАШ БИЗНЕС
      </h2>
      <p class="text-gray-400 text-center mb-16 max-w-2xl mx-auto animate-slide-up">
        Пошаговый план запуска вашего бизнеса с гарантированным результатом
      </p>

      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Временная шкала -->
        <div class="glassmorphism-dark p-8 rounded-lg animate-scale">
          <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
            <i class="pi pi-calendar text-[#D50404]"></i>
            План запуска
          </h3>
          
          <Timeline :value="launchSteps" class="custom-timeline">
            <template #content="slotProps">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-[#D50404] flex items-center justify-center">
                  <i :class="slotProps.item.icon" class="text-xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-2">{{ slotProps.item.title }}</h4>
                  <p class="text-gray-400 mb-2">{{ slotProps.item.description }}</p>
                  <div class="flex gap-2">
                    <Chip 
                      :label="slotProps.item.duration" 
                      class="bg-[#D50404] text-white"
                    />
                    <Chip 
                      :label="slotProps.item.focus" 
                      class="bg-gray-800 text-white"
                    />
                  </div>
                  <div v-if="slotProps.item.result" class="text-sm text-[#D50404] mt-2">
                    {{ slotProps.item.result }}
                  </div>
                </div>
              </div>
            </template>
          </Timeline>
        </div>

        <!-- Результаты -->
        <div class="space-y-8 animate-slide-up" style="animation-delay: 0.2s">
          <!-- Ключевые показатели -->
          <div class="glassmorphism-dark p-8 rounded-lg">
            <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
              <i class="pi pi-chart-bar text-[#D50404]"></i>
              Ключевые показатели
            </h3>
            <div class="grid grid-cols-2 gap-6">
              <div 
                v-for="metric in metrics" 
                :key="metric.label"
                class="text-center p-4 bg-black/30 rounded-lg"
              >
                <div class="text-[#D50404] text-3xl font-bold mb-2">
                  {{ metric.value }}
                </div>
                <div class="text-sm text-gray-400">
                  {{ metric.label }}
                </div>
                <div v-if="metric.comment" class="text-xs text-[#D50404] mt-1">
                  {{ metric.comment }}
                </div>
              </div>
            </div>
          </div>

          <!-- Поддержка -->
          <div class="glassmorphism-dark p-8 rounded-lg">
            <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
              <i class="pi pi-users text-[#D50404]"></i>
              Команда поддержки
            </h3>
            <div class="space-y-4">
              <div 
                v-for="support in supportTeam" 
                :key="support.role"
                class="flex items-center gap-4"
              >
                <Avatar 
                  :image="support.avatar" 
                  size="large" 
                  shape="circle"
                  class="border-2 border-[#D50404]"
                />
                <div>
                  <h4 class="font-bold">{{ support.role }}</h4>
                  <p class="text-sm text-gray-400">{{ support.description }}</p>
                  <div v-if="support.experience" class="text-xs text-[#D50404] mt-1">
                    {{ support.experience }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Кнопка призыва -->
      <div class="text-center mt-12 animate-slide-up">
        <Button 
          label="ПОЛУЧИТЬ ПОДРОБНЫЙ ПЛАН ЗАПУСКА" 
          class="p-button-danger p-button-lg font-bold"
          @click="$emit('scroll-to-form')"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const launchSteps = [
  {
    title: 'Подписание договора',
    description: 'Заключение договора франшизы и начало сотрудничества',
    icon: 'pi pi-file-edit',
    duration: '1 день',
    focus: 'Договор',
    result: 'Гарантия возврата инвестиций'
  },
  {
    title: 'Обучение и подготовка',
    description: 'Прохождение курса и стажировка в головном офисе',
    icon: 'pi pi-book',
    duration: '5 дней',
    focus: 'Обучение',
    result: '98% успешного освоения'
  },
  {
    title: 'Подбор персонала',
    description: 'Поиск и обучение персонала для вашего офиса',
    icon: 'pi pi-users',
    duration: '7 дней',
    focus: 'Персонал',
    result: 'Готовый штат сотрудников'
  },
  {
    title: 'Запуск рекламы',
    description: 'Настройка и запуск рекламной кампании',
    icon: 'pi pi-megaphone',
    duration: '7 дней',
    focus: 'Маркетинг',
    result: 'Первые клиенты через 3 дня'
  },
  {
    title: 'Открытие офиса',
    description: 'Запуск бизнеса и начало работы с клиентами',
    icon: 'pi pi-flag',
    duration: '10 дней',
    focus: 'Запуск',
    result: 'Прибыль от 2.5М₸ в месяц'
  }
]

const metrics = [
  { 
    label: 'До запуска', 
    value: '30 дней',
    comment: 'Гарантированный срок'
  },
  { 
    label: 'Готовность', 
    value: '100%',
    comment: 'Полная поддержка'
  },
  { 
    label: 'Прибыль', 
    value: '2.5М₸',
    comment: 'В первый месяц'
  },
  { 
    label: 'Поддержка', 
    value: '24/7',
    comment: 'Всегда на связи'
  }
]

const supportTeam = [
  {
    role: 'Персональный менеджер',
    description: 'Курирует все процессы запуска',
    avatar: '/images/manager.jpg',
    experience: '5+ лет опыта'
  },
  {
    role: 'Маркетолог',
    description: 'Помогает с рекламой и продвижением',
    avatar: '/images/marketer.jpg',
    experience: 'Успешные кейсы'
  },
  {
    role: 'Бухгалтер',
    description: 'Консультирует по финансовым вопросам',
    avatar: '/images/accountant.jpg',
    experience: '10+ лет опыта'
  }
]

defineEmits(['scroll-to-form'])
</script>

<style scoped>
.glassmorphism-dark {
  background: rgba(36, 36, 36, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.glassmorphism-dark:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(213, 4, 4, 0.2);
}

:deep(.custom-timeline) {
  .p-timeline-event-content {
    @apply bg-transparent;
  }
  
  .p-timeline-event-opposite {
    @apply hidden;
  }
  
  .p-timeline-event-separator {
    @apply border-gray-800;
  }
  
  .p-timeline-event-marker {
    @apply bg-[#D50404] border-[#D50404];
  }
}

:deep(.p-chip) {
  @apply bg-transparent;
  
  .p-chip-text {
    @apply text-white;
  }
}

:deep(.p-avatar) {
  @apply border-2 border-[#D50404];
}
</style> 