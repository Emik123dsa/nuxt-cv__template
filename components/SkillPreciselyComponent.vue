<template>
  <div>
    <sui-item-group divided class="card-animation-wrapper" v-if="!loading">
      <sui-item>
        <h3 is="sui-header" :class="{inverted: activeTheme ? true : false}">
          <sui-icon :name="`${skills.name}`" :class="`${skills.color}`" size="big" />
          <sui-header-content :class="{inverted: activeTheme ? true : false}">
            {{skills.title}}
            <sui-header-subheader :class="{inverted: activeTheme ? true : false}">{{skills.desc}}</sui-header-subheader>
          </sui-header-content>
        </h3>
      </sui-item>
      <sui-item :style="{'border-top': activeTheme ? '1px solid rgba(34,36,38,1)' : '' }">
        <h3 is="sui-header" :class="{inverted: activeTheme ? true : false}">
          <sui-icon name="linux" />
          <sui-header-content>
            About skill:
            <sui-header-subheader>Let me explain and widen it properly:</sui-header-subheader>
          </sui-header-content>
        </h3>
      </sui-item>
      <sui-item :style="{'border-top': activeTheme ? '1px solid rgba(34,36,38,1)' : '' }">
        <sui-item-content>
          <sui-item-description :style="{color: activeTheme && '#fff'}">
            <p :style="{color: activeTheme ? true : false}" v-html="skills.about"></p>
          </sui-item-description>
        </sui-item-content>
      </sui-item>
    </sui-item-group>
    <lazy-loading v-bind:loading="loading" v-if="loading" />
  </div>
</template>
 
<script>
import LazyLoading from './LazyLoading.vue';
//import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    LazyLoading,
  },
  data() {
    return {
      skills: '',
      loading: true,
    };
  },
  created() {
    this.getSkills();
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
    getSkills() {
      this.loading = true;
      let skills = this.$store.getters.skills;

      Object.keys(skills).map(it => {
        if (skills[it].name === this.$route.params.id) {
          this.skills = skills[it];
        }
      });

      new Promise((res, rej) => {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
    },
  },
  head() {
    return {
      title: 'CV | ' + this.skills.title,
    };
  },
  mounted() {
    //console.log(this.$router.params);
  },
};
</script>

<style lang="scss" scoped>
.webpack {
  background: url('https://cdn.worldvectorlogo.com/logos/webpack.svg') no-repeat center center;
  background-size: contain;
}
</style>