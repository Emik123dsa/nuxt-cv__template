
export const state = () => ({
    apiBaseUrl: "http://127.0.0.1/api/",
    allSkills: "",
    skillCards: "",
    aboutFeatures: "",
    theme: "",
    alert: "",
    authToken: "",
    uuid: ""
});

export const getters = {
    skills: (s) => s.allSkills,
    skillCards: (s) => s.skillCards,
    aboutFeatures: (s) => s.aboutFeatures,
    theme: (s) => s.theme,
    alert: (s) => s.alert,
    authToken: (s) => s.authToken,
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
        state.allSkills = "";
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
    }
};
export const actions = {
    async nuxtServerInit({ commit, dispatch }, { error, app, res, req, isDev, query }) {
        let d = app.$cookies.get('__at-es');
        let d_alert = app.$cookies.get('__alert-active');
        let __uuid = app.$cookies.get('__uuid');

        if (!d_alert) {
            app.$cookies.set('__alert-active', true, {
                maxAge: 60 * 60 * 24 * 31 * 12,
                path: '/'
            })
        }
        if (!d) {
            app.$cookies.set('__at-es', false, {
                maxAge: 60 * 60 * 24 * 31 * 12,
                path: '/'
            })
        }
        if (!__uuid) {
            const { v4: uuidv4 } = require("uuid");
            let __UUID = uuidv4();

            app.$cookies.set('__uuid', __UUID, {
                maxAge: 60 * 60 * 24 * 31 * 12,
                path: "/"
            })
        }

        commit("setUUID", __uuid);
        commit("setActiveTheme", d);
        commit("setAlertDown", d_alert);
        try {
            await Promise.all([
            ]);
        } catch (e) {
            error({
                statusCode: 500,
                message: e
            })
        }
    },
    async apiRequest({ state }, { method, url, baseUrl, params = {}, data }) {
        let config = {
            method: method || "get",
            baseUrl: baseUrl || state.apiBaseUrl,
            url: url,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            params: {
                json: true,
                merchant_keys: state.merchantKey,
                lang: "ru",
                device_platform: "site",
                device_id: state.deviceId,
                ...params,
            },
        };

        if (state.authToken) {
            config.params.token = state.authToken
        }

        return new Promise((res, rej) => {
            this.$axios(config)
                .then((response) => res(response))
                .catch((error) => rej(error))
        });
    },
    async loadSkills({ dispatch, commit }) {
        const response = await dispatch("apiRequest", {
            url: "skills",
        }
        );
        commit("setSkills", response);
    },
    async loadSkillCards({ dispatch, commit }) {
        const response = await dispatch("apiRequest", {
            url: "skill-cards"
        });

        commit("setSkillCards", response);
    },
    async loadAbout({ dispatch, commit }) {
        const response = await dispatch("apiRequest", {
            url: "about"
        })

        commit("setAboutFeatures", response);
    }, 
    async removeAlertCookie({commit}) {
        
    }
};
