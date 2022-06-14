import Vue from "vue";
import Vuex from "vuex";
import perusahaan from "./perusahaan";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    perusahaan: {
      namespaced: true,
      ...perusahaan,
    },
  },
});
