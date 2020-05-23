import qs from 'qs';

export const state = () => ({
  apiBaseUrl: 'http://127.0.0.1/api/',
  allSkills: '',
  skillCards: '',
  aboutFeatures: '',
  theme: '',
  alert: '',
  authToken: '',
  uuid: '',
  menus: [],
  menu_default: [],
  cover: {
    name: '',
    email: '',
    context: ''
  }
});

export const getters = {
  skills: (s) => s.allSkills,
  skillCards: (s) => s.skillCards,
  aboutFeatures: (s) => s.aboutFeatures,
  theme: (s) => s.theme,
  alert: (s) => s.alert,
  authToken: (s) => s.authToken,
  menus: (s) => s.menus,
  menu_default: (s) => s.menu_default,
  cover: (s) => s.cover
};
export const mutations = {
  setActiveTheme(state, theme) {
    state.theme = theme;
  },
  setAlertDown(state, alert) {
    state.alert = alert;
  },
  setUUID(state, uuid) {
    state.uuid = uuid;
  },
  setSkills(state, context) {
    state.allSkills = context;
  },
  clearSkills(state) {
    state.allSkills = '';
  },
  setSkillCards(state, context) {
    state.skillCards = context;
  },
  clearSkillCards(state) {
    state.skillCards = [];
  },
  setAboutFeatures(state, value) {
    state.aboutFeatures = value;
  },
  clearAboutFeatures(state) {
    state.aboutFeatures = [];
  },
  setMenuFeatures(state, menus) {
    state.menus = menus;
  },
  setMenuDefault(state, menu) {
    state.menu_default = menu;
  },
  setProfile(state, { data, feature }) {
    switch (feature) {
      case "name":
        state.cover.name = data;
        break;
      case "email":
        state.cover.email = data;
        break;
      case "context":
        state.cover.context = data;
        break;
      default:
        break;
    }
  }
};
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { error, app, res, req, isDev, query }) {
    let d = app.$cookies.get('__at-es');
    let d_alert = app.$cookies.get('__alert-active');
    let __uuid = app.$cookies.get('__uuid');

    if (typeof d_alert === null || d_alert === undefined) {
      app.$cookies.set('__alert-active', true, {
        maxAge: 60 * 60 * 24 * 31 * 12,
        path: '/',
      });
    }

    if (typeof d === null || d === undefined) {
      app.$cookies.set('__at-es', false, {
        maxAge: 60 * 60 * 24 * 31 * 12,
        path: '/',
      });
    }
    if (!__uuid) {
      const { v4: uuidv4 } = require('uuid');
      let __UUID = uuidv4();

      app.$cookies.set('__uuid', __UUID, {
        maxAge: 60 * 60 * 24 * 31 * 12,
        path: '/',
      });
    }

    commit('setUUID', __uuid);
    commit('setActiveTheme', d);
    commit('setAlertDown', d_alert);
    //await dispatch("loadAbout")
    try {
      await Promise.all([
        dispatch('loadSkills'),
        dispatch('loadMenuFeatures')
      ]);
    } catch (e) {
      error({
        statusCode: 500,
        message: e,
      });
    }
  },
  async apiRequest({ state }, { method, url, baseURL, params = {}, data = {} }) {
    let config = {
      method: method || "get",
      baseURL: baseURL || state.apiBaseUrl,
      url: url,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        lang: "ru",
        device_platform: "site",
        ...params,
      },
    };

    if (state.authToken) {
      config.params.token = state.authToken;
    }

    if (data) {
      config.data = qs.stringify(data);
    }

    const response = await this.$axios(config);
    return response?.data;
  },
  async setDataStore({ commit }, { data, feature}) {

    commit("setProfile", { data, feature });
  },
  async loadMenuDefault({ dispatch, commit }, id) {
    const response = await dispatch('apiRequest', {
      url: 'todos',
      params: {
        todo: id
      }
    })

    commit("setMenuDefault", response);

  },
  async loadMenuFeatures({ dispatch, commit }) {
    const response = await dispatch('apiRequest', {
      url: 'menu-features'
    })

    commit("setMenuFeatures", response.data);
  },
  async loadSkills({ dispatch, commit }) {
    const response = await dispatch('apiRequest', {
      url: 'skills',
    });
    commit('setSkills', response.data);
  },
  async loadSkillCards({ dispatch, commit }) {
    const response = await dispatch('apiRequest', {
      url: 'skill-cards',
    });

    commit('setSkillCards', response.data);
  },
  async loadAbout({ dispatch, commit }) {
    const response = await dispatch('apiRequest', {
      url: 'about',
    });

    commit('setAboutFeatures', response.data);
  },
  async removeAlertCookie({ commit }) {
    if (!!this.$cookies.get('__alert-active')) {
      this.$cookies.set('__alert-active', false, {
        maxAge: 60 * 60 * 24 * 31 * 12,
        path: '/',
      });
      commit('setAlertDown', false);
    }

    return;
  },
  async changeTheme({ commit }, value) {
    this.$cookies.set('__at-es', value, {
      maxAge: 60 * 60 * 24 * 31 * 12,
      path: '/',
    });
    commit('setActiveTheme', value);

  },
};
