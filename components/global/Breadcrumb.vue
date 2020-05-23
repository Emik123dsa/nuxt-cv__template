<template>
  <div>
    <sui-breadcrumb>
      <sui-breadcrumb-section>
        <nuxt-link
          :to="breadcrumbs.path.replace(`${!!breadcrumbs.params.id ? '/' + breadcrumbs.params.id : ''}`, '')"
        >{{lcfirst(breadcrumbs.name.replace('-id', ''))}}</nuxt-link>
      </sui-breadcrumb-section>
      <sui-breadcrumb-divider v-if="!!breadcrumbs.params.id"></sui-breadcrumb-divider>
      <sui-breadcrumb-section
        active
      >{{!!breadcrumbs.params.id ? lcfirst(breadcrumbs.params.id) : "" }}</sui-breadcrumb-section>
    </sui-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadEnd: '',
    };
  },
  computed: {
    breadcrumbs() {
      return this.$route;
    },
    breadcrumbFilter() {
      return this.$breadcrumbs;
    },
    breadcrumbBegin() {
      return this.$breadcrumbs.filter(i => {
        if (i.name == undefined) {
          return i.meta.breadcrumb;
        }
      });
    },
    breadcrumbEnd() {
      return this.$breadcrumbs.filter(i => {
        if (i.name != undefined) {
          return i.meta.breadcrumb;
        }
      });
    },
  },
  created() {
    this.breadEnd = this.lcfirst(this.$route.params.id);
  },
  methods: {
    returnBack(item) {
      if (this.$route.path !== item) {
        this.$router.push(item);
      }
    },
    lcfirst(str) {
      str += '';
      var f = str.charAt(0).toUpperCase();
      return f + str.substr(1);
    },
    switchToBack(item) {
      var delta = item.replace(':id', '', item);

      this.$router.push(delta);
    },
  },
  mounted() {},
};
</script>

<style>
</style>