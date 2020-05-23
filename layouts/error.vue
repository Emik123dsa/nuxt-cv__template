<template>
  <div v-if="is404" class="pusher">
    <client-only>
      <vue-particles class="bg-pusher bg-pusher__particles" color="#2185d0" linesColor="#2185d0"></vue-particles>
    </client-only>
    <div
      ref="active"
      class="bg-pusher"
      :class="{'bg-pusher__background': activeTheme}"
    ></div>
    <div class="pusher pusher__wrapper">
      <sui-segment stripe vertical>
        <sui-container text>
          <Header />
          <sui-segment attached :class="{inverted: activeTheme}"></sui-segment>

          <sui-segment attached :class="{inverted: activeTheme}">
            <section class="pusher__menu pusher-context">
              <error-component></error-component>
            </section>
          </sui-segment>

          <Alert />
          <Footer />
        </sui-container>
      </sui-segment>
    </div>
  </div>
</template>

<script>
import Header from '~/components/header/HeaderComponent';
import Footer from '~/components/footer/FooterComponent';
import Alert from '~/components/AlertComponent';
import ErrorComponent from '~/components/ErrorComponent';

export default {
  components: {
    Header,
    Footer,
    Alert,
    ErrorComponent,
  },
  props: ['error'],
  //middleware: ['error_m'],
  layout: 'empty',
  computed: {
    is404() {
      return this.error.statusCode == 404;
    },

    activeTheme() {
      return this.$store?.getters?.theme;
    },
  },
};
</script>

<style>
</style>