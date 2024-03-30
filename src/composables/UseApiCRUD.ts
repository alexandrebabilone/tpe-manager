import { api } from 'boot/axios';
import { handleError } from 'src/handle/handleError';

export default function useApiCRUD<T>(url: string) {
  const list = async () => {
    try {
      const { data } = await api.get(url);
      return data;
    } catch (error: unknown) {
      handleError(error as Error);
    }
  };

  const getById = async (id: string) => {
    try {
      const { data } = await api.get(`${url}/${id}`);
      return data;
    } catch (error: unknown) {
      handleError(error as Error);
    }
  };

  const post = async (form: T) => {
    try {
      const { data } = await api.post(url, form);
      return data;
    } catch (error: unknown) {
      handleError(error as Error);
    }
  };

  const update = async (id: string, form: T) => {
    try {
      // const { data } = await api.put(url, form);
      const { data } = await api.put(`${url}/${id}`, form);
      return data;
    } catch (error: unknown) {
      handleError(error as Error);
    }
  };

  const remove = async (id: string) => {
    try {
      const { data } = await api.delete(`${url}/${id}`);
      return data;
    } catch (error: unknown) {
      handleError(error as Error);
    }
  };

  return {
    list,
    post,
    update,
    remove,
    getById,
  };
}
