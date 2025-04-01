<template>
  <div
    ref="elementRef"
    :class="[
      'fade-in',
      { 'fade-in--visible': isVisible },
      { 'fade-in--reduced-motion': prefersReducedMotion }
    ]"
    :style="{
      '--delay': `${delay}ms`,
      '--duration': `${duration}ms`
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePerformance } from '~/utils/performance'

const props = withDefaults(defineProps<{
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
}>(), {
  delay: 0,
  duration: 600,
  threshold: 0.1,
  rootMargin: '50px'
})

const elementRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const prefersReducedMotion = ref(false)
const { animateOnScroll } = usePerformance()

// Проверка предпочтений пользователя
onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (elementRef.value) {
    animateOnScroll(elementRef.value, () => {
      isVisible.value = true
    })
  }
})
</script>

<style scoped>
.fade-in {
  @apply opacity-0 translate-y-4;
  will-change: opacity, transform;
  transition: opacity var(--duration) ease-out,
              transform var(--duration) ease-out;
  transition-delay: var(--delay);
}

.fade-in--visible {
  @apply opacity-100 translate-y-0;
}

.fade-in--reduced-motion {
  transition: none;
  transition-delay: 0;
}
</style> 