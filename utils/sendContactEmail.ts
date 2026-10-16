import type { IEmailContent } from '@components/Contact/Interface/IEmailContent';

// Envía el formulario de contacto a Formspree.
// Devuelve true solo si el servicio aceptó el mensaje.
export async function sendContactEmail(data: IEmailContent): Promise<boolean> {
  const endpoint: string | undefined = import.meta.env.VITE_FORMSPREE_URL;

  if (!endpoint) {
    console.error('Error sending email: VITE_FORMSPREE_URL is not defined');
    return false;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error('Error sending email:', response.status, response.statusText);
    }

    return response.ok;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
