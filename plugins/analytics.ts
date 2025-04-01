export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  // Google Analytics 4
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${config.public.gaId}`,
        async: true
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.public.gaId}');
        `
      }
    ]
  })

  // Яндекс.Метрика
  useHead({
    script: [
      {
        children: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(${config.public.ymId}, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true
          });
        `
      }
    ]
  })

  // Hotjar
  useHead({
    script: [
      {
        src: `https://static.hotjar.com/c/hotjar-${config.public.hotjarId}.js?sv=6`,
        async: true
      }
    ]
  })
}) 