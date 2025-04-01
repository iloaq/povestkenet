<template>
  <div class="error-page">
    <h1>{{ $t('error.404.title') }}</h1>
    <p>{{ $t('error.404.description') }}</p>
    <NuxtLink :to="$localePath('/')" class="back-home">
      {{ $t('error.404.backHome') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 4rem;
  color: #D50404;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

.back-home {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #D50404;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.back-home:hover {
  background: #ff3333;
  transform: translateY(-2px);
}
</style> 