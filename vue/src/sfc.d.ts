declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
declare module "vue/types/vue" {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
    $myGlobal: string;
  }
}

declare module "*.scss";
declare module "vuex-pathify";
