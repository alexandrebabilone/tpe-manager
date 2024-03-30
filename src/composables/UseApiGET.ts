import { api } from 'boot/axios';
import { handleError } from 'src/handle/handleError';

export default function useApiGET(url: string) {
  const list = async () => {
    try {
      const { data } = await api.get(url);
      return data;
    } catch (error: unknown) {
      handleError(error as Error);
    }
  };

  return {
    list,
  };
}
