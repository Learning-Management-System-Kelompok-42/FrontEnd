import axios from "axios";

const state = () => ({
  loading: false,
});
const mutations = {
  setLoading(state, param) {
    state.loading = param;
  },
};
const actions = {
  async fetchRegisterEmployee({ commit, dispatch }, param) {
    commit("setLoading", true);
    const response = await axios.post(
      "https://api.rubick.tech/v1/user/register",
      param,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setLoading", false);
      dispatch(
        "user/fetchLogin",
        {
          email: param.email,
          password: param.password,
        },
        { root: true }
      );
      console.log(response.data.data);
    } else {
      commit("setLoading", false);
      console.log(response.data.data);
    }
    commit("setLoading", false);
  },
};

export default {
  state,
  mutations,
  actions,
};
