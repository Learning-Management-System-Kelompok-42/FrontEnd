import axios from "axios";
import { mapGetters } from "vuex";

const state = () => ({
  code: "",
  isLoading: false,
});
mapGetters;
const mutations = {
  setCode(state, param) {
    state.code = param;
  },
  setIsLoading(state, param) {
    state.isLoading = param;
  },
};
const actions = {
  async addCourse({ commit }, param) {
    console.log(param);
    commit("setIsLoading", true);
    try {
      const response = await axios.post(
        `https://api.rubick.tech/v1/company/${this.state.user.companyId}/course`,
        param,
        {
          headers: {
            Authorization: `Bearer ${this.state.user.token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status >= 200 || response.status < 400) {
        console.log(response.status);
        commit("setCode", response.status);
        commit("setIsLoading", false);
        // this.$router.push("/course");
      } else if (response.status >= 400) {
        console.log(response.status);
        commit("setCode", response.status);
        commit("setIsLoading", false);
        console.log(response);
      }
    } catch (e) {
      commit("setCode", e.response.status);
      commit("setIsLoading", false);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
