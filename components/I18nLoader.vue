<template>
  <!-- Компонент для обеспечения правильной загрузки переводов -->
  <div class="hidden">
    <!-- Технический компонент - не отображается -->
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'

const { locale } = useI18n()

// Следим за изменением языка
watch(locale, (newLocale) => {
  // Принудительное обновление компонентов при смене языка
  nextTick()
}, { immediate: true })
</script> 