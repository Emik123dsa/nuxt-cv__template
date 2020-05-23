<template>
  <about-component />
</template>

<script>
import AboutComponent from '@/components/AboutComponent';

export default {
  components: {
    AboutComponent,
  },
  async fetch({ route, store, redirect }) {
    await store.dispatch('loadAbout');
  },
};
</script>
<style lang="scss" scoped>
</style>