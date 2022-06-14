import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import perusahaan from "./perusahaan";
import createPresistedState from "vuex-persistedstate";

Vue.use(Vuex);

const presistedDataState = createPresistedState({
  paths: ["user"],
});

export default new Vuex.Store({
  plugins: [presistedDataState],
  modules: {
    perusahaan: {
      namespaced: true,
      ...perusahaan,
    },
    user: {
      namespaced: true,
      ...user,
    },
  },
});
