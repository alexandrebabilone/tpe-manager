<template>
  <div class="q-pa-md">
    <q-form @submit="salvar" class="q-gutter-md">
      <q-input
        v-model="form.name"
        label="Nome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Digite o nome']"
      />

      <q-input v-model="form.phone" label="Telefone" mask="(27) #####-####" />

      <q-select
        emit-value
        map-options
        label="Congregação"
        :options="congregations"
        v-model="form.congregationId"
        :rules="[(val) => (val && val.length > 0) || 'Selecione a congregação']"
      />

      <div>
        <q-btn label="Salvar" type="submit" color="primary" />
        <q-btn
          label="Cancelar"
          color="primary"
          flat
          class="q-ml-sm"
          @click="cancelar"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import congregationService from 'src/services/congregation';
import userService from 'src/services/user';
import { useRouter, useRoute } from 'vue-router';
import { handleSuccess } from 'src/handle/handleSuccess';

export default {
  setup() {
    const { listCongregation } = congregationService();
    const { postUser, getUserById, updateUser } = userService();
    const router = useRouter();
    const route = useRoute();

    const congregations = ref([]);

    const form = ref({
      name: '',
      phone: '',
      congregationId: '',
    });

    onMounted(() => {
      if (route.params.id) {
        getUser(route.params.id);
      }

      getCongregations();
    });

    const getUser = async (id) => {
      form.value = await getUserById(id);
    };

    const getCongregations = async () => {
      congregations.value = await listCongregation();
      console.log(congregations.value);

      congregations.value = congregations.value.map((item) => ({
        label: item.name,
        value: item.id,
      }));
    };

    const salvar = async () => {
      if (route.params.id) {
        await updateUser(route.params.id, form.value);
        handleSuccess('Usuário alterado com sucesso!');
      } else {
        await postUser(form.value);
        handleSuccess('Usuário criado com sucesso!');
      }

      router.push({ name: 'user-list' });
    };

    const cancelar = () => {
      router.push({ name: 'user-list' });
    };

    return {
      form,
      congregations,
      salvar,
      cancelar,
    };
  },
};
</script>
src/services/user
