import Vue from "vue";
import Router, { RouteConfig, RouterOptions } from "vue-router";

interface IextendedRouteConfig extends RouteConfig {
  class: string;
  title: string;
}

interface IextendedRouterOptions extends RouterOptions {
  routes: IextendedRouteConfig[];
}

Vue.use(Router);
const routerOptions: IextendedRouterOptions = {
  mode: "history",
  routes: [
    /* {
      component : () => import("../Components/Pages/Posts/Posts.vue"), // NOTE: FOLLOW THIS CONVEsTION
      path      : "/posts",
      name      : "posts",
      class     : "el-icon-info",
      title     : "Posts",
    }, */
  ],
};
export default new Router(routerOptions);
