exports.ids=[7],exports.modules={49:function(e,t,l){"use strict";var r={props:{loading:Boolean},computed:{activeAlert(){var e,t;return null===(e=this.$store)||void 0===e||null===(t=e.getters)||void 0===t?void 0:t.alert},activeTheme(){var e,t;return null===(e=this.$store)||void 0===e||null===(t=e.getters)||void 0===t?void 0:t.theme}}},d=l(1);var component=Object(d.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"ui placeholder",class:{inverted:!!this.activeTheme}},[this._ssrNode('<div class="image header" data-v-35b0580d><div class="line" data-v-35b0580d></div> <div class="line" data-v-35b0580d></div></div> <div class="paragraph" data-v-35b0580d><div class="line" data-v-35b0580d></div> <div class="line" data-v-35b0580d></div> <div class="line" data-v-35b0580d></div> <div class="line" data-v-35b0580d></div> <div class="line" data-v-35b0580d></div></div>')])}),[],!1,(function(e){}),"35b0580d","3f254c8a");t.a=component.exports},52:function(e,t,l){var content=l(58);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=l(7).default;e.exports.__inject__=function(e){r("bf99ee48",content,!0,e)}},57:function(e,t,l){"use strict";l.r(t);var r=l(52),d=l.n(r);for(var n in r)"default"!==n&&function(e){l.d(t,e,(function(){return r[e]}))}(n);t.default=d.a},58:function(e,t,l){(t=l(6)(!1)).push([e.i,".webpack[data-v-add032fa]{background:url(https://cdn.worldvectorlogo.com/logos/webpack.svg) no-repeat 50%;background-size:contain}",""]),e.exports=t},61:function(e,t,l){"use strict";l.r(t);var r={components:{LazyLoading:l(49).a},data:()=>({skills:"",loading:!0}),created(){this.getSkills()},computed:{activeAlert(){var e,t;return null===(e=this.$store)||void 0===e||null===(t=e.getters)||void 0===t?void 0:t.alert},activeTheme(){var e,t;return null===(e=this.$store)||void 0===e||null===(t=e.getters)||void 0===t?void 0:t.theme}},methods:{getSkills(){this.loading=!0;let e=this.$store.getters.skills;Object.keys(e).map(t=>{e[t].name===this.$route.params.id&&(this.skills=e[t])}),new Promise((e,t)=>{setTimeout(()=>{this.loading=!1},500)})}},head(){return{title:"CV | "+this.skills.title}},mounted(){}},d=l(1);var n={validate:({store:e,params:t})=>e.getters.skills.some(e=>e.name===t.id),components:{SkillPrecisely:Object(d.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e.loading?e._e():l("sui-item-group",{staticClass:"card-animation-wrapper",attrs:{divided:""}},[l("sui-item",[l("sui-header",{tag:"h3",class:{inverted:!!e.activeTheme}},[l("sui-icon",{class:""+e.skills.color,attrs:{name:""+e.skills.name,size:"big"}}),e._v(" "),l("sui-header-content",{class:{inverted:!!e.activeTheme}},[e._v("\n          "+e._s(e.skills.title)+"\n          "),l("sui-header-subheader",{class:{inverted:!!e.activeTheme}},[e._v(e._s(e.skills.desc))])],1)],1)],1),e._v(" "),l("sui-item",{style:{"border-top":e.activeTheme&&"1px solid rgba(34,36,38,1)"}},[l("sui-header",{tag:"h3",class:{inverted:!!e.activeTheme}},[l("sui-icon",{attrs:{name:"linux"}}),e._v(" "),l("sui-header-content",[e._v("\n          About skill:\n          "),l("sui-header-subheader",[e._v("Let me explain and widen it properly:")])],1)],1)],1),e._v(" "),l("sui-item",{style:{"border-top":e.activeTheme&&"1px solid rgba(34,36,38,1)"}},[l("sui-item-content",[l("sui-item-description",{style:{color:e.activeTheme&&"#fff"}},[l("p",{style:{color:!!e.activeTheme},domProps:{innerHTML:e._s(e.skills.about)}})])],1)],1)],1),e._ssrNode(" "),e.loading?l("lazy-loading",{attrs:{loading:e.loading}}):e._e()],2)}),[],!1,(function(e){var t=l(57);t.__inject__&&t.__inject__(e)}),"add032fa","0858dc48").exports},async fetch({store:e,redirect:t}){await e.dispatch("loadSkills")}};var o=Object(d.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("skill-precisely")}),[],!1,(function(e){}),null,"0dce4080");t.default=o.exports}};