export const usePerformance = () => {
  // Отложенная загрузка компонентов
  const lazyLoadComponent = (component: any, delay = 0, timeout = 3000) => {
    return defineAsyncComponent({
      loader: () => new Promise((resolve) => {
        setTimeout(() => {
          resolve(component)
        }, delay)
      }),
      timeout,
      suspensible: true
    })
  }

  // Оптимизация скролла
  const smoothScroll = (element: HTMLElement, offset = 0) => {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  // Оптимизация анимаций
  const animateOnScroll = (element: HTMLElement, callback: () => void) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback()
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    })

    observer.observe(element)
  }

  // Оптимизация изображений
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = reject
      img.src = src
    })
  }

  return {
    lazyLoadComponent,
    smoothScroll,
    animateOnScroll,
    preloadImage
  }
} 