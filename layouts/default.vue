<template>
  <div class="pusher">
    <client-only>
      <vue-particles class="bg-pusher bg-pusher__particles" color="#2185d0" linesColor="#2185d0"></vue-particles>
    </client-only>
    <div ref="active" class="bg-pusher" :class="{'bg-pusher__background': activeTheme}"></div>
    <div class="pusher pusher__wrapper">
      <sui-segment stripe vertical>
        <sui-container text>
          <Header />
          <sui-segment attached :class="{inverted: activeTheme}">
            <Breadcrumb />
          </sui-segment>
          <transition name="slide-fade">
            <sui-segment attached :class="{inverted: activeTheme}">
              <section class="pusher__menu pusher-context">
                <nuxt />
              </section>
            </sui-segment>
          </transition>
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
import Breadcrumb from '~/components/global/Breadcrumb';
export default {
  components: {
    Header,
    Footer,
    Alert,
    Breadcrumb,
  },
  computed: {
    activeTheme() {
      return this.$store?.getters?.theme;
    },
  },
  head() {
    return {
      title: 'CV | Emil Shari',
      meta: [
        {
          name: 'description',
          content: 'Emil Shari resumse description, which is involving my essential features',
        },
        {
          name: 'og:locale',
          content: 'EN',
        },
        {
          name: 'keywords',
          content:
            'about me, emil shari, presonal data, skills, nuxt.js, vue.js, self-development, php, laravel',
        },
        {
          name: 'og:type',
          content: 'article',
        },
        {
          name: 'og:title',
          content: 'CV | Emil Shari',
        },
        {
          name: 'og:description',
          content: 'About my skills and life features',
        },
        {
          name: 'og:url',
          content: 'https://emilshari.ru',
        },
        {
          name: 'og:image',
          content: 'https://emilshari.ru/favicon.ico',
        },
        {
          name: 'og:site_name',
          content: 'emilshari.ru',
        },
      ],
    };
  },
};
</script>

<style>
</style>