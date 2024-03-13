import useApi from 'src/composables/UseApi';

export default function userService() {
  const { list, post, update, remove, getById } = useApi('user');

  return {
    list,
    post,
    update,
    remove,
    getById,
  };
}
