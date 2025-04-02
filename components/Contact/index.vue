<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';
import emailSvg from '@assets/svg/email.svg';

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
</script>

<template>
  <layout-base>
    <component-title title="Contacto" />
    <h2 class="text-center text-xl mt-5">¿Tienes un proyecto en mente? Hablemos 😉</h2>
    <div class="flex items-center justify-between gap-10 mt-5">
      <div class="flex flex-col space-y-4">
        <div class="flex items-center gap-2">
          <p class="w-7 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="#1a5cff"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
          </p>
          <p>alonsonaro75@gmail.com</p>
        </div>
        <div class="flex items-center gap-2">
          <p class="w-7 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="#1a5cff"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
          </p>
          <p>Iquitos-Loreto, Perú</p>
        </div>
        <div class="flex items-center gap-2">
          <p class="w-7 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="#1a5cff"
                d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm80 432l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
              />
            </svg>
          </p>
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
