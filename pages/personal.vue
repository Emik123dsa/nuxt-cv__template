<template>
  <personal-component></personal-component>
</template>

<script>
import PersonalComponent from '@/components/PersonalComponent';

export default {
  components: {
    PersonalComponent,
  },
  async asyncData({ route, store, query, params }) {
    await store.dispatch('loadMenuDefault', route.name);
  },
};
</script>

<style>
</style>