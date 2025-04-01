<template>
  <div></div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { locale } = useI18n()

const schema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Franchise",
  "name": config.public.site.name,
  "description": config.public.site.description,
  "franchiseFee": "2500000",
  "currency": "KZT",
  "areaServed": "KZ",
  "parentOrganization": {
    "@type": "Organization",
    "name": config.public.site.name,
    "url": config.public.site.url,
    "logo": `${config.public.site.url}/logo.png`,
    "sameAs": [
      "https://t.me/poveskenet",
      "https://instagram.com/poveskenet",
      "https://wa.me/+77000000000"
    ]
  },
  "offers": {
    "@type": "Offer",
    "price": "2500000",
    "priceCurrency": "KZT",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-03-30",
    "url": config.public.site.url
  },
  "image": `${config.public.site.url}/og-image.jpg`,
  "url": config.public.site.url,
  "telephone": "+77000000000",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KZ"
  },
  "inLanguage": locale.value === 'ru' ? 'ru-KZ' : 'kk-KZ'
}))

// Оптимизированное добавление JSON-LD
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify(schema.value))
    }
  ]
})
</script> 