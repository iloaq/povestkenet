export const useImageOptimizer = () => {
  const getOptimizedImage = (src: string, options: {
    width?: number
    height?: number
    format?: 'webp' | 'avif' | 'jpeg'
    quality?: number
    loading?: 'lazy' | 'eager'
  } = {}): string => {
    const { width, height, format = 'webp', quality = 80 } = options
    const params = new URLSearchParams()
    
    if (width) params.append('w', width.toString())
    if (height) params.append('h', height.toString())
    params.append('f', format)
    params.append('q', quality.toString())
    
    return `${src}?${params.toString()}`
  }

  return {
    getOptimizedImage
  }
} 