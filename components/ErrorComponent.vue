<template>
  <sui-segment class="placeholder" :class="{inverted: activeTheme ? true : false }">
    <sui-header class="icon">
      <sui-icon name="chrome"></sui-icon>O-oo-ops!
    </sui-header>
    <sui-button color="blue" @click.prevent="pushToBack()" >Return to the back page</sui-button>
  </sui-segment>
</template>

<script>
export default {
  head() {
    return {
    title: "Error"
    }
  },
  computed: {
    activeAlert() {
      return this.$store?.getters?.alert; 
    },
    activeTheme() {
      return this.$store?.getters?.theme;
    }
  },
  methods: {
    pushToBack() {
      this.$router.push("/")
    }
  }
};
</script>

<style>
</style>