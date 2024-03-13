<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Gerenciador do TPE</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item clickable exact v-ripple>
          <q-item-section avatar>
            <q-icon name="fa-regular fa-building" />
          </q-item-section>
          <q-item-section>Cidades</q-item-section>
        </q-item>

        <q-item clickable exact v-ripple>
          <q-item-section avatar>
            <q-icon name="fa-regular fa-map" />
          </q-item-section>
          <q-item-section>Pontos de Trabalho</q-item-section>
        </q-item>

        <q-item clickable exact v-ripple>
          <q-item-section avatar>
            <q-icon name="fa-solid fa-hand-holding-hand" />
          </q-item-section>
          <q-item-section>Pontos de Apoio</q-item-section>
        </q-item>

        <q-item clickable exact v-ripple>
          <q-item-section avatar>
            <q-icon name="fa-solid fa-person-walking-luggage" />
          </q-item-section>
          <q-item-section>Publicadores</q-item-section>
        </q-item>

        <q-item clickable exact v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-calendar-days" />
          </q-item-section>
          <q-item-section>Escalas</q-item-section>
        </q-item>

        <q-item clickable exact v-ripple :to="{ name: 'user-list' }">
          <q-item-section avatar>
            <q-icon name="fa-regular fa-user" />
          </q-item-section>
          <q-item-section>Usuários</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
