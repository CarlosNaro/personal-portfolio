interface ISendEmail {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const brevoSendEmail = async (payload: ISendEmail) => {
  const apiKeyBrevo = import.meta.env.VITE_BREVO_API_KEY;
  const urlBrevo = import.meta.env.VITE_BREVO_URL;

  console.log('apiKeyBrevo', apiKeyBrevo);

  const sendSmtpEmail = {
    sender: {
      name: payload.name,
      email: payload.email,
    },
    to: [
      {
        name: 'Alonso Naro',
        email: 'alonsonaro75@gmail.com',
      },
    ],
    subject: payload.subject,
    textContent: payload.message,
  };

  // const sendEmail =

  return false;
};

export default brevoSendEmail;
