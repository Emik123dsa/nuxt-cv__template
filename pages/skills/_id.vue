<template>
  <skill-precisely></skill-precisely>
</template>

<script>
import SkillPrecisely from '~/components/SkillPreciselyComponent';

export default {
  validate({ store, params }) {
    return store.getters.skills.some(item => item.name === params.id);
  },
  components: {
    SkillPrecisely,
  },
  async fetch({ store, redirect }) {
    await store.dispatch('loadSkills');
  }
};
</script>

<style>
</style>