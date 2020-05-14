<template>
  <div v-if="is404" class="error-page">404</div>
  <div v-else>
    <pre class="pre">{{error}}</pre>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "empty",
  computed: {
    is404() {
      return this.error.statusCode == 404;
    }
  }
};
</script>

<style>
</style>