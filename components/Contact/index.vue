<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';
import emailSvg from '@assets/svg/email.svg';
import type { IEmailContent } from '@components/Contact/Interface/IEmailContent';
import { useUtils } from '~/utils/useUtils';
import Alert from '@components/globalComponents/Alert.vue';
import formspreeSendEmail from '~/plugins/FORMSPREESendEmail';

const { isValidEmail } = useUtils();
const isMessageSent = ref(false);
const isErrorValidForm = ref(false);
const is_error_request = ref(false);
const isLoading = ref(false);
const formData = ref<IEmailContent>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

async function sendEmail() {
  try {
    isLoading.value = true;
    const { name, email, subject, message } = formData.value;

    if (!name || !email || !subject || !message) return (isErrorValidForm.value = true);

    if (!isValidEmail(email)) return;

    const status = await formspreeSendEmail(formData.value);

    if (status) {
      showMessage();
    } else {
      isErrorValidForm.value = true;
      is_error_request.value = true;
    }
  } finally {
    isLoading.value = false;
  }
}

function closeAlert() {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
  isMessageSent.value = false;
}

function showMessage() {
  isMessageSent.value = true;
  setTimeout(() => {
    closeAlert();
  }, 5000);
}

function CloseDialog() {
  isErrorValidForm.value = false;
  is_error_request.value = false;
}

onMounted(() => {});
</script>

<template>
  <layout-base class="my-10">
    <component-title title="Contacto" />
    <h2 class="text-center text-xl mt-5">¿Tienes un proyecto en mente? Hablemos 😉</h2>
    <div class="flex flex-col md:flex-row items-center justify-between gap-10 mt-5">
      <div class="flex flex-col space-y-4">
        <div class="flex items-center flex-col md:flex-row md:gap-2">
          <img :src="emailSvg" alt="email" class="w-5 mb-2" />
          <p>alonsonaro75@gmail.com</p>
        </div>
        <div class="flex items-center flex-col md:flex-row md:gap-2">
          <img src="@assets/svg/location.svg" alt="location" class="w-5 mb-2" />
          <p>Iquitos-Loreto, Perú</p>
        </div>
        <div class="flex items-center flex-col md:flex-row md:gap-2">
          <img src="@assets/svg/phone.svg" alt="phone" class="w-5 mb-2" />
          <p>+51 995 069 323</p>
        </div>
      </div>
      <div class="w-full md:flex-1">
        <form class="space-y-4 mt-4" action="#">
          <div class="inputForm relative">
            <input type="text" required placeholder="Nombre" v-model="formData.name" class="input-form" />
            <input type="email" required placeholder="Email" v-model="formData.email" class="input-form" />
            <span
              class="absolute text-[10px] md:text-xs text-red-500 -bottom-3 left-2 md:left-auto md:bottom-auto md:right-48 md:-top-4"
            >
              {{ formData.email && !isValidEmail(formData.email) ? 'Email inválido' : '' }}
            </span>
          </div>
          <div class="inputForm">
            <input type="number" placeholder="N° celular" v-model="formData.phone" class="input-form" />
            <input type="text" required placeholder="Asunto" v-model="formData.subject" class="input-form" />
          </div>
          <textarea required placeholder="Mensaje" v-model="formData.message" class="input-form min-h-36" />
          <button
            :disabled="isLoading"
            type="button"
            class="button-default-border ns-button__content"
            @click="sendEmail"
          >
            <img :class="isLoading ? 'animate-bounce ' : ''" class="mr-2 w-5" :src="emailSvg" alt="email" />
            <span :hidden="isLoading">Enviar</span>
          </button>
        </form>
      </div>
    </div>
  </layout-base>
  <alert v-if="isMessageSent" title="Mensaje enviado correctamente" :name-resend="formData.name">
    Gracias por tu mensaje, me pondré en contacto contigo lo más pronto posible.
  </alert>

  <alert v-if="isErrorValidForm" title="Error" @close="CloseDialog">
    <!--    mensaje de que algo esta mal en el servidor y que si el error persiste que intente otro metodo de comunicacion por whasap -->
    <span v-if="is_error_request" class="text-red-500">
      Ocurrió un error al enviar el mensaje, por favor intenta nuevamente o contáctame por WhatsApp.
    </span>
    <p v-else>
      Por favor verifica que los campos obligatorios: <strong>nombre, email, asunto y mensaje</strong>, estén completos.
    </p>
  </alert>
</template>

<style scoped>
.inputForm {
  @apply flex flex-col md:flex-row gap-4 md:gap-8;
}
</style>
