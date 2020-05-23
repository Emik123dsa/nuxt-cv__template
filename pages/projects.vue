<template>
  <project-components />
</template>

<script>
import ProjectComponents from '@/components/ProjectsComponent';

export default {
  components: {
    ProjectComponents,
  },
  async asyncData({ route, store, query, params }) {
    await store.dispatch('loadMenuDefault', route.name);
  },
};
</script>

<style>
</style>