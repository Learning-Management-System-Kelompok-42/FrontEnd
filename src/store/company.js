import axios from "axios";
import { getField, updateField } from "vuex-map-fields";
const state = () => ({
  dataCompany: {},
  errorMessage: "",
  dataProfileCompany: "",
});
const getters = {
  getField,
};
const mutations = {
  updateField,
  setDataProfileCompany(state, param) {
    state.dataProfileCompany = param;
  },
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
  async fetchCompany({ commit }) {
    const response = await axios.get(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/dashboard`,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setError", response.message);
      commit("setDataCompany", response.data.data);
    } else {
      console.log(response);
    }
  },
  async getDataProfileCompany({ commit }) {
    const response = await axios.get(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}`,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setDataProfileCompany", response.data.data);
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