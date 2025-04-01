// Плагин для корректной работы i18n
export default defineNuxtPlugin({
  name: 'i18n-plugin',
  setup() {
    // Хук для принудительного обновления компонентов при навигации
    useRouter().afterEach(() => {
      // Обновление состояния приложения после смены страницы
      nextTick()
    })
  }
}) 