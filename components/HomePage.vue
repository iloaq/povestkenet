<template>
  <div>
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

// Для прокрутки к форме
const formRef = ref(null)
const scrollToForm = () => {
  formRef.value.$el.scrollIntoView({ behavior: 'smooth' })
}
</script> 