import axios from "axios";

const state = () => ({
  course: [],
  courseById: {},
  courseId: "",
  moduleById: {},
});
const mutations = {
  setCourse(state, param) {
    state.course = param;
  },
  setCourseById(state, param) {
    state.courseById = param;
  },
  setCourseId(state, param) {
    state.courseId = param;
  },
  setModuleByid(state, param) {
    state.moduleById = param;
  },
};
const actions = {
  async fetchCourse({ state, commit }) {
    console.log(state.course);
    const response = await axios.get(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/course`,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setCourse", response.data.data);
    } else {
      console.log(response);
    }
  },
  async fetchModuleById({ state, commit }) {
    const response = await axios.get(
      `https://api.rubick.tech/v1/module/${state.courseId}`,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setModuleById", response.data.data);
    } else {
      console.log(response);
    }
  },
  setCourseIdFromVue(store, param) {
    store.commit("setCourseId", param);
  },
  async fetchCourseById({ state, commit, dispatch }) {
    console.log(state.courseId);
    const response = await axios.get(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/course/${state.courseId}`,
      {
        headers: {
          Authorization: `Bearer ${this.state.user.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setCourseById", response.data.data);
      dispatch("fetchModuleById");
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
