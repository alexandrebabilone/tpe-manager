import useApiCRUD from 'src/composables/UseApiCRUD';

export default function userService() {
  const {
    list: listUser,
    post: postUser,
    update: updateUser,
    remove: removeUser,
    getById: getUserById,
  } = useApiCRUD('user');

  return {
    listUser,
    postUser,
    updateUser,
    removeUser,
    getUserById,
  };
}
