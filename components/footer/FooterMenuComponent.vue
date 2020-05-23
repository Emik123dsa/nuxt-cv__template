<template>
  <div
    :class="{inverted:  activeTheme ? true : false}"
    class="ui stackable divided equal height stackable grid"
  >
    <div
      :class="{inverted:  activeTheme ? true : false}"
      class="ui stackable divided equal height stackable grid"
    >
      <div class="eight wide column">
        <h4 class="ui header" :class="{inverted: activeTheme ? true : false }">Features</h4>
        <div class="ui link list" :class="{inverted: activeTheme ? true : false }">
          <nuxt-link
            class="item"
            v-for="(feature, i) in menuFeatures"
            :key="i"
            :to="feature.path"
          >{{feature.name}}</nuxt-link>
        </div>
      </div>
      <div class="eight wide column">
        <h4 class="ui header" :class="{inverted: activeTheme ? true : false }">Socials</h4>
        <div class="ui link list" :class="{inverted: activeTheme ? true : false }">
          <a
            v-for="(social,i)  in menuSocials"
            :key="i"
            class="item"
            target="_blank"
            :href="`https://${social.path}`"
            rel="noopener noreferrer"
          >
            <sui-icon :name="`${social.img}`" link />
            {{social.name}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
  },
  computed: {
    activeTheme() {
      return this.$store?.getters?.theme;
    },
    menus() {
      return this.$store?.getters?.menus;
    },
    menuItems() {
      return this.menus.filter(i => {
        return i.parent === 'items';
      });
    },
    menuFeatures() {
      return this.menus.filter(i => {
        return i.parent === 'features';
      });
    },
    menuSocials() {
      return this.menus.filter(i => {
        return i.parent === 'socials';
      });
    },
  },
};
</script>

<style>
</style>