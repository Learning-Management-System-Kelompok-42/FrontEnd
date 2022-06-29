import axios from "axios";
import { getField, updateField } from "vuex-map-fields";
const state = () => ({
  dataCompany: {},
  errorMessage: "",
});
const getters = {
  getField,
};
const mutations = {
  updateField,
  setNameCompany(state, param) {
    state.dataCompany.name_company = param;
  },
  setDataCompany(state, param) {
    state.dataCompany = param;
  },
  setDataAdminCompany(state, param) {
    state.dataAdminCompany = param;
  },
  setError(state, param) {
    state.errorMessage = param;
  },
};
const actions = {
  async fetchCompany(store) {
    const response = await axios.get("http://54.254.240.107:4001/v1/company", {
      headers: {
        Authorization: `Bearer ${this.state.user.token}`,
      },
    });
    if (response.code >= 200 < 400) {
      store.commit("setError", response.message);
      store.commit("setDataCompany", response.data.data);
    } else {
      console.log(response);
    }
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
