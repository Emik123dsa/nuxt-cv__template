<template>
  <sui-segment attached="bottom" :class="{inverted: activeTheme ? true : false}">
    <footer class="footer__pusher">Footer</footer>
  </sui-segment>
</template>

<script>
export default {
  computed: {
    activeAlert() {
      return this.$store?.getters?.alert; 
    },
    activeTheme() {
      return this.$store?.getters?.theme;
    }
  },
};
</script>

<style>
</style>