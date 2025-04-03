<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';
import emailSvg from '@assets/svg/email.svg';
import brevoSendEmail from '../../plugins/brevoSendEmail';

const isEmailForm = ref(false);
const isWhatsappForm = ref(false);

const openEmailForm = (val: number) => {
  // 0 = email, 1 = whatsapp
  if (val === 0) {
    isEmailForm.value = !isEmailForm.value;
    isWhatsappForm.value = false;
    return;
  }
  isWhatsappForm.value = !isWhatsappForm.value;
  isEmailForm.value = false;
};

brevoSendEmail();
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
        <button type="submit" class="button-default-border ns-button__content" @click="openEmailForm(0)">
          <img class="mr-4 w-5" :src="emailSvg" alt="email" />
          Puedes contactarme por correo electrónico
        </button>
        <form v-if="isEmailForm" :class="isEmailForm ? 'block' : 'hidden'" class="space-y-4 mt-4">
          <div class="flex gap-8">
            <input type="text" required placeholder="Nombre" class="input-form" />
            <input type="email" required placeholder="Email" class="input-form" />
          </div>
          <div class="flex gap-8">
            <input type="number" placeholder="N° celular" class="input-form" />
            <input type="text" required placeholder="Asunto" class="input-form" />
          </div>
          <textarea required placeholder="Mensaje" class="input-form min-h-36" />
          <button type="submit" class="button-default ns-button__content">Enviar</button>
        </form>

        <hr class="custom-divider" />

        <button type="submit" class="button-default-border ns-button__content">
          <img class="mr-4 w-5" :src="emailSvg" alt="email" />
          Puedes contactarme a través de WhatsApp.
        </button>
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
