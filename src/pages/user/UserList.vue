<template>
  <div class="q-pa-md">
    <q-table title="Treats" :rows="usuarios" :columns="columns" row-key="id">
      <template v-slot:top>
        <h5 class="q-ma-none text-primary text-bold">Usuários</h5>
        <q-space />
        <q-btn
          outline
          icon="add_circle"
          label="Novo Usuário"
          color="primary"
          :to="{ name: 'user' }"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import userService from 'src/services/users';

const columns = [
  {
    name: 'id',
    required: true,
    label: 'Id',
    align: 'left',
    field: (row) => row.id,
    sortable: true,
  },
  {
    name: 'name',
    align: 'left',
    label: 'Nome',
    field: 'name',
    sortable: true,
  },
];

export default {
  setup() {
    const usuarios = ref([]);
    const { list } = userService();

    onMounted(() => {
      getUsuarios();
    });

    const getUsuarios = async () => {
      usuarios.value = await list();
      console.log(usuarios.value);
    };

    return {
      usuarios,
      columns,
    };
  },
};
</script>
