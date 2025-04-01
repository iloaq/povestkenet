<template>
  <div></div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { locale } = useI18n()
const route = useRoute()

// Базовые метатеги для сайта
const baseMeta = {
  site_name: config.public.site.name,
  url: config.public.site.url,
  description: config.public.site.description,
  type: 'website',
  locale: computed(() => locale.value === 'ru' ? 'ru_RU' : 'kk_KZ'),
  alternateLocale: computed(() => locale.value === 'ru' ? 'kk_KZ' : 'ru_RU')
}

// Получаем текущий путь без префикса языка
const currentPath = computed(() => route.path.replace(`/${locale.value}`, ''))

// Динамические метатеги для текущей страницы
const pageMeta = computed(() => {
  const title = computed(() => {
    const baseTitle = config.public.site.name
    const pageTitle = currentPath.value === '/' ? '' : ` - ${currentPath.value.split('/').pop()}`
    return `${baseTitle}${pageTitle}`
  })

  return {
    title: title.value,
    description: config.public.site.description,
    url: `${config.public.site.url}${route.path}`,
    image: `${config.public.site.url}/og-image.jpg`
  }
})

// Устанавливаем метатеги
useHead({
  htmlAttrs: computed(() => ({
    lang: locale.value
  })),
  title: computed(() => pageMeta.value.title),
  meta: [
    { name: 'description', content: pageMeta.value.description },
    { property: 'og:title', content: pageMeta.value.title },
    { property: 'og:description', content: pageMeta.value.description },
    { property: 'og:url', content: pageMeta.value.url },
    { property: 'og:image', content: pageMeta.value.image },
    { property: 'og:type', content: baseMeta.type },
    { property: 'og:site_name', content: baseMeta.site_name },
    { property: 'og:locale', content: baseMeta.locale },
    { property: 'og:locale:alternate', content: baseMeta.alternateLocale },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageMeta.value.title },
    { name: 'twitter:description', content: pageMeta.value.description },
    { name: 'twitter:image', content: pageMeta.value.image }
  ],
  link: computed(() => [
    // Канонический URL
    { rel: 'canonical', href: pageMeta.value.url },
    // Альтернативные языковые версии
    {
      rel: 'alternate',
      hreflang: `${locale.value}-kz`,
      href: `${config.public.site.url}/${locale.value}${currentPath.value}`
    },
    {
      rel: 'alternate',
      hreflang: `${locale.value === 'ru' ? 'kz' : 'ru'}-kz`,
      href: `${config.public.site.url}/${locale.value === 'ru' ? 'kz' : 'ru'}${currentPath.value}`
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${config.public.site.url}/ru${currentPath.value}`
    }
  ])
})
</script> 