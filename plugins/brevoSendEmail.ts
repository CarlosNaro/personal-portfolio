import type { IEmailContent } from '@components/Contact/Interface/IEmailContent';

const brevoSendEmail = async (payload: IEmailContent) => {
  if (!payload.email) return;

  const apiKeyBrevo = import.meta.env.VITE_BREVO_API_KEY;
  const urlBrevo = import.meta.env.VITE_BREVO_URL;

  const sendSmtpEmail = {
    sender: {
      name: 'Iquitos Technology',
      email: 'alonsonaro75@gmail.com',
    },
    to: [
      {
        name: 'Alonso Naro',
        email: 'alonsonaro75@gmail.com',
      },
    ],
    subject: payload.subject,
    htmlContent: `<html><head></head><body>
  <p>Esta persona está interesada en conocerte </p>
  <hr />
  <span><b>Datos del contacto:</b></span>
  <hr />
  <span><b>Nombre:</b> ${payload.name}</span>
  <hr />
  <span><b>Telefono:</b> ${payload.phone}</span>
  <hr />
  <span><b>Email:</b> ${payload.email}</span>
  <hr />
  <span><b>Asunto:</b> ${payload.subject}</span>
  <hr />
  <span><b>Mensaje:</b> ${payload.message}</span>
</body></html>`,
  };

  const sendEmail = await fetch(`${urlBrevo}/smtp/email`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': apiKeyBrevo,
      'content-type': 'application/json',
    },
    body: JSON.stringify(sendSmtpEmail),
  });

  console.log('sendEmail', sendEmail);

  return sendEmail.ok;
};

export default brevoSendEmail;
