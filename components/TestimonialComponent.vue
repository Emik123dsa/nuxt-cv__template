<template>
  <div v-if="!loading" v-html="testimonial.content
   "></div>
  <lazy-loading v-else />
</template>

<script>
import LazyLoading from './LazyLoading';
export default {
  data() {
    return {
      loading: true,
    };
  },
  components: {
    LazyLoading,
  },
  mounted() {
    new Promise((res, rej) => {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  },
  head() {
    return {
      title: 'CV | Testimonial',
    };
  },
  computed: {
    testimonial() {
      return this.$store?.getters?.menu_default;
    },
  },
};
</script>

<style>
</style>