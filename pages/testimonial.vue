<template>
  <testimonial-component />
</template>

<script>
import TestimonialComponent from '@/components/TestimonialComponent';

export default {
  components: {
    TestimonialComponent,
  },
  async asyncData({ route, store, query, params }) {
    await store.dispatch('loadMenuDefault', route.name);
  },
};
</script>

<style>
</style>