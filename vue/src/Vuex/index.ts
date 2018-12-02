import Vuex, { StoreOptions } from "vuex";
import pathify, { make } from "vuex-pathify";

export interface IrootState {
  version?: string;
}
const state = {};
const mutations = make.mutations(state);
const store = {
  actions: {},
  getters: {},
  modules: {},
  mutations,
  plugins: [pathify.plugin],
  state,
  strict: true,
} as StoreOptions<IrootState>;

if (module.hot) {
  // WILL ADD AS LONG AS FILE AVAILABLE
  // const modules = ["src/Components/Pages/Posts/state-management"];
  // module.hot.accept(modules, () => {
  //   const newPosts = require(modules[0]).default; // eslint-disable-line
  //   // @ts-ignore
  //   store.hotUpdate({ modules: { Posts: newPosts } });
  // });
}

export default () => new Vuex.Store(store);
