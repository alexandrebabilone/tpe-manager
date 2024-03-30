import useApiCRUD from 'src/composables/UseApiCRUD';

export default function congregationService() {
  const {
    list: listCongregation,
    post: postCongregation,
    update: updateCongregation,
    remove: removeCongregation,
    getById: getCongregationById,
  } = useApiCRUD('congregation');

  return {
    listCongregation,
    postCongregation,
    updateCongregation,
    removeCongregation,
    getCongregationById,
  };
}
