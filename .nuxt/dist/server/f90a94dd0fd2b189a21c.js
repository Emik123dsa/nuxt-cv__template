exports.ids=[5],exports.modules={49:function(e,t,d){"use strict";var n={props:{loading:Boolean},computed:{activeAlert(){var e,t;return null===(e=this.$store)||void 0===e||null===(t=e.getters)||void 0===t?void 0:t.alert},activeTheme(){var e,t;return null===(e=this.$store)||void 0===e||null===(t=e.getters)||void 0===t?void 0:t.theme}}},l=d(1);var component=Object(l.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"ui placeholder",class:{inverted:!!this.activeTheme}},[this._ssrNode('<div class="image header" data-v-35b0580d><div class="line" data-v-35b0580d></div> <div class="line" data-v-35b0580d></div></div> <div class="paragraph" data-v-35b0580d><div class="line" data-v-35b0580d></div> <div class="line" data-v-35b0580d></div> <div class="line" data-v-35b0580d></div> <div class="line" data-v-35b0580d></div> <div class="line" data-v-35b0580d></div></div>')])}),[],!1,(function(e){}),"35b0580d","3f254c8a");t.a=component.exports},62:function(e,t,d){"use strict";d.r(t);var n={data:()=>({loading:!0}),components:{LazyLoading:d(49).a},mounted(){new Promise((e,t)=>{setTimeout(()=>{this.loading=!1},500)})},head:()=>({title:"CV | Personal"}),computed:{personal(){var e,t;return null===(e=this.$store)||void 0===e||null===(t=e.getters)||void 0===t?void 0:t.menu_default}}},l=d(1);var o={components:{PersonalComponent:Object(l.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return this.loading?t("lazy-loading"):t("div",{domProps:{innerHTML:this._s(this.personal.content)}})}),[],!1,(function(e){}),null,"5f8c0dff").exports},async asyncData({route:e,store:t,query:d,params:n}){await t.dispatch("loadMenuDefault",e.name)}};var r=Object(l.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("personal-component")}),[],!1,(function(e){}),null,"9a43d4c0");t.default=r.exports}};