<template>
  <sui-message
    v-bind:style="{border: activeTheme ? '1px solid #555 !important' : false}"
    attached
    v-if="activeAlert && isActive"
    :class="{inverted: activeTheme}"
  >
    <sui-icon name="close" @click.prevent="removeAlert()"></sui-icon>
    <sui-message-header>Thank you so much for reaching me out</sui-message-header>
    <sui-message-list>
      <sui-message-item>You can just check out my site CV as much as you want</sui-message-item>
      <sui-message-item>I'm eager to fetch any feedback from you as soon as possible</sui-message-item>
    </sui-message-list>
  </sui-message>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
  computed: {
    activeAlert() {
      return this.$store?.getters?.alert;
    },
    activeTheme() {
      return this.$store?.getters?.theme;
    },
  },
  methods: {
    async removeAlert() {
      let __alert_remove = false;
      await this.$store.dispatch('removeAlertCookie');
      this.isActive = false;
    },
  },
};
</script>

<style>
</style>