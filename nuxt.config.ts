// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
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
    baseUrl: 'http://franchise.povestkenet.kz',
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      cookieSecure: false
    },
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
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix',
    vueI18n: './i18n.config.ts',
    skipSettingLocaleOnNavigate: false,
    bundle: {
      optimizeTranslationDirective: false
    }
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
        { name: 'yandex', content: 'index, follow' },
        { name: 'description', content: 'Франшиза юридической помощи призывникам. Профессиональная правовая поддержка в рамках законодательства. Бизнес с высокой рентабельностью и быстрой окупаемостью.' },
        { name: 'keywords', content: 'франшиза юридической помощи, франшиза призывникам, юридическая помощь призывникам, франшиза с высокой прибылью, бизнес в сфере права, военный билет, юридические услуги, франшиза в Казахстане, франшиза с быстрой окупаемостью, франшиза с поддержкой, франшиза с обучением, франшиза с маркетингом, франшиза с технической поддержкой, франшиза с готовой бизнес-моделью, франшиза с минимальными вложениями, франшиза с высокой рентабельностью, франшиза с возможностью масштабирования, франшиза с филиалами, франшиза с закрытой базой знаний, франшиза с регулярными обновлениями, франшиза с консультациями экспертов' },
        { name: 'author', content: 'ПОВЕСТКАНЕТ' },
        { property: 'og:title', content: 'ПОВЕСТКАНЕТ | Франшиза юридической помощи призывникам' },
        { property: 'og:description', content: 'Франшиза юридической помощи призывникам. Профессиональная правовая поддержка в рамках законодательства. Бизнес с высокой рентабельностью.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'http://franchise.povestkenet.kz' },
        { property: 'og:image', content: 'http://franchise.povestkenet.kz/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ПОВЕСТКАНЕТ | Франшиза юридической помощи призывникам' },
        { name: 'twitter:description', content: 'Франшиза юридической помощи призывникам. Профессиональная правовая поддержка в рамках законодательства.' },
        { name: 'twitter:image', content: 'http://franchise.povestkenet.kz/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'canonical', href: 'http://franchise.povestkenet.kz' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/ru', '/kz'],
      crawlLinks: true,
      ignore: ['/api'],
      autoSubfolderIndex: false
    },
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/': { 
        static: true,
        prerender: true,
        cache: { 
          maxAge: 60 * 60 * 24 
        }
      },
      '/ru': {
        static: true,
        prerender: true,
        cache: {
          maxAge: 60 * 60 * 24
        }
      },
      '/kz': {
        static: true,
        prerender: true,
        cache: {
          maxAge: 60 * 60 * 24
        }
      },
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
  // Переносим кастомные настройки в runtimeConfig.public
  runtimeConfig: {
    public: {
      site: {
        url: 'http://franchise.povestkenet.kz',
        name: 'ПОВЕСТКАНЕТ',
        description: 'Франшиза юридической помощи призывникам',
        defaultLocale: 'ru',
        locales: ['ru', 'kz'],
        seo: {
          robots: {
            UserAgent: '*',
            Allow: '/',
            Disallow: ['/api/', '/admin/', '/private/'],
            Sitemap: 'http://franchise.povestkenet.kz/sitemap.xml'
          },
          sitemap: {
            hostname: 'http://franchise.povestkenet.kz',
            gzip: true,
            routes: [
              '/ru',
              '/kz',
              '/'
            ]
          }
        }
      },
      // Добавляем ID для аналитики
      ymId: process.env.YM_ID,
      // Добавляем конфигурацию для Telegram
      telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
      telegramChatId: process.env.TELEGRAM_CHAT_ID
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
  }
})
