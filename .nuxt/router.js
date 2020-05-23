import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ad352ef0 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages_404" */))
const _2ca97b46 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _25568436 = () => interopDefault(import('..\\pages\\feedback.vue' /* webpackChunkName: "pages_feedback" */))
const _44c72320 = () => interopDefault(import('..\\pages\\personal.vue' /* webpackChunkName: "pages_personal" */))
const _e5832f4c = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages_projects" */))
const _1377ec20 = () => interopDefault(import('..\\pages\\skills\\index.vue' /* webpackChunkName: "pages_skills_index" */))
const _93481a14 = () => interopDefault(import('..\\pages\\socials.vue' /* webpackChunkName: "pages_socials" */))
const _b41cff22 = () => interopDefault(import('..\\pages\\testimonial.vue' /* webpackChunkName: "pages_testimonial" */))
const _2e527688 = () => interopDefault(import('..\\pages\\skills\\_id.vue' /* webpackChunkName: "pages_skills__id" */))
const _09631d22 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _ad352ef0,
    name: "404"
  }, {
    path: "/about",
    component: _2ca97b46,
    name: "about"
  }, {
    path: "/feedback",
    component: _25568436,
    name: "feedback"
  }, {
    path: "/personal",
    component: _44c72320,
    name: "personal"
  }, {
    path: "/projects",
    component: _e5832f4c,
    name: "projects"
  }, {
    path: "/skills",
    component: _1377ec20,
    name: "skills"
  }, {
    path: "/socials",
    component: _93481a14,
    name: "socials"
  }, {
    path: "/testimonial",
    component: _b41cff22,
    name: "testimonial"
  }, {
    path: "/skills/:id",
    component: _2e527688,
    name: "skills-id"
  }, {
    path: "/",
    component: _09631d22,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
