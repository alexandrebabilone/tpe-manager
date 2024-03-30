import { notifyError } from 'src/notify/notifyError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any) => {
  let msgError = null;

  if (error.code === 'ERR_NETWORK') {
    msgError = 'Não foi possível estabelecer uma conexão com a base da dados.';
  } else {
    msgError = error.response.data;
  }

  console.error('Ocorreu um erro: ', msgError);

  if (Array.isArray(msgError)) {
    msgError.forEach((errorMessage) => {
      notifyError(`${errorMessage.mensagem}`);
    });
  } else {
    notifyError(msgError);
  }
};
