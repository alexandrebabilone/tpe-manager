import { api } from 'boot/axios';
import { ApiResponse } from 'src/components/models';
import { Notify } from 'quasar';

function handleError(error: Error) {
  Notify.create('Ocorreu um erro: ' + error.message);
  console.error('Ocorreu um erro:', error.message);
  throw new Error();
}

export default function useApi(url: string) {
  const list = async () => {
    try {
      const { data }: ApiResponse = await api.get(url);
      return data;
    } catch (error: any) {
      handleError(error);
    }
  };

  const getById = async (id: string | number) => {
    try {
      const { data }: ApiResponse = await api.get(`${url}/${id}`);
      return data;
    } catch (error: any) {
      handleError(error);
    }
  };

  const post = async (form: any) => {
    try {
      const { data }: ApiResponse = await api.post(url, form);
      return data;
    } catch (error: any) {
      handleError(error);
    }
  };

  const update = async (form: any) => {
    try {
      const { data }: ApiResponse = await api.put(`${url}/${form.id}`, form);
      return data;
    } catch (error: any) {
      handleError(error);
    }
  };

  const remove = async (id: string | number) => {
    try {
      const { data }: ApiResponse = await api.delete(`${url}/${id}`);
      return data;
    } catch (error: any) {
      handleError(error);
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
