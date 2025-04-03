<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';
import emailSvg from '@assets/svg/email.svg';
import type { IEmailContent } from '@components/Contact/Interface/IEmailContent';
import formspreeSendEmail from '../../plugins/FORMSPREESendEmail';
import { useUtils } from '~/utils/useUtils';

const { isValidEmail } = useUtils();
const formData = ref<IEmailContent>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

async function sendEmail() {
  const { name, email, phone, subject, message } = formData.value;

  if (!name || !email || !subject || !message) return;

  if (!isValidEmail(email)) return;
  // const status = await formspreeSendEmail(formData.value);
  //
  // if (status) {
  //   formData.value = {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     subject: '',
  //     message: '',
  //   };
  // }
}

onMounted(() => {});
</script>

<template>
  <layout-base>
    <component-title title="Contacto" />
    <h2 class="text-center text-xl mt-5">¿Tienes un proyecto en mente? Hablemos 😉</h2>
    <div class="flex items-center justify-between gap-10 mt-5">
      <div class="flex flex-col space-y-4">
        <div class="flex items-center gap-2">
          <img :src="emailSvg" alt="email" class="w-7 mb-2" />
          <p>alonsonaro75@gmail.com</p>
        </div>
        <div class="flex items-center gap-2">
          <img src="@assets/svg/location.svg" alt="location" class="w-7 mb-2" />
          <p>Iquitos-Loreto, Perú</p>
        </div>
        <div class="flex items-center gap-2">
          <img src="@assets/svg/phone.svg" alt="phone" class="w-7 mb-2" />
          <p>+51 995 069 323</p>
        </div>
      </div>
      <div class="flex-1">
        <form class="space-y-4 mt-4" action="#">
          <div class="flex w-full gap-8 relative">
            <input type="text" required placeholder="Nombre" v-model="formData.name" class="input-form" />
            <input type="email" required placeholder="Email" v-model="formData.email" class="input-form" />
            <span class="absolute text-xs text-red-500 right-48 -top-5">
              {{ formData.email && !isValidEmail(formData.email) ? 'Email inválido' : '' }}
            </span>
          </div>
          <div class="flex gap-8">
            <input type="number" placeholder="N° celular" v-model="formData.phone" class="input-form" />
            <input type="text" required placeholder="Asunto" v-model="formData.subject" class="input-form" />
          </div>
          <textarea required placeholder="Mensaje" v-model="formData.message" class="input-form min-h-36" />
          <button type="submit" class="button-default-border ns-button__content" @click="sendEmail">
            <img class="mr-4 w-5" :src="emailSvg" alt="email" />
            Enviar
          </button>
        </form>
        <hr class="custom-divider" />
      </div>
    </div>
  </layout-base>
</template>

<style scoped>
.custom-divider {
  border: none;
  border-top: 2px dotted #1a5cff;
  margin: 20px 0;
}
</style>
