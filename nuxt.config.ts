// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/i18n'
  ],
  css: [
    '@/assets/styles/tailwind.css',
    '@/assets/styles/base.css',
    'primeicons/primeicons.css'
  ],
  primevue: {
    options: {
      theme: {
        preset: 'none',
        options: {
          darkModeSelector: '.p-dark'
        }
      }
    }
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  compatibilityDate: '2025-03-30',
  i18n: {
    locales: [
      {
        code: 'ru',
        iso: 'ru-KZ',
        file: 'ru.json',
        name: 'Русский'
      },
      {
        code: 'kz',
        iso: 'kk-KZ',
        file: 'kz.json',
        name: 'Қазақша'
      }
    ],
    defaultLocale: 'ru',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    langDir: 'locales/'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      titleTemplate: '%s | ПОВЕСТКАНЕТ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Франшиза юридической помощи призывникам' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#D50404' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'ПОВЕСТКАНЕТ' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/ru',
        '/kz',
        '/ru/about',
        '/kz/about',
        '/ru/advantages',
        '/kz/advantages',
        '/ru/packages',
        '/kz/packages',
        '/ru/calculator',
        '/kz/calculator',
        '/ru/contacts',
        '/kz/contacts'
      ]
    }
  },
  // Переносим кастомные настройки в runtimeConfig.public
  runtimeConfig: {
    public: {
      site: {
        url: 'https://francise.poveskenet.kz',
        name: 'ПОВЕСТКАНЕТ',
        description: 'Франшиза юридической помощи призывникам',
        defaultLocale: 'ru',
        locales: ['ru', 'kz'],
        seo: {
          robots: {
            UserAgent: '*',
            Allow: '/',
            Disallow: ['/api/', '/admin/', '/private/'],
            Sitemap: 'https://francise.poveskenet.kz/sitemap.xml'
          },
          sitemap: {
            hostname: 'https://francise.poveskenet.kz',
            gzip: true,
            routes: [
              '/ru',
              '/kz',
              '/ru/about',
              '/kz/about',
              '/ru/advantages',
              '/kz/advantages',
              '/ru/packages',
              '/kz/packages',
              '/ru/calculator',
              '/kz/calculator',
              '/ru/contacts',
              '/kz/contacts'
            ]
          }
        }
      }
    }
  },
  ssr: true
})
