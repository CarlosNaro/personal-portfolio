// USAREMOS formspree PARA EL ENVIO DE CORREOS

import type { IEmailContent } from '@components/Contact/Interface/IEmailContent';

const formspreeSendEmail = async (data: IEmailContent) => {
  const url = import.meta.env.VITE_FORMSPREE_URL;
  if (!data.email) return;
  try {
    const response = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('response', response);

    return response.ok;
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default formspreeSendEmail;
