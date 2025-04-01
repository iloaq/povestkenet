<template>
  <div>
    <HomePage />
  </div>
</template>

<script setup lang="ts">
import HomePage from '~/components/HomePage.vue'

// Устанавливаем SEO метатеги в зависимости от локали
const { locale } = useI18n()
const title = computed(() => 
  locale.value === 'ru' 
    ? 'ПОВЕСТКАНЕТ | Франшиза юридической помощи призывникам в Казахстане'
    : 'ПОВЕСТКАНЕТ | Қазақстандағы әскери қызметкерлерге заңгерлік көмек франшизасы'
)

const description = computed(() =>
  locale.value === 'ru'
    ? 'Франшиза юридической помощи призывникам в Казахстане. Помощь в получении отсрочки, освобождения от армии и других вопросов.'
    : 'Қазақстандағы әскери қызметкерлерге заңгерлік көмеk франшизасы. Армиядан босату, кейінге қалдыру және басқа да мәселелер бойынша көмеk.'
)

// Устанавливаем метатеги
useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description }
  ]
})
</script> 