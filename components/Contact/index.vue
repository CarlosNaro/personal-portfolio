<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';
import ContactInfo from '@components/Contact/components/ContactInfo.vue';
import ContactField from '@components/Contact/components/ContactField.vue';
import Alert from '@components/globalComponents/Alert.vue';
import type { IEmailContent } from '@components/Contact/Interface/IEmailContent';
import { useUtils } from '~/utils/useUtils';
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

const emailError = computed(() =>
  formData.value.email && !isValidEmail(formData.value.email) ? 'Email inválido' : '',
);

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
  <LayoutBase>
    <ComponentTitle title="Contacto" />
    <div class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
      <div class="md:col-span-4" data-reveal>
        <p class="text-lg text-muted">¿Tienes un proyecto en mente? Hablemos.</p>
        <ContactInfo />
      </div>
      <div class="md:col-span-8" data-reveal>
        <form class="grid grid-cols-1 gap-6 sm:grid-cols-2" novalidate @submit.prevent="sendEmail">
          <ContactField id="contact-name" v-model="formData.name" label="Nombre" type="text" :is-required="true" />
          <ContactField
            id="contact-email"
            v-model="formData.email"
            label="Email"
            type="email"
            :is-required="true"
            :error="emailError"
          />
          <ContactField id="contact-phone" v-model="formData.phone" label="Número de celular" type="tel" />
          <ContactField
            id="contact-subject"
            v-model="formData.subject"
            label="Asunto"
            type="text"
            :is-required="true"
          />
          <ContactField
            id="contact-message"
            v-model="formData.message"
            label="Mensaje"
            :is-required="true"
            :is-multiline="true"
            class="sm:col-span-2"
          />
          <button
            type="submit"
            class="button-default sm:col-span-2 sm:justify-self-start"
            :disabled="isLoading"
            :aria-busy="isLoading"
          >
            {{ isLoading ? 'Enviando…' : 'Enviar mensaje' }}
          </button>
        </form>
      </div>
    </div>
  </LayoutBase>

  <Alert v-if="isMessageSent" title="Mensaje enviado correctamente" :name-resend="formData.name">
    Gracias por tu mensaje, me pondré en contacto contigo lo más pronto posible.
  </Alert>

  <Alert v-if="isErrorValidForm" title="Error" @close="closeDialog">
    <span v-if="isErrorRequest" class="text-danger">
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
