<template>
  <div class="ui segment placeholder" :class="{inverted: activeTheme ? true : false }">
    <sui-grid class="two column stackable center aligned">
      <sui-divider :class="{inverted: activeTheme ? true : false }" vertical>&</sui-divider>
      <sui-grid-row class="aligned middle">
        <sui-grid-column>
          <sui-header :class="{inverted: activeTheme ? true : false }" icon>
            <sui-icon name="pdf file" class="outline"></sui-icon>Web & Developer
          </sui-header>
          <div class="field">
            <div class="ui search">
              <div class="ui icon input">
             <sui-button
              :class="{inverted: activeTheme ? true : false }"
              @click.native="push('feedback')"
            >Hire me</sui-button>
              </div>
             
            </div>
          </div>
        </sui-grid-column>
        <sui-grid-column>
          <sui-header :class="{inverted: activeTheme ? true : false }" icon>
            <sui-icon name="freebsd"></sui-icon>
            {{ text }}
          </sui-header>
          <div class="field">
            <sui-button
              :class="{inverted: activeTheme ? true : false }"
              color="blue"
              @click.native="push('about')"
            >Let's get started</sui-button>
          </div>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Emil Shari',
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
  head() {
    return {
      title: 'CV | Home',
    };
  },
  methods: {
    push(item) {
      this.$router.push(item);
    },
  },
};
</script>

<style>
</style>