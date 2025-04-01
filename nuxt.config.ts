// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
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
    langDir: 'locales/',
    vueI18n: './i18n.config.ts'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      titleTemplate: '%s | ПОВЕСТКАНЕТ - Франшиза юридической помощи призывникам',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#D50404' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'yandex', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'canonical', href: 'https://francise.poveskenet.kz' }
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
      ],
      crawlLinks: true,
      failOnError: false
    },
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'SAMEORIGIN',
          'X-XSS-Protection': '1; mode=block'
        }
      }
    }
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'ui': ['primevue']
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core']
    }
  },
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    crossOriginPrefetch: true
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
      },
      // Добавляем ID для аналитики
      gaId: process.env.GA_ID || '',
      ymId: process.env.YM_ID || '',
      hotjarId: process.env.HOTJAR_ID || ''
    }
  },
  ssr: true,
  // Оптимизация изображений
  image: {
    provider: 'ipx',
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 100,
          height: 100
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 300,
          height: 300
        }
      }
    }
  },
  // Оптимизация сборки
  build: {
    transpile: ['vue-i18n']
  }
})
