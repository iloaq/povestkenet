<template>
  <div class="min-h-screen flex flex-col bg-gradient-dark relative noise-bg">
    <!-- Фоновые графические элементы -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-red-600 rounded-full opacity-10 blur-[100px]"></div>
      <div class="absolute top-[60%] left-[5%] w-[400px] h-[400px] bg-red-600 rounded-full opacity-10 blur-[100px]"></div>
      <div class="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-red-600 rounded-full opacity-10 blur-[100px]"></div>
    </div>
    
    <!-- Главный экран -->
    <section class="relative bg-gradient-dark text-white py-16 md:py-24 min-h-screen">
      <div class="container mx-auto px-4 md:px-8 relative h-full flex flex-col">
        <!-- Логотип -->
        <div class="mb-6">
          <p class="text-4xl md:text-5xl font-bold tracking-tighter">
            ПОВЕСТКЕ<span class="text-[#D50404]">НЕТ</span>
          </p>
        </div>
        
        <!-- Основной контент -->
        <div class="flex flex-col md:flex-row items-start justify-between flex-1">
          <div class="md:w-1/2 z-10">
            <h1 class="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              ФРАНШИЗА ЮРИДИЧЕСКИХ УСЛУГ С ПРИБЫЛЬЮ 
              <span class="text-[#D50404] block mt-2">ОТ 500 000 ₽ В МЕСЯЦ</span>
            </h1>
            
            <!-- Используем Card из PrimeVue для статистики -->
            <div class="space-y-4 mb-8">
              <Card v-for="stat in mainStats" :key="stat.value" 
                    class="bg-black/30 backdrop-blur hover:scale-105 transition-all">
                <template #content>
                <div class="flex items-center">
                    <i :class="stat.icon" class="text-[#D50404] mr-3 text-xl"></i>
                    <span>
                      <b class="text-[#D50404]">{{ stat.value }}</b> {{ stat.text }}
                    </span>
                  </div>
                </template>
              </Card>
            </div>
            
            <!-- Кнопка PrimeVue -->
            <Button label="ПОЛУЧИТЬ ФИНАНСОВУЮ МОДЕЛЬ" 
                icon="pi pi-arrow-right"
                    class="w-full md:w-auto p-button-danger p-button-lg"
              @click="scrollToForm"
            />
          </div>
          
          <div class="md:w-2/5 w-full h-[35vh] md:h-full relative">
            <div class="absolute -right-10 -top-10 w-[200px] h-[200px] bg-red-600 rounded-full opacity-10 blur-[50px]"></div>
            <div class=" w-full h-auto z-10 float-animation">
              <img 
                  src="/hero-img.png" 
                  alt="Деловое партнерство" 
                class="absolute max-w-[400px] w-[400px] md:w-[800px] md:max-w-[800px] right-0 md:-right-40 -bottom-[20vw] md:-bottom-[100vh] h-auto z-0 float-animation" 
              />
            </div>
          </div>
        </div>
        
        <!-- Плавающие элементы на фоне -->
        <div class="absolute top-20 right-10 w-10 h-10 rounded-full bg-red-600 opacity-20 float-animation"></div>
        <div class="absolute bottom-20 left-10 w-5 h-5 rounded-full bg-red-600 opacity-20 float-animation" style="animation-delay: 1s"></div>
        <div class="absolute top-40 left-20 w-8 h-8 rounded-full bg-red-600 opacity-20 float-animation" style="animation-delay: 2s"></div>
      </div>
    </section>

    <!-- Статистика компании - интерактивная с анимацией счетчиков -->
    <section class="py-16 bg-black text-white border-t border-b border-gray-800 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('/abstract-dots.svg')] opacity-5 parallax-bg"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl font-bold text-center mb-16">ФРАНШИЗА <span class="text-red-600">В ЦИФРАХ</span></h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <!-- Интерактивные карточки с анимацией при наведении -->
          <div class="flex flex-col items-center text-center animate-block glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all card-3d" 
               @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
               @mouseleave="(e) => resetCardRotation($event.currentTarget)">
            <div class="card-3d-content">
              <div class="text-5xl font-bold text-red-600 mb-4 animate-stat text-glow" data-suffix=" ₽">618368</div>
              <h3 class="text-lg">Средняя прибыль одного офиса</h3>
            </div>
          </div>
          
          <div class="flex flex-col items-center text-center animate-block glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all card-3d"
               @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
               @mouseleave="(e) => resetCardRotation($event.currentTarget)">
            <div class="card-3d-content">
              <div class="text-5xl font-bold text-red-600 mb-4 animate-stat text-glow" data-suffix="%">70</div>
              <h3 class="text-lg">Партнеров в прибыли с первого месяца</h3>
            </div>
          </div>
          
          <div class="flex flex-col items-center text-center animate-block glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all card-3d"
               @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
               @mouseleave="(e) => resetCardRotation($event.currentTarget)">
            <div class="card-3d-content">
              <div class="text-5xl font-bold text-red-600 mb-4 animate-stat text-glow" data-suffix=" дней">30</div>
              <h3 class="text-lg">Срок запуска бизнеса</h3>
            </div>
          </div>
          
          <div class="flex flex-col items-center text-center animate-block glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all card-3d"
               @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
               @mouseleave="(e) => resetCardRotation($event.currentTarget)">
            <div class="card-3d-content">
              <div class="text-5xl font-bold text-white mb-4 animate-stat text-glow" data-suffix="+">100</div>
              <h3 class="text-lg">Офисов по всей России</h3>
            </div>
          </div>
          
          <div class="flex flex-col items-center text-center animate-block glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all card-3d"
               @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
               @mouseleave="(e) => resetCardRotation($event.currentTarget)">
            <div class="card-3d-content">
              <div class="text-5xl font-bold text-white mb-4 animate-stat text-glow" data-suffix="+">21000</div>
              <h3 class="text-lg">Клиентов в сети</h3>
            </div>
          </div>
          
          <div class="flex flex-col items-center text-center animate-block glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all card-3d"
               @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
               @mouseleave="(e) => resetCardRotation($event.currentTarget)">
            <div class="card-3d-content">
              <div class="text-5xl font-bold text-white mb-4 text-glow">3-5 мес</div>
              <h3 class="text-lg">Средний срок окупаемости</h3>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-16">
          <Button 
            label="ПОЛУЧИТЬ РАСЧЁТ ДЛЯ СВОЕГО ГОРОДА" 
            class="font-bold bg-gradient-red hover:bg-red-700 text-white border-none px-10 py-3 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 glow-effect pulse-animation"
            @click="scrollToForm"
          />
        </div>
      </div>
    </section>

    <!-- Видеоотзывы - модернизированный блок -->
    <section class="py-20 bg-gradient-dark text-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('/abstract-grid.svg')] opacity-5 parallax-bg"></div>
      <div class="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-red-600 rounded-full opacity-10 blur-[150px]"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-16 ">ИСТОРИИ <span class="text-red-600">УСПЕХА</span></h2>
        
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Видеоотзыв 1 -->
            <div class="glassmorphism-dark rounded-lg overflow-hidden animate-block card-3d transform hover:scale-102 transition-all duration-300 hover:glow-effect"
                 @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
                 @mouseleave="(e) => resetCardRotation($event.currentTarget)">
              <div class="card-3d-content">
                <div class="relative">
                  <div class="relative pb-[56.25%] h-0 overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
                      <div class="w-20 h-20 rounded-full bg-gradient-red flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all pulse-animation">
                        <i class="pi pi-play text-white text-2xl"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                
                <div class="p-6">
                  <div class="flex items-center mb-3">
                    <div class="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg mr-4">А</div>
                    <div>
                      <h3 class="text-xl font-bold">Алексей, г. Самара</h3>
                      <p class="text-gray-400">Запустил бизнес за 28 дней</p>
                    </div>
                  </div>
                  <p class="text-lg italic">"Прибыль в первый месяц составила 470 000 рублей, сейчас стабильно более 600 000"</p>
                  
                  <div class="mt-4 pt-4 border-t border-gray-700">
                    <div class="flex justify-between">
                      <div>
                        <p class="text-sm text-gray-400">Инвестиции</p>
                        <p class="text-xl font-bold text-white">600 000 ₽</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Окупаемость</p>
                        <p class="text-xl font-bold text-white">2 месяца</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Прибыль</p>
                        <p class="text-xl font-bold text-red-600">617 000 ₽</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Видеоотзыв 2 -->
            <div class="glassmorphism-dark rounded-lg overflow-hidden animate-block card-3d transform hover:scale-102 transition-all duration-300 hover:glow-effect"
                 @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
                 @mouseleave="(e) => resetCardRotation($event.currentTarget)">
              <div class="card-3d-content">
                <div class="relative">
                  <div class="relative pb-[56.25%] h-0 overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
                      <div class="w-20 h-20 rounded-full bg-gradient-red flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all pulse-animation">
                        <i class="pi pi-play text-white text-2xl"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                
                <div class="p-6">
                  <div class="flex items-center mb-3">
                    <div class="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg mr-4">М</div>
                    <div>
                      <h3 class="text-xl font-bold">Марина, г. Тверь</h3>
                      <p class="text-gray-400">Население города: 420 000</p>
                    </div>
                  </div>
                  <p class="text-lg italic">"Без юридического образования вышла на доход 530 000 рублей к третьему месяцу работы"</p>
                  
                  <div class="mt-4 pt-4 border-t border-gray-700">
                    <div class="flex justify-between">
                      <div>
                        <p class="text-sm text-gray-400">Инвестиции</p>
                        <p class="text-xl font-bold text-white">650 000 ₽</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Окупаемость</p>
                        <p class="text-xl font-bold text-white">3 месяца</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Прибыль</p>
                        <p class="text-xl font-bold text-red-600">530 000 ₽</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <Button 
              label="СМОТРЕТЬ ВСЕ ИСТОРИИ УСПЕХА" 
              class="font-bold bg-transparent hover:bg-gray-800 text-white border border-red-600 rounded-lg px-8 py-3 text-lg transition-all transform hover:-translate-y-1 hover:shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- "Что вы получаете" - модернизированный блок -->
    <section class="py-20 bg-gradient-dark text-white relative overflow-hidden">
      <div class="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] bg-red-600 rounded-full opacity-10 blur-[150px]"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-16">ЧТО ВЫ <span class="text-red-600">ПОЛУЧАЕТЕ</span></h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Трендовые карточки с 3D-эффектом -->
          <div class="relative animate-block glassmorphism-dark p-8 rounded-lg border border-gray-800 h-full card-3d overflow-hidden group"
               @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
               @mouseleave="(e) => resetCardRotation($event.currentTarget)">
            <div class="card-3d-content">
              <div class="absolute top-0 right-0 w-20 h-20 bg-red-600 opacity-10 blur-[30px] group-hover:opacity-20 transition-all"></div>
              <div class="relative mb-8">
                <div class="flex items-center">
                  <div class="w-14 h-14 rounded-full bg-gradient-red flex items-center justify-center text-white text-2xl mr-4">
                    <i class="pi pi-check"></i>
                  </div>
                  <h3 class="text-2xl font-bold">ГОТОВЫЙ БИЗНЕС</h3>
                </div>
                <div class="h-1 w-20 bg-gradient-red mt-4"></div>
              </div>
              
              <ul class="space-y-4">
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Полностью настроенные бизнес-процессы</span>
                </li>
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Оборудованный офис под ключ</span>
                </li>
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Рекрутинг персонала с нашей помощью</span>
                </li>
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Поддержка при открытии 24/7</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="relative animate-block glassmorphism-dark p-8 rounded-lg border border-gray-800 h-full card-3d overflow-hidden group"
               @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
               @mouseleave="(e) => resetCardRotation($event.currentTarget)">
            <div class="card-3d-content">
              <div class="absolute top-0 right-0 w-20 h-20 bg-red-600 opacity-10 blur-[30px] group-hover:opacity-20 transition-all"></div>
              <div class="relative mb-8">
                <div class="flex items-center">
                  <div class="w-14 h-14 rounded-full bg-gradient-red flex items-center justify-center text-white text-2xl mr-4">
                    <i class="pi pi-chart-line"></i>
                  </div>
                  <h3 class="text-2xl font-bold">КЛИЕНТЫ И ПРОДАЖИ</h3>
                </div>
                <div class="h-1 w-20 bg-gradient-red mt-4"></div>
              </div>
              
              <ul class="space-y-4">
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Настроенная воронка привлечения клиентов</span>
                </li>
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Базы потенциальных клиентов</span>
                </li>
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Эффективные скрипты продаж</span>
                </li>
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Курирующий менеджер отдела продаж</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="relative animate-block glassmorphism-dark p-8 rounded-lg border border-gray-800 h-full card-3d overflow-hidden group"
               @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
               @mouseleave="(e) => resetCardRotation($event.currentTarget)">
            <div class="card-3d-content">
              <div class="absolute top-0 right-0 w-20 h-20 bg-red-600 opacity-10 blur-[30px] group-hover:opacity-20 transition-all"></div>
              <div class="relative mb-8">
                <div class="flex items-center">
                  <div class="w-14 h-14 rounded-full bg-gradient-red flex items-center justify-center text-white text-2xl mr-4">
                    <i class="pi pi-users"></i>
                  </div>
                  <h3 class="text-2xl font-bold">ПОДДЕРЖКА И РАЗВИТИЕ</h3>
                </div>
                <div class="h-1 w-20 bg-gradient-red mt-4"></div>
              </div>
              
              <ul class="space-y-4">
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Юридическое сопровождение вашей работы</span>
                </li>
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Решение проблем с дебиторской задолженностью</span>
                </li>
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Обучение и регулярное повышение квалификации</span>
                </li>
                <li class="flex items-start transform hover:translate-x-2 transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Сообщество успешных партнеров</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Бизнес-модель модернизированная -->
    <section class="py-20 bg-black text-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('/abstract-circuit.svg')] opacity-5 parallax-bg"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-16">КАК <span class="text-red-600">РАБОТАЕТ БИЗНЕС</span></h2>
        
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div class="animate-block">
              <h3 class="text-3xl font-bold mb-8 gradient-text">Прозрачная бизнес-модель с прогнозируемой прибылью</h3>
              
              <div class="space-y-8">
                <div class="glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all hover:glow-effect">
                  <p class="text-xl font-bold flex items-center mb-2">
                    <span class="w-10 h-10 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white text-lg mr-4">1</span>
                    Юридическая помощь призывникам
                  </p>
                  <p class="text-gray-400">Защищаем права призывников с законными проблемами здоровья. Средний чек — <span class="text-white font-bold">107 000₽</span>.</p>
                </div>
                
                <div class="glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all hover:glow-effect">
                  <p class="text-xl font-bold flex items-center mb-2">
                    <span class="w-10 h-10 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white text-lg mr-4">2</span>
                    Стандартизированные процессы
                  </p>
                  <p class="text-gray-400">Вы заключаете договоры с клиентами, управляющая компания берет на себя все юридические процедуры.</p>
                </div>
                
                <div class="glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all hover:glow-effect">
                  <p class="text-xl font-bold flex items-center mb-2">
                    <span class="w-10 h-10 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white text-lg mr-4">3</span>
                    Высокая рентабельность
                  </p>
                  <p class="text-gray-400">Чистая прибыль <span class="text-white font-bold">45-50%</span> от оборота при правильном следовании бизнес-процессам.</p>
                </div>
              </div>
            </div>
            
            <div class="animate-block glassmorphism-dark p-8 rounded-lg border border-gray-800 card-3d overflow-hidden"
                 @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
                 @mouseleave="(e) => resetCardRotation($event.currentTarget)">
              <div class="card-3d-content">
                <h3 class="text-2xl font-bold mb-6 flex items-center">
                  <i class="pi pi-chart-bar text-red-600 mr-3"></i>
                  Финансовая модель (в месяц)
                </h3>
                
                <div class="space-y-4 mb-6">
                  <div class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-800 transition-all border-b border-gray-700">
                    <span class="flex items-center">
                      <i class="pi pi-file-edit text-red-600 mr-2"></i>
                      Количество договоров
                    </span>
                    <span class="font-bold text-red-600 text-2xl">25</span>
                  </div>
                  <div class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-800 transition-all border-b border-gray-700">
                    <span class="flex items-center">
                      <i class="pi pi-wallet text-red-600 mr-2"></i>
                      Средний чек
                    </span>
                    <span class="font-bold text-red-600 text-2xl">107 000₽</span>
                  </div>
                  <div class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-800 transition-all border-b border-gray-700">
                    <span class="flex items-center">
                      <i class="pi pi-money-bill text-red-600 mr-2"></i>
                      Выручка
                    </span>
                    <span class="font-bold text-red-600 text-2xl">2 675 000₽</span>
                  </div>
                  <div class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-800 transition-all border-b border-gray-700">
                    <span class="flex items-center">
                      <i class="pi pi-megaphone text-red-600 mr-2"></i>
                      Маркетинг и реклама
                    </span>
                    <span>400 000₽</span>
                  </div>
                  <div class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-800 transition-all border-b border-gray-700">
                    <span class="flex items-center">
                      <i class="pi pi-building text-red-600 mr-2"></i>
                      Аренда и коммунальные
                    </span>
                    <span>120 000₽</span>
                  </div>
                  <div class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-800 transition-all border-b border-gray-700">
                    <span class="flex items-center">
                      <i class="pi pi-users text-red-600 mr-2"></i>
                      ФОТ с налогами
                    </span>
                    <span>350 000₽</span>
                  </div>
                  <div class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-800 transition-all border-b border-gray-700">
                    <span class="flex items-center">
                      <i class="pi pi-calculator text-red-600 mr-2"></i>
                      Прочие расходы
                    </span>
                    <span>150 000₽</span>
                  </div>
                  <div class="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-black to-gray-900 mt-2">
                    <span class="font-bold text-xl">ЧИСТАЯ ПРИБЫЛЬ</span>
                    <span class="font-bold text-red-600 text-3xl text-glow">618 000₽</span>
                  </div>
                </div>
                
                <div class="text-center">
                  <Button 
                    label="ПОЛУЧИТЬ ПОЛНУЮ ФИНМОДЕЛЬ" 
                    class="w-full font-bold bg-gradient-red hover:bg-red-700 text-white border-none py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 glow-effect"
                    @click="scrollToForm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Модернизированные пакеты франшизы - завершение блока Премиум -->
    <section class="py-20 bg-gradient-dark text-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('/abstract-dots.svg')] opacity-5 parallax-bg"></div>
      <div class="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-red-600 rounded-full opacity-10 blur-[150px]"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-16">ПАКЕТЫ <span class="text-red-600">ФРАНШИЗЫ</span></h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <!-- Стандарт -->
          <div class="animate-block glassmorphism-dark rounded-lg border border-gray-700 relative overflow-hidden transform hover:scale-105 transition-all hover:border-gray-600 h-full">
            <div class="p-8 flex flex-col h-full">
              <div class="mb-8">
                <h3 class="text-3xl font-bold mb-2">СТАНДАРТ</h3>
                <div class="h-1 w-16 bg-gradient-red"></div>
                <div class="text-5xl font-bold my-6 flex items-end">
                  от 600 000 <span class="text-3xl ml-1">₽</span>
                  <span class="text-gray-400 text-lg ml-3 font-normal">/ разовый платеж</span>
                </div>
                <p class="text-gray-400 flex items-center">
                  <i class="pi pi-clock text-red-600 mr-2"></i>
                  Окупаемость: 4-6 месяцев
                </p>
              </div>
              
              <ul class="space-y-4 mb-8 flex-grow">
                <li class="flex items-start p-2 hover:bg-gray-800 rounded-lg transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Все необходимое для старта бизнеса</span>
                </li>
                <li class="flex items-start p-2 hover:bg-gray-800 rounded-lg transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>CRM-система и обучение</span>
                </li>
                <li class="flex items-start p-2 hover:bg-gray-800 rounded-lg transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Базовый маркетинговый пакет</span>
                </li>
                <li class="flex items-start p-2 hover:bg-gray-800 rounded-lg transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span>Техническая поддержка</span>
                </li>
              </ul>
              
              <Button 
                label="ХОЧУ УЗНАТЬ ПОДРОБНЕЕ" 
                icon="pi pi-arrow-right"
                iconPos="right"
                class="w-full font-bold bg-gradient-red hover:bg-red-700 text-white border-none py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                @click="scrollToForm"
              />
            </div>
          </div>
          
          <!-- Премиум -->
          <div class="animate-block glassmorphism-dark rounded-lg border border-red-600 relative overflow-hidden transform hover:scale-105 transition-all hover:glow-effect h-full">
            <div class="absolute top-0 right-0 w-[200px] h-[200px] bg-red-600 rounded-full opacity-10 blur-[50px]"></div>
            
            <!-- Плашка ХИТ ПРОДАЖ -->
            <div class="absolute -right-8 top-6 bg-gradient-red text-white px-12 py-1 transform rotate-45 text-sm font-bold z-10">
              ХИТ ПРОДАЖ
            </div>
            
            <div class="p-8 flex flex-col h-full">
              <div class="mb-8">
                <h3 class="text-3xl font-bold mb-2">ПРЕМИУМ</h3>
                <div class="h-1 w-16 bg-gradient-red"></div>
                <div class="text-5xl font-bold my-6 flex items-end">
                  от 900 000 <span class="text-3xl ml-1">₽</span>
                  <span class="text-gray-400 text-lg ml-3 font-normal">/ разовый платеж</span>
                </div>
                <p class="text-gray-400 flex items-center">
                  <i class="pi pi-clock text-red-600 mr-2"></i>
                  Окупаемость: 3-4 месяца
                </p>
              </div>
              
              <ul class="space-y-4 mb-8 flex-grow">
                <li class="flex items-start p-2 hover:bg-gray-800 rounded-lg transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span><b>ВСЁ</b> из пакета СТАНДАРТ</span>
                </li>
                <li class="flex items-start p-2 hover:bg-gray-800 rounded-lg transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span><b>Эксклюзив на город</b> — вы единственный партнер</span>
                </li>
                <li class="flex items-start p-2 hover:bg-gray-800 rounded-lg transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span><b>Расширенный</b> маркетинговый бюджет</span>
                </li>
                <li class="flex items-start p-2 hover:bg-gray-800 rounded-lg transition-all">
                  <div class="w-6 h-6 rounded-full bg-gradient-red flex-shrink-0 flex items-center justify-center text-white mr-3 mt-0.5">
                    <i class="pi pi-check text-xs"></i>
                  </div>
                  <span><b>Персональный</b> куратор от управляющей компании</span>
                </li>
              </ul>
              
              <Button 
                label="ХОЧУ ПРЕМИУМ ПАКЕТ" 
                icon="pi pi-arrow-right"
                iconPos="right"
                class="w-full font-bold bg-gradient-red hover:bg-red-700 text-white border-none py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 glow-effect pulse-animation"
                @click="scrollToForm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Модернизированная схема запуска бизнеса -->
    <section class="py-20 bg-black text-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('/abstract-circuit.svg')] opacity-5 parallax-bg"></div>
      <div class="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-red-600 rounded-full opacity-10 blur-[150px]"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-16">КАК МЫ <span class="text-red-600">ЗАПУСКАЕМ ВАШ БИЗНЕС</span></h2>
        
        <div class="max-w-5xl mx-auto">
          <Timeline :value="timelineEvents" align="alternate">
            <template #content="slotProps">
              <div class="glassmorphism-dark p-6 rounded-lg transform hover:scale-105 transition-all hover:glow-effect">
                <h3 class="text-2xl font-bold mb-3 gradient-text">{{ slotProps.item.title }}</h3>
                <p class="text-gray-400">{{ slotProps.item.description }}</p>
                <p class="mt-4 font-bold flex items-center text-red-600" v-if="slotProps.item.duration">
                  <i class="pi pi-calendar mr-2"></i>
                  Срок: {{ slotProps.item.duration }}
                </p>
                <div v-if="slotProps.item.result" class="mt-4 p-4 bg-gradient-to-r from-black to-gray-900 rounded-lg">
                  <p class="font-bold flex items-center text-xl">
                    <i class="pi pi-chart-line text-red-600 mr-2"></i>
                    {{ slotProps.item.result }}
                  </p>
                </div>
              </div>
            </template>
            
            <template #marker="slotProps">
              <div class="w-12 h-12 rounded-full bg-gradient-red flex items-center justify-center text-white font-bold text-xl shadow-lg glow-effect z-10">
                {{ slotProps.item.step }}
              </div>
            </template>
          </Timeline>
          
          <div class="text-center mt-16">
            <Button 
              label="НАЧАТЬ СЕЙЧАС" 
              icon="pi pi-arrow-right"
              iconPos="right"
              class="font-bold bg-gradient-red hover:bg-red-700 text-white border-none px-12 py-4 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 glow-effect"
              @click="scrollToForm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Ответы на возражения -->
    <section class="py-20 bg-gradient-dark text-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('/abstract-dots.svg')] opacity-5 parallax-bg"></div>
      <div class="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#D50404] rounded-full opacity-10 blur-[150px]"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-16">РЕШЕНИЕ <span class="text-[#D50404] text-glow gradient-text">ВАШИХ СОМНЕНИЙ</span></h2>
        
        <div class="max-w-5xl mx-auto">
          <Accordion :multiple="true" class="faq-accordion">
            <AccordionTab v-for="(item, index) in faqItems" :key="index">
              <template #header>
                <div class="flex items-center">
                  <i class="pi pi-question-circle text-[#D50404] mr-3"></i>
                  <span class="text-2xl font-bold">{{ item.question }}</span>
                </div>
              </template>
              
              <div class="py-4">
                <p class="text-lg mb-4">{{ item.answer }}</p>
                
                <!-- Дополнительный контент в зависимости от типа -->
                <div v-if="item.testimonial" class="bg-black/30 p-4 rounded-lg mt-4">
                  <p class="italic text-gray-300">{{ item.testimonial.text }}</p>
                  <p class="text-sm text-gray-400 mt-2">{{ item.testimonial.author }}</p>
                </div>
                
                <div v-if="item.stats" class="grid grid-cols-3 gap-4 mt-6 bg-black/30 p-4 rounded-lg">
                  <div v-for="(stat, statIndex) in item.stats" :key="statIndex" 
                       class="flex flex-col items-center text-center">
                    <div class="text-4xl font-bold text-[#D50404] mb-2">{{ stat.value }}</div>
                    <span class="text-sm">{{ stat.text }}</span>
                  </div>
                </div>
                
                <div v-if="item.comparison" class="grid grid-cols-3 gap-4 mt-4">
                  <Card v-for="(col, colIndex) in item.comparison" :key="colIndex"
                        class="bg-black/30">
                    <template #content>
                      <p class="text-[#D50404] font-bold mb-2">{{ col.title }}</p>
                      <div v-for="point in col.points" :key="point" 
                           class="text-gray-300 mb-2">{{ point }}</div>
                    </template>
                  </Card>
                </div>
              </div>
            </AccordionTab>
          </Accordion>
          
          <div class="text-center mt-12">
            <Button 
              label="ПОЛУЧИТЬ ПЕРСОНАЛЬНУЮ КОНСУЛЬТАЦИЮ" 
              icon="pi pi-comments"
              iconPos="left"
              severity="danger"
              outlined
              class="px-10 py-3 text-lg"
              @click="scrollToForm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Модернизированная форма контакта -->
    <section id="contact-form" class="py-20 bg-black text-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('/abstract-grid.svg')] opacity-5 parallax-bg"></div>
      <div class="absolute top-[30%] left-[5%] w-[400px] h-[400px] bg-red-600 rounded-full opacity-10 blur-[150px]"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-5xl font-bold text-center mb-4 gradient-text">НАЧНИТЕ ЗАРАБАТЫВАТЬ <span class="text-red-600 text-glow">ПРЯМО СЕЙЧАС</span></h2>
        <p class="text-xl text-center mb-16">Получите детальный финансовый расчет для вашего города за 15 минут</p>
        
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <!-- Форма заявки -->
          <div class="md:col-span-3 animate-block">
            <div class="glassmorphism-dark p-8 rounded-lg border border-red-600 card-3d"
                @mousemove="(e) => handleMouseMove(e, $event.currentTarget)" 
                @mouseleave="(e) => resetCardRotation($event.currentTarget)">
              <div class="card-3d-content">
                <h3 class="text-2xl font-bold mb-6 flex items-center">
                  <i class="pi pi-calculator text-red-600 mr-3"></i>
                  Рассчитайте доходность франшизы для вашего города
                </h3>
                
                <div class="mb-6">
                  <label class="block mb-2">Население города, в котором хотите открыть офис*</label>
                  <Slider v-model="formData.population" :min="50000" :max="1000000" :step="10000" class="mt-3 mb-1" />
                  <div class="flex justify-between text-sm">
                    <span>50 000</span>
                    <span>{{ formData.population.toLocaleString('ru-RU') }}</span>
                    <span>1 000 000+</span>
                  </div>
                </div>
                
                <div class="mb-6">
                  <label class="block mb-2">Ваш город*</label>
                  <InputText class="w-full rounded-lg" v-model="formData.city" placeholder="Например: Москва" />
                </div>
                
                <div class="mb-6">
                  <label class="block mb-2">Хотите открыть один или с партнёром?*</label>
                  <Select v-model="formData.partnersNum" :options="partnerOptions" optionLabel="name" optionValue="value" class="w-full" />
                </div>
                
                <div class="mb-6">
                  <label class="block mb-2">Ваше имя*</label>
                  <InputText class="w-full" v-model="formData.name" />
                </div>
                
                <div class="mb-6">
                  <label class="block mb-2">Телефон*</label>
                  <InputText class="w-full" v-model="formData.phone" />
                </div>
                
                <div class="mb-6">
                  <Checkbox v-model="consentChecked" :binary="true" id="consent" />
                  <label for="consent" class="ml-2 text-sm">Я согласен с политикой конфиденциальности и даю согласие на обработку персональных данных</label>
                </div>
                
                <Button 
                  label="ПОЛУЧИТЬ ФИНАНСОВУЮ МОДЕЛЬ" 
                  class="w-full font-bold bg-red-600 hover:bg-red-700 text-white border-none py-4 text-xl"
                />
                
                <p class="text-center mt-4 text-sm">
                  + Бонус: "Чек-лист ТОП-5 ошибок при открытии офиса"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Лаконичный футер -->
    <footer class="py-8 bg-[#252525] text-white border-t border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p class="text-xl font-bold mb-2">ПОВЕСТКЕ<span class="text-red-600">НЕТ</span></p>
            <p class="text-sm mb-4">ООО "УК ФЦБ"<br/>ИНН 3123474101<br/>ОГРН 1203100016580</p>
          </div>
          
          <div class="text-center md:text-right">
            <a href="#" class="inline-block text-sm text-gray-400 hover:text-white transition-colors">Политика обработки персональных данных</a>
            <p class="text-sm mt-2">© 2023-2025. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрируем GSAP плагины
gsap.registerPlugin(ScrollTrigger);

const consentChecked = ref(false);
const formData = ref({
  name: '',
  phone: '',
  city: '',
  population: 50000,
  partnersNum: null
});

// Опции для выпадающего списка
const partnerOptions = ref([
  { name: 'Один', value: 'alone' },
  { name: 'С партнёром', value: 'with_partner' }
]);

// Анимации при скролле
onMounted(() => {
  // Анимация статистики
  const statElements = document.querySelectorAll('.animate-stat');
  statElements.forEach(el => {
    gsap.from(el, {
      textContent: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
      onUpdate: function() {
        if (el.dataset.suffix) {
          el.textContent = Math.ceil(this.targets()[0].textContent) + el.dataset.suffix;
        } else {
          el.textContent = Math.ceil(this.targets()[0].textContent).toLocaleString('ru-RU');
        }
      }
    });
  });
  
  // Анимация появления блоков
  const animateBlocks = document.querySelectorAll('.animate-block');
  animateBlocks.forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      }
    });
  });
  
  // Анимация шагов
  const steps = document.querySelectorAll('.step-item');
  steps.forEach((step, index) => {
    gsap.from(step, {
      x: index % 2 === 0 ? -50 : 50,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: step,
        start: "top 80%",
      }
    });
  });

  // Параллакс эффект для фоновых элементов
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  parallaxElements.forEach(el => {
    gsap.to(el, {
      y: 100,
      scrollTrigger: {
        trigger: el.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
});

// Функция для скролла к форме
const scrollToForm = () => {
  document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
};

// Состояние для 3D-карточек
const cardRotation = reactive({
  x: 0,
  y: 0
});

// Управление эффектом 3D-карточки
const handleMouseMove = (e, cardElement) => {
  const card = cardElement;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = (y - centerY) / 15;
  const rotateY = (centerX - x) / 15;
  
  cardRotation.x = rotateX;
  cardRotation.y = rotateY;
  
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  card.style.transition = 'transform 0.1s ease';
};

const resetCardRotation = (cardElement) => {
  const card = cardElement;
  cardRotation.x = 0;
  cardRotation.y = 0;
  
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  card.style.transition = 'transform 0.5s ease';
};

const mainStats = ref([
  {
    icon: 'pi pi-chart-line',
    value: '2+ млрд ₽',
    text: 'общая выручка сети за 2023 год'
  },
  {
    icon: 'pi pi-money-bill',
    value: '107 000 ₽',
    text: 'средний чек'
  },
  {
    icon: 'pi pi-users',
    value: '90%',
    text: 'партнеров запустили бизнес за 30 дней'
  },
  {
    icon: 'pi pi-clock',
    value: '3-5 мес',
    text: 'средний срок окупаемости'
  }
]);

const timelineEvents = ref([
  {
    step: '1',
    title: 'Консультация и подписание договора',
    description: 'После заполнения формы, наш менеджер связывается с вами в течение 15 минут. Мы изучаем особенности вашего города, подбираем оптимальный пакет франшизы и заключаем договор.',
    duration: '1-3 дня'
  },
  {
    step: '2',
    title: 'Обучение и подготовка',
    description: 'Вы проходите трехдневное интенсивное обучение всем аспектам бизнеса. Параллельно мы помогаем с подбором помещения, найму персонала и закупке необходимого оборудования.',
    duration: '7-14 дней'
  },
  {
    step: '3',
    title: 'Настройка рекламы и старт продаж',
    description: 'Запускаем рекламные кампании, настраиваем CRM-систему, проводим тренинги для персонала. Офис начинает работу и прием первых клиентов.',
    duration: '10-14 дней'
  },
  {
    step: '4',
    title: 'Сопровождение и масштабирование',
    description: 'Поддерживаем вас на каждом этапе, проводим еженедельные созвоны, анализируем показатели, корректируем стратегию для достижения максимальной прибыли.',
    result: 'Результат: стабильный доход от 500 000₽ в месяц'
  }
]);

// Данные для FAQ
const faqItems = [
  {
    question: '"У меня нет опыта в юриспруденции"',
    answer: '85% наших партнеров не имеют юридического образования и опыта. Вам не нужно разбираться в юридических тонкостях — этим занимается управляющая компания. Ваша задача — организовать бизнес-процессы по нашим инструкциям.',
    testimonial: {
      text: 'Я работал в торговле 6 лет до открытия франшизы. Ничего не знал о юриспруденции, но при поддержке головного офиса запустил бизнес за 25 дней. Сейчас мой ежемесячный доход — 560 000 рублей.',
      author: '— Антон, партнер из Нижнего Новгорода'
    }
  },
  {
    question: '"В моем городе это не будет работать"',
    answer: 'Успешные офисы работают даже в городах с населением менее 100 000 человек, с ежемесячной выручкой от 1 млн рублей. Наша бизнес-модель адаптирована под разные регионы и размеры населенных пунктов.',
    stats: [
      { value: '90%', text: 'партнеров запустили прибыльный бизнес за 30 дней' },
      { value: '20+', text: 'городов с населением менее 300 000 человек с прибыльными офисами' },
      { value: '100%', text: 'партнеров получают поддержку с настройкой под локальный рынок' }
    ]
  },
  {
    question: '"Могу открыться сам, зачем мне франшиза?"',
    answer: 'Самостоятельное открытие потребует от вас вложения не только денег, но и огромного количества времени на создание бизнес-модели, тестирование, ошибки и их исправление. Мы уже прошли этот путь и оптимизировали все процессы.',
    comparison: [
      {
        title: 'С ФРАНШИЗОЙ',
        points: ['Старт за 30 дней', 'Готовая бизнес-модель', 'Поддержка 24/7']
      },
      {
        title: '70% ПАРТНЕРОВ',
        points: ['получают прибыль с первого месяца работы']
      },
      {
        title: 'БЕЗ ФРАНШИЗЫ',
        points: ['Старт от 6 месяцев', 'Необходимо создавать с нуля', 'Только на себя']
      }
    ]
  },
  {
    question: '"Какой реальный доход я буду получать?"',
    answer: 'Средняя чистая прибыль одного офиса составляет 618 368 рублей в месяц. 80% партнеров получают от 500 000 рублей ежемесячной чистой прибыли уже после завершения периода становления бизнеса.',
    stats: [
      { value: '107 000₽', text: 'средний чек с одного клиента' },
      { value: '25+', text: 'средний показатель клиентов в месяц' },
      { value: '3-5 мес', text: 'средний срок окупаемости стартовых инвестиций' }
    ]
  }
];
</script>

<style>
/* Минималистичные стили */
.p-button {
  border-radius: 0 !important;
}

.p-inputtext {
  background-color: #333 !important;
  border-color: #444 !important;
  color: white !important;
  border-radius: 0 !important;
}

.p-checkbox .p-checkbox-box {
  background-color: #333 !important;
  border-color: #444 !important;
  border-radius: 0 !important;
}

.p-checkbox .p-checkbox-box.p-highlight {
  background-color: #dc2626 !important;
  border-color: #dc2626 !important;
}

/* Добавляем новые стильные эффекты */
.bg-gradient-dark {
  background: linear-gradient(135deg, #252525 0%, #1a1a1a 100%);
}

.bg-gradient-red {
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glassmorphism-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.text-glow {
  text-shadow: 0 0 10px rgba(220, 38, 38, 0.8);
}

.glow-effect {
  box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
}

.card-3d {
  transition: transform 0.1s ease;
  transform-style: preserve-3d;
}

.card-3d-content {
  transform: translateZ(20px);
}

.noise-bg {
  position: relative;
}

.noise-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=');
  pointer-events: none;
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.animated-border {
  position: relative;
  z-index: 0;
}

.animated-border::before {
  content: '';
  position: absolute;
  z-index: -1;
  inset: -2px;
  background: linear-gradient(90deg, #dc2626, #991b1b, #dc2626);
  background-size: 200% 200%;
  animation: border-animation 3s linear infinite;
}

@keyframes border-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}



.pulse-animation {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Скрывающиеся скроллбары */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #dc2626;
}


.card-3d {
  perspective: 1000px;
  transform-style: preserve-3d;
}


/* Эффект свечения для кнопок */
.glow-button {
  position: relative;
  overflow: hidden;
}

.glow-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glow-button:hover::after {
  opacity: 1;
}

/* Улучшенные стили для карточек */
.transform-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.transform-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.scale-hover {
  transition: transform 0.3s ease;
}

.scale-hover:hover {
  transform: scale(1.03);
}

/* Дополнительная анимация для элементов */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-out forwards;
}

/* Улучшенный шрифт для цен и важных чисел */
.price-text {
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.5px;
}


</style>


