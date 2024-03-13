import useApi from 'src/composables/UseApi';

export default function congregationService() {
  const { list, post, update, remove, getById } = useApi('congregation');

  return {
    list,
    post,
    update,
    remove,
    getById,
  };
}
