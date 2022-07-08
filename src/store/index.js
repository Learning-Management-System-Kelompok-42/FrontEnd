import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import createPresistedState from "vuex-persistedstate";
import modul from "./modul";
import company from "./company";
import course from "./course";
import specialization from "./specialization";
import employee from "./employee";

Vue.use(Vuex);

const presistedDataState = createPresistedState({
  paths: ["user"],
});

export default new Vuex.Store({
  plugins: [presistedDataState],
  modules: {
    employee: {
      namespaced: true,
      ...employee,
    },
    specialization: {
      namespaced: true,
      ...specialization,
    },
    company: {
      namespaced: true,
      ...company,
    },
    user: {
      namespaced: true,
      ...user,
    },
    modul: {
      namespaced: true,
      ...modul,
    },
    course: {
      namespaced: true,
      ...course,
    },
  },
});
