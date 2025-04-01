<template>
  <div></div>
</template>

<script setup>
const { locale } = useI18n()
const { $setSeoMeta } = useNuxtApp()

useHead({
  htmlAttrs: computed(() => ({
    lang: locale.value
  })),
  meta: [
    { name: 'description', content: 'Франшиза юридической помощи призывникам' },
    { property: 'og:site_name', content: 'ПОВЕСТКАНЕТ' },
    { property: 'og:url', content: 'https://francise.poveskenet.kz' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: computed(() => locale.value === 'ru' ? 'ru_RU' : 'kk_KZ') },
    { property: 'og:locale:alternate', content: computed(() => locale.value === 'ru' ? 'kk_KZ' : 'ru_RU') }
  ],
  link: computed(() => [
    {
      rel: 'alternate',
      hreflang: `${locale.value}-kz`,
      href: `https://francise.poveskenet.kz/${locale.value}`
    },
    {
      rel: 'alternate',
      hreflang: `${locale.value === 'ru' ? 'kz' : 'ru'}-kz`,
      href: `https://francise.poveskenet.kz/${locale.value === 'ru' ? 'kz' : 'ru'}`
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: 'https://francise.poveskenet.kz/ru'
    }
  ])
})
</script> 