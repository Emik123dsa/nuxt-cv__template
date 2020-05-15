<template>
    <div class="ui placeholder" :class="{inverted: activeTheme ? true : false}">
      <div class="image header">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="paragraph">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  },
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

<style lang="scss" scoped>
</style>