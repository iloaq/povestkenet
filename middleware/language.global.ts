export default defineNuxtRouteMiddleware((to) => {
  const path = to.fullPath
  
  // Пропускаем служебные пути
  if (path.startsWith('/api') || path.startsWith('/_nuxt')) {
    return
  }

  // Редирект с корня
  if (path === '/') {
    return navigateTo('/ru', { replace: true })
  }

  // Проверяем валидность языкового префикса
  const validPrefixes = ['/ru', '/kz']
  const currentPrefix = path.slice(0, 3)
  if (!validPrefixes.includes(currentPrefix)) {
    return navigateTo('/ru', { replace: true })
  }
}) 