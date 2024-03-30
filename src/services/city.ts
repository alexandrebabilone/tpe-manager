import useApiCRUD from 'src/composables/UseApiCRUD';

export default function cityService() {
  const {
    list: listCity,
    post: postCity,
    update: updateCity,
    getById: getCityById,
  } = useApiCRUD('user');

  return {
    listCity,
    postCity,
    updateCity,
    getCityById,
  };
}
