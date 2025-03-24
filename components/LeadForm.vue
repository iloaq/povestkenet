<template>
  <section id="contact-form" class="py-20 bg-black text-white relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-5xl font-bold text-center mb-4">
        НАЧНИТЕ ЗАРАБАТЫВАТЬ <span class="text-[#D50404]">ПРЯМО СЕЙЧАС</span>
      </h2>

      <div class="max-w-2xl mx-auto">
        <div class="glassmorphism-dark p-8 rounded-lg border-2 border-[#D50404]">
          <!-- Таймер акции -->
          <div class="bg-[#D50404]/10 p-4 rounded-lg mb-8">
            <p class="text-lg font-bold">До конца акции осталось:</p>
            <div class="text-3xl font-bold mt-2">23:45:60</div>
          </div>

          <!-- Форма -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium mb-2">Ваше имя</label>
              <InputText 
                v-model="formData.name"
                class="w-full p-inputtext-lg"
                placeholder="Введите ваше имя"
              />
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Ваш телефон</label>
              <InputText 
                v-model="formData.phone"
                class="w-full p-inputtext-lg"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div class="flex items-center gap-2">
              <Checkbox 
                v-model="consentChecked"
                :binary="true"
                class="p-checkbox-sm"
              />
              <label class="text-sm">
                Я согласен на обработку персональных данных
              </label>
            </div>

            <Button 
              type="submit"
              label="ПОЛУЧИТЬ РАСЧЕТ ПРИБЫЛИ + БОНУС" 
              class="w-full p-button-danger p-button-lg text-xl py-4 font-bold"
              :disabled="!consentChecked"
            />
          </form>

          <!-- Бонусы -->
          <div class="mt-8 pt-8 border-t border-gray-800">
            <h3 class="text-xl font-bold mb-4">Ваши бонусы:</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <i class="pi pi-check text-[#D50404]"></i>
                <span>Бизнес-план с расчетами</span>
              </li>
              <li class="flex items-center gap-3">
                <i class="pi pi-check text-[#D50404]"></i>
                <span>Скидка 500 000₸ на франшизу</span>
              </li>
              <li class="flex items-center gap-3">
                <i class="pi pi-check text-[#D50404]"></i>
                <span>Персональная консультация</span>
              </li>
            </ul>
          </div>

          <!-- Социальное доказательство -->
          <div class="mt-8 pt-8 border-t border-gray-800">
            <div class="flex items-center justify-center gap-4">
              <div class="flex -space-x-2">
                <div v-for="i in 3" :key="i" class="w-8 h-8 rounded-full bg-[#D50404] border-2 border-black"></div>
              </div>
              <div class="text-sm">
                <div class="font-bold">247 человек</div>
                <div class="text-gray-400">уже запросили расчет</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const consentChecked = ref(false)
const formData = reactive({
  name: '',
  phone: ''
})

const handleSubmit = () => {
  // Здесь будет логика отправки формы
  console.log('Form submitted:', formData)
}
</script>

<style scoped>
.glassmorphism-dark {
  background: rgba(36, 36, 36, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style> 