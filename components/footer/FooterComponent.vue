<template>
  <sui-segment attached="bottom" :class="{inverted: activeTheme ? true : false}">
    <footer class="footer__pusher">
      <footer-menu />
    </footer>
  </sui-segment>
</template>

<script>
import FooterMenu from './FooterMenuComponent';
export default {
  components: {
    FooterMenu,
  },
  computed: {
    activeAlert() {
      return this.$store?.getters?.alert;
    },
    activeTheme() {
      return this.$store?.getters?.theme;
    },
  },
};
</script>

<style>
</style>