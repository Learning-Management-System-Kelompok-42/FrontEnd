import { getField, updateField } from "vuex-map-fields";
const state = () => ({
  dataCompany: [
    {
      name_company: "",
      address_company: "",
      sector: "",
      website: "",
      logo: null,
      name_admin: "",
      phone_number: "",
      address_admin: "",
      email_admin: "",
      password_admin: "",
    },
  ],
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
};
const actions = {
  // getDataCompany(store, data) {
  //   store.commit("setDataCompany", data);
  // },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
