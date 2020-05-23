<template>
  <div>
    <div class="ui form" :class="{inverted : activeTheme ? true : false}">
      <sui-header :class="{inverted : activeTheme ? true : false}" dividing>About you</sui-header>
      <sui-form-field>
        <label for="name">Name | E-mail</label>
        <sui-form-fields fields="two">
          <sui-form-field :error="error_name">
            <input
              @click.prevent="clearErrors()"
              type="text"
              v-model.lazy="name"
              placeholder="Name"
            />
          </sui-form-field>
          <sui-form-field :error="error_email">
            <input
              @click.prevent="clearErrors()"
              type="text"
              v-model.lazy="email"
              placeholder="E-mail"
            />
          </sui-form-field>
        </sui-form-fields>
      </sui-form-field>

      <sui-form-field :error="error_context">
        <label>Type me</label>
        <textarea @click.prevent="clearErrors()" v-model.lazy="context"></textarea>
      </sui-form-field>
      <sui-form-field>
        <sui-button
          :class="{inverted: activeTheme ? true : false }"
          color="blue"
          @click.prevent="sendMail"
          type="submit"
          :disabled="isDisabled"
        >Hire me!</sui-button>
      </sui-form-field>
    </div>
    <sui-message v-if="msg" error>
      <sui-message-header>Please, follow to the text below:</sui-message-header>
      <sui-message-list>
        <sui-message-item v-for="(features, i) in msg" :key="i">{{features[0]}}</sui-message-item>
      </sui-message-list>
    </sui-message>
    <sui-message v-if="success" success>
      <sui-message-header>Thank you so much!</sui-message-header>
      <div v-html="success"></div>
    </sui-message>
  </div>
</template>

<script>
export default {
  data() {
    return {
      method: 'POST',
      name: '',
      email: '',
      isDisabled: false,
      context: '',
      msg: '',
      sucess: '',
      error_name: false,
      error_context: false,
      error_email: false,
    };
  },
  computed: {
    activeTheme() {
      return this.$store?.getters?.theme;
    },
    getCover() {
      return this.$store?.getters?.cover;
    },
  },
  watch: {
    async name(newName) {
      await this.$store.dispatch('setDataStore', { data: newName, feature: 'name' });
    },
    async email(newEmail) {
      await this.$store.dispatch('setDataStore', { data: newEmail, feature: 'email' });
    },
    async context(newContext) {
      await this.$store.dispatch('setDataStore', { data: newContext, feature: 'context' });
    },
  },
  created() {
    const { name, email, context } = this.getCover;

    this.name = name;
    this.email = email;
    this.context = context;
  },
  methods: {
    async sendMail(e) {
      this.isDisabled = true;

      e.preventDefault();

      this.msg = '';
      this.sucess = '';
      this.clearErrors();

      const response = await this.$store.dispatch('apiRequest', {
        method: this.method,
        url: '/send',
        params: {
          name: this.name,
          email: this.email,
          context: this.context,
        },
      });

      if (response?.success !== true) {
        let msg = response?.error;
        this.msg = msg;

        Object.keys(msg).map(i => {
          switch (i) {
            case 'name':
              this.error_name = true;
              break;
            case 'email':
              this.error_email = true;
              break;
            case 'context':
              this.error_context = true;
              break;
          }
        });
        this.isDisabled = false;
        return;
      }
      this.success = response?.data;

      this.isDisabled = false;
    },
    clearErrors() {
      this.msg = '';
      this.error_name = false;
      this.error_email = false;
      this.error_context = false;
    },
  },
  head() {
    return {
      title: 'CV | Feedback',
    };
  },
};
</script>

<style>
</style>