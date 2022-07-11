import axios from "axios";

const state = () => ({
  getProfileAdmin: {},
  status: "",
});
const mutations = {
  setProfileAdmin(state, param) {
    state.getProfileAdmin = param;
  },
  setStatus(state, param) {
    state.status = param;
  },
};
const actions = {
  async updateProfileEmployee({ commit }, param) {
    const response = await axios.put(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/employee/${this.state.user.userid}/profile`,
      param,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      console.log(response);
      commit("setStatus", response.status);
    } else {
      console.log(response);
    }
  },
  async getDataProfileAdmin({ commit }) {
    const response = await axios.get(
      `https://api.rubick.tech/v1/employee/${this.state.user.userid}`,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setProfileAdmin", response.data.data);
    } else {
      console.log(response);
    }
  },
};
export default {
  state,
  mutations,
  actions,
};
