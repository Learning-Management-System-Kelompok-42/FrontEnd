import axios from "axios";

const state = () => ({
  specialization: [],
  specializationId: "",
  linkInvitation: "",
  status: "",
});
const mutations = {
  setLink(state, param) {
    state.linkInvitation = param;
  },
  setSpecialization(state, param) {
    state.specialization = param;
  },
  setSpecializationId(state, param) {
    state.specializationId = param;
  },
  setStatus(state, param) {
    state.status = param;
  },
};
const actions = {
  actionSetSpecializationId(store, param) {
    store.commit("setSpecializationId", param);
  },
  async addSpecialization(store, param) {
    const response = await axios.post(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/specialization`,
      param,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      store.commit("setStatus", response.status);
    } else store.commit("setStatus", response.status);
  },
  async addCourseToSpecialization({ state, commit }, param) {
    const response = await axios.post(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/specialization/${state.specializationId}/course`,
      param,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setStatus", response.status);
    } else console.log(response);
  },
  async generateInvitation({ commit }) {
    const response = await axios.get(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/specialization/generate`,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setLink", response.data.data);
    } else {
      console.log(response);
    }
  },
  async fetchSpecialization(store) {
    const response = await axios.get(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/specialization`,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      store.commit("setSpecialization", response.data.data);
      console.log(response.data.data);
    } else {
      console.log(response.status);
    }
  },
  async getSpecializationById({ commit, state }) {
    const response = await axios.get(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/specialization/${state.specializationId}`,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setSpecialization", response.data.data);
      console.log(response.data.data);
    } else {
      console.log(response.status);
    }
  },
};
export default {
  state,
  mutations,
  actions,
};
