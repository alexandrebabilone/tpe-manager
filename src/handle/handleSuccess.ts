import { notifySuccess } from 'src/notify/notifySuccess';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleSuccess = (message: string) => {
  console.log(message);
  notifySuccess(message);
};
