import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import createPresistedState from "vuex-persistedstate";
import modul from "./moduls";
import company from "./company";

Vue.use(Vuex);

const presistedDataState = createPresistedState({
  paths: ["user"],
});

export default new Vuex.Store({
  plugins: [presistedDataState],
  modules: {
    company: {
      namespaced: true,
      ...company,
    },
    user: {
      namespaced: true,
      ...user,
    },
    moduls: {
      namespaced: true,
      ...modul,
    },
  },
});
