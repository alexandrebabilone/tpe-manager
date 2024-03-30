import { Notify } from 'quasar';

export const notifyError = (mensagem: string) => {
  Notify.create({
    type: 'negative',
    message: mensagem,
    icon: 'report_problem',
  });
};
