<template>
  <div class="q-pa-md">
    <q-table
      ref="userTable"
      title="Usuários"
      :rows="usuarios"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:top>
        <h5 class="q-ma-none text-primary text-bold">Usuários</h5>
        <q-space />
        <q-btn
          outline
          icon="add_circle"
          label="Novo Usuário"
          color="primary"
          :to="{ name: 'user-post' }"
        />
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="q-gutter-sm">
          <div class="row" style="max-width: 60px">
            <div class="col">
              <q-btn
                icon="visibility"
                color="primary"
                dense
                size="sm"
                @click="visualizar(props.row.id)"
              />
              <q-tooltip class="bg-grey-9" anchor="top left" self="bottom left"
                >Visualizar</q-tooltip
              >
            </div>
            <div class="col">
              <q-btn
                icon="delete"
                color="primary"
                dense
                size="sm"
                @click="excluir(props.row.id)"
              />
              <q-tooltip class="bg-grey-9" anchor="top left" self="bottom left"
                >Excluir</q-tooltip
              >
            </div>
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { onMounted, ref } from 'vue';
import cityService from 'src/services/city';
import { useRouter } from 'vue-router';

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
  { name: 'actions', field: 'actions', label: 'Ações', align: 'right' },
];

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const cities = ref([]);
    const { listCity } = cityService();

    onMounted(() => {
      getCities();
    });

    const getCities = async () => {
      cities.value = await listCity();
      console.log(cities.value);
    };

    const visualizar = (id) => {
      router.push({ name: 'user-get', params: { id } });
    };

    const excluir = (id) => {
      $q.dialog({
        title: 'Confirm',
        message: 'Deseja realmente excluir o Usuário?',
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          console.log('OK');
          remove(id);
        })
        .onCancel(() => {
          console.log('Cancel');
        });
    };

    return {
      usuarios: cities,
      columns,
      visualizar,
      excluir,
    };
  },
};
</script>
src/services/city
