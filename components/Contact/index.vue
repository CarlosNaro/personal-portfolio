<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';
import emailSvg from '@assets/svg/email.svg';
import type { IEmailContent } from '@components/Contact/Interface/IEmailContent';
import { useUtils } from '~/utils/useUtils';
import Alert from '@components/globalComponents/Alert.vue';
import { sendContactEmail } from '~/utils/sendContactEmail';

const SUCCESS_ALERT_DURATION_MS = 5000;

const { isValidEmail } = useUtils();
const isMessageSent = ref(false);
const isErrorValidForm = ref(false);
const isErrorRequest = ref(false);
const isErrorEmailFormat = ref(false);
const isLoading = ref(false);
const formData = ref<IEmailContent>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});
let successAlertTimer: ReturnType<typeof setTimeout> | undefined;

async function sendEmail() {
  closeDialog();
  const { name, email, subject, message } = formData.value;

  if (!name || !email || !subject || !message) {
    isErrorValidForm.value = true;
    return;
  }

  if (!isValidEmail(email)) {
    isErrorValidForm.value = true;
    isErrorEmailFormat.value = true;
    return;
  }

  isLoading.value = true;
  try {
    const isSent = await sendContactEmail(formData.value);

    if (isSent) {
      showMessage();
    } else {
      isErrorValidForm.value = true;
      isErrorRequest.value = true;
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
  clearTimeout(successAlertTimer);
  successAlertTimer = setTimeout(closeAlert, SUCCESS_ALERT_DURATION_MS);
}

function closeDialog() {
  isErrorValidForm.value = false;
  isErrorRequest.value = false;
  isErrorEmailFormat.value = false;
}

onBeforeUnmount(() => {
  clearTimeout(successAlertTimer);
});
</script>

<template>
  <LayoutBase class="my-10">
    <ComponentTitle title="Contacto" />
    <p class="text-center text-xl mt-5">¿Tienes un proyecto en mente? Hablemos 😉</p>
    <div class="flex flex-col md:flex-row items-center justify-between gap-10 mt-5">
      <div class="flex flex-col space-y-4">
        <div class="flex items-center flex-col md:flex-row md:gap-2">
          <img :src="emailSvg" alt="Correo electrónico" class="w-5 mb-2" />
          <p>alonsonaro75@gmail.com</p>
        </div>
        <div class="flex items-center flex-col md:flex-row md:gap-2">
          <img src="@assets/svg/location.svg" alt="Ubicación" class="w-5 mb-2" />
          <p>Iquitos-Loreto, Perú</p>
        </div>
        <div class="flex items-center flex-col md:flex-row md:gap-2">
          <img src="@assets/svg/phone.svg" alt="Teléfono" class="w-5 mb-2" />
          <p>+51 995 069 323</p>
        </div>
      </div>
      <div class="w-full md:flex-1">
        <form class="space-y-4 mt-4">
          <div class="inputForm relative">
            <label for="contact-name" class="sr-only">Nombre</label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Nombre"
              v-model="formData.name"
              class="input-form"
            />
            <label for="contact-email" class="sr-only">Email</label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="Email"
              v-model="formData.email"
              class="input-form"
            />
            <span
              class="absolute text-[10px] md:text-xs text-red-500 -bottom-3 left-2 md:left-auto md:bottom-auto md:right-48 md:-top-4"
            >
              {{ formData.email && !isValidEmail(formData.email) ? 'Email inválido' : '' }}
            </span>
          </div>
          <div class="inputForm">
            <label for="contact-phone" class="sr-only">Número de celular</label>
            <input
              id="contact-phone"
              type="number"
              placeholder="N° celular"
              v-model="formData.phone"
              class="input-form"
            />
            <label for="contact-subject" class="sr-only">Asunto</label>
            <input
              id="contact-subject"
              type="text"
              required
              placeholder="Asunto"
              v-model="formData.subject"
              class="input-form"
            />
          </div>
          <label for="contact-message" class="sr-only">Mensaje</label>
          <textarea
            id="contact-message"
            required
            placeholder="Mensaje"
            v-model="formData.message"
            class="input-form min-h-36"
          />
          <button
            :disabled="isLoading"
            type="button"
            class="button-default-transparent ns-button__content shadow shadow-gray-700"
            @click="sendEmail"
          >
            <img :class="isLoading ? 'animate-bounce ' : ''" class="mr-2 w-5" :src="emailSvg" alt="" />
            <span :hidden="isLoading">Enviar</span>
            <span v-if="isLoading" class="sr-only">Enviando mensaje</span>
          </button>
        </form>
      </div>
    </div>
  </LayoutBase>
  <Alert v-if="isMessageSent" title="Mensaje enviado correctamente" :name-resend="formData.name">
    Gracias por tu mensaje, me pondré en contacto contigo lo más pronto posible.
  </Alert>

  <Alert v-if="isErrorValidForm" title="Error" @close="closeDialog">
    <span v-if="isErrorRequest" class="text-red-500">
      Ocurrió un error al enviar el mensaje, por favor intenta nuevamente o contáctame por WhatsApp.
    </span>
    <p v-else-if="isErrorEmailFormat">
      Por favor verifica que el <strong>email</strong> tenga un formato válido, por ejemplo: nombre@dominio.com.
    </p>
    <p v-else>
      Por favor verifica que los campos obligatorios: <strong>nombre, email, asunto y mensaje</strong>, estén completos.
    </p>
  </Alert>
</template>

<style scoped>
.inputForm {
  @apply flex flex-col md:flex-row gap-4 md:gap-8;
}
</style>
