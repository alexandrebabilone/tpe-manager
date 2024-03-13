<template>
  <div class="q-pa-md">
    <q-form @submit="salvar" class="q-gutter-md">
      <q-input
        v-model="newUser.name"
        label="Nome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Digite o nome']"
      />

      <q-input v-model="newUser.phone" label="Telefone" />

      <q-select
        emit-value
        map-options
        label="Congregação"
        :options="congregations"
        v-model="newUser.congregationId"
        :rules="[(val) => (val && val.length > 0) || 'Selecione a congregação']"
      />

      <div>
        <q-btn label="Salvar" type="submit" color="primary" />
        <q-btn label="Cancelar" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref, onMounted } from 'vue';
import congregationService from 'src/services/congregation';
import userService from 'src/services/users';

export default {
  setup() {
    const $q = useQuasar();
    const { list } = congregationService();
    const { post } = userService();

    const congregations = ref([]);
    const name = ref(null);
    const phone = ref(null);
    const age = ref(null);

    const newUser = ref({
      name: '',
      phone: '',
      congregationId: '',
    });

    onMounted(() => {
      getCongregations();
    });

    const getCongregations = async () => {
      congregations.value = await list();
      console.log(congregations.value);

      congregations.value = congregations.value.map((item) => ({
        label: item.name,
        value: item.id,
      }));
    };

    const salvar = async () => {
      try {
        console.log('-> ' + newUser.value.name);
        await post(newUser.value);
        console.error('Usuario salvo.');
      } catch (error) {
        console.error('Erro ao salvar usuário:', error.message);
      }
    };

    return {
      name,
      phone,
      newUser,
      age,
      congregations,
      salvar,
    };
  },
};
</script>
