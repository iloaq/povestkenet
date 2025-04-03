<template>
  <div class="fixed-controls">
    <!-- Языковой переключатель -->
    <div class="lang-switcher">
      <button
        v-for="locale in locales"
        :key="locale.code"
        @click="switchLanguage(locale.code)"
        class="lang-link"
        :class="{ active: currentLocale === locale.code }"
      >
        <img 
          :src="`/flag/${locale.code}.svg`" 
          :alt="locale.code === 'ru' ? 'Русский' : 'Қазақша'"
          class="flag-icon"
        />
        <span class="lang-text">{{ locale.code === 'ru' ? 'Русский' : 'Қазақша' }}</span>
      </button>
    </div>

    <!-- WhatsApp кнопка -->
    <a 
      href="https://wa.me/77769959955" 
      target="_blank" 
      rel="noopener noreferrer"
      class="whatsapp-button"
    >
      <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-text">WhatsApp</span>
    </a>
  </div>
</template>

<script setup lang="ts">
const { locale: currentLocale, locales } = useI18n()
const router = useRouter()

const switchLanguage = (code: string) => {
  const currentPath = router.currentRoute.value.fullPath
  
  // Нормализуем текущий путь (удаляем лишние слеши)
  const normalizedCurrentPath = currentPath.replace(/\/+$/, '')
  
  // Если уже на нужном языке, не делаем ничего
  if (normalizedCurrentPath === `/${code}` || normalizedCurrentPath === `/${code}/index`) {
    return
  }
  
  // Получаем базовый путь без языкового префикса
  const basePath = normalizedCurrentPath.replace(/^\/(ru|kz)/, '')
  
  // Формируем новый путь (всегда без слеша в конце)
  const targetPath = `/${code}${basePath}`
  
  // При статическом режиме делаем принудительную перезагрузку
  window.location.href = targetPath
}
</script>

<style scoped>
.fixed-controls {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lang-switcher {
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  padding: 0.25rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.lang-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
}

.lang-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.lang-link.active {
  background: rgba(213, 4, 4, 0.2);
  color: #ff3333;
}

.flag-icon {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  object-fit: cover;
}

.whatsapp-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #25D366;
  color: white;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.whatsapp-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
}

.whatsapp-icon {
  width: 1.5rem;
  height: 1.5rem;
}

/* Адаптив для мобильных */
@media (max-width: 768px) {
  .fixed-controls {
    top: 0.5rem;
    right: 0.5rem;
  }

  .lang-text {
    display: none;
  }

  .lang-link {
    padding: 0.5rem;
  }

  .whatsapp-text {
    display: none;
  }

  .whatsapp-button {
    padding: 0.5rem;
  }

  .whatsapp-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}

/* Для очень маленьких экранов */
@media (max-width: 360px) {
  .fixed-controls {
    position: absolute;
  }
}

/* Для устройств без hover */
@media (hover: none) {
  .lang-link:active,
  .whatsapp-button:active {
    transform: scale(0.95);
  }
}
</style> 