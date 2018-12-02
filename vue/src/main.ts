import ElementUI from "element-ui";
import Vue from "vue";
import VueI18n from "vue-i18n";
import Vuex from "vuex";
import "./Assets/css/index.scss";

import App from "./modules/App/App.vue";
import store from "./Vuex";
/* PLUGINS */
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueI18n);

interface Iwindow extends Window {
  tether: (e: string) => void;
}
Vue.prototype.$tether = (window as Iwindow).tether;

//tslint:disable
new Vue({
  store: store(),
  el: "#app",
  render: load => load(App),
});
