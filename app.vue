<template>
  <div class="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
    <!-- Главный экран -->
    <HeroSection @scroll-to-form="scrollToForm" />

    <!-- Почему сейчас самое время -->
    <WhyNowSection @scroll-to-form="scrollToForm" />

    <!-- Бизнес-модель -->
    <BusinessModelSection @scroll-to-form="scrollToForm" />

    <!-- Калькулятор прибыли -->
    <ProfitCalculator @scroll-to-form="scrollToForm" />

    <!-- Карта территорий -->
    <TerritoryMap @scroll-to-form="scrollToForm" />

    <!-- Гарантии -->
    <GuaranteesSection @scroll-to-form="scrollToForm" />

    <!-- История успеха -->
    <SuccessStory @scroll-to-form="scrollToForm" />

    <!-- Сравнение с конкурентами -->
    <CompetitorsComparison @scroll-to-form="scrollToForm" />

    <!-- Схема запуска -->
    <LaunchPlan @scroll-to-form="scrollToForm" />

    <!-- Пакеты франшизы -->
    <FranchisePackages @scroll-to-form="scrollToForm" />

    <!-- FAQ -->
    <FAQSection @scroll-to-form="scrollToForm" />

    <!-- Форма захвата -->
    <LeadForm ref="formRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '~/components/HeroSection.vue'
import WhyNowSection from '~/components/WhyNowSection.vue'
import BusinessModelSection from '~/components/BusinessModelSection.vue'
import ProfitCalculator from '~/components/ProfitCalculator.vue'
import TerritoryMap from '~/components/TerritoryMap.vue'
import GuaranteesSection from '~/components/GuaranteesSection.vue'
import SuccessStory from '~/components/SuccessStory.vue'
import CompetitorsComparison from '~/components/CompetitorsComparison.vue'
import LaunchPlan from '~/components/LaunchPlan.vue'
import FranchisePackages from '~/components/FranchisePackages.vue'
import FAQSection from '~/components/FAQSection.vue'
import LeadForm from '~/components/LeadForm.vue'

const formRef = ref(null)

const scrollToForm = () => {
  formRef.value.$el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
/* Глобальные стили */
body {
  @apply bg-black text-white;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(213, 4, 4, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(213, 4, 4, 0.1) 0%, transparent 20%);
}

/* Стили для форм */
.p-inputtext {
  @apply bg-black/30 border-gray-800 text-white backdrop-blur-sm;
  transition: all 0.3s ease;
}

.p-inputtext:focus {
  @apply border-[#D50404] ring-2 ring-[#D50404]/20;
  box-shadow: 0 0 20px rgba(213, 4, 4, 0.2);
}

/* Стили для кнопок */
.p-button {
  @apply transition-all duration-300;
  position: relative;
  overflow: hidden;
}

.p-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.p-button:hover::before {
  width: 300px;
  height: 300px;
}

.p-button-danger {
  @apply bg-[#D50404] border-[#D50404] hover:bg-[#B40404] hover:border-[#B40404];
  box-shadow: 0 4px 15px rgba(213, 4, 4, 0.3);
}

.p-button-danger:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(213, 4, 4, 0.4);
}

/* Анимации */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

.animate-scale {
  animation: scale 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Стили для карточек */
.glassmorphism-dark {
  background: rgba(36, 36, 36, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.glassmorphism-dark:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(213, 4, 4, 0.2);
}

/* Стили для заголовков */
h1, h2, h3, h4, h5, h6 {
  @apply font-bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Стили для прогресс-баров */
.p-progressbar {
  @apply bg-gray-800;
  height: 8px;
  border-radius: 4px;
}

.p-progressbar-value {
  @apply bg-[#D50404];
  transition: width 1s ease-in-out;
}

/* Стили для аккордеона */
.p-accordion-header-link {
  @apply bg-black/30 border-gray-800 text-white backdrop-blur-sm;
  transition: all 0.3s ease;
}

.p-accordion-header-link:hover {
  @apply bg-black/50;
}

.p-accordion-content {
  @apply bg-black/30 border-gray-800 backdrop-blur-sm;
}

/* Стили для слайдера */
.p-slider {
  @apply bg-gray-800;
}

.p-slider .p-slider-handle {
  @apply bg-[#D50404] border-[#D50404];
  transition: all 0.3s ease;
}

.p-slider .p-slider-handle:hover {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(213, 4, 4, 0.4);
}

.p-slider .p-slider-range {
  @apply bg-[#D50404];
}
</style>


