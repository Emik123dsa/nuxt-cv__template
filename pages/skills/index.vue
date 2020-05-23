<template>
  <skill-component />
</template>

<script>
import SkillComponent from '@/components/SkillsComponent';

export default {
  components: {
    SkillComponent,
  },
  async fetch({ store, redirect }) {
    await store.dispatch('loadSkillCards');
  },
};
</script>

<style>
</style>