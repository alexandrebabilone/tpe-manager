<template>
  <q-item clickable tag="a" target="_blank" @click="handleClick">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      default: '',
    },

    routeName: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleClick() {
      this.$emit('route-click', this.routeName);
    },
  },
});
</script>
