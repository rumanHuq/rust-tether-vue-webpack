import ElementUI from "element-ui";
import Vue from "vue";
import VueI18n from "vue-i18n";
import Vuex from "vuex";
/* tslint:disable-next-line */
import "element-ui/lib/theme-chalk/index.css";
import "./Assets/css/index.scss";
// import "./Routes/hooks"; // vue-class-component lifecyclehooks for vue-router

import App from "./modules/App/App.vue";

// import router from "./Routes";
import store from "./Vuex";
/* PLUGINS */
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueI18n);
//tslint:disable
new Vue({
  // router,
  store: store(),
  el: "#app",
  render: load => load(App),
});
