<template>
  <socials-component />
</template>

<script>
import SocialsComponent from '@/components/SocialsComponent';

export default {
  components: {
    SocialsComponent,
  },
  async asyncData({ route, store, query, params }) {
    await store.dispatch('loadMenuDefault', route.name);
  },
};
</script>

<style>
</style>