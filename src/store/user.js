import axios from "axios";
import router from "@/router";
const cookie = require("tiny-cookie");

const state = () => ({
  message: "",
  userid: "",
  user: {},
  userById: {},
  userlogin: {},
  allUser: [],
  token: null,
  isLoading: true,
  status: 0,
  companyId: "",
  akses: "",
  specializationId: "",
});
const mutations = {
  setSpecializationId(state, param) {
    state.specializationId = param;
  },
  setCompanyId(state, param) {
    state.companyId = param;
  },
  setAllUser(state, param) {
    state.allUser = param;
  },
  setLoading(state, param) {
    console.log(state.isLoading);
    state.isLoading = param;
  },
  setStatus(state, param) {
    state.status = param;
  },
  setUser(state, param) {
    state.user = param;
  },
  setUserById(state, param) {
    state.userById = param;
  },
  setUserLogin(state, param) {
    state.userlogin = param;
  },
  setMessage(state, param) {
    state.message = param;
  },
  setUserId(state, param) {
    state.userid = param;
  },
  setToken(state, param) {
    state.token = param;
  },
  setAkses(state, param) {
    state.akses = param;
  },
};
const actions = {
  setCompanyId(store, param) {
    store.commit("setCompanyId", param);
  },
  setUserLogin(store, param) {
    store.commit("setUserLogin", param);
  },
  setToken(store, param) {
    store.commit("setToken", param);
  },
  setUserIdFromVue(store, param) {
    store.commit("setUserId", param);
  },
  async getAllUser({ state, commit }) {
    const response = await axios.get(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/employee`,
      {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setAllUser", response.data.data);
    } else {
      console.log(response.status);
    }
  },
  async getUserById({ state, commit }) {
    const response = await axios.get(
      `https://api.rubick.tech/v1/company/${this.state.user.companyId}/employee/${state.userid}`,
      {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      }
    );
    commit("setUserById", response.data.data);
  },
  async getEmployeeById({ state, commit }) {
    const response = await axios.get(
      `https://api.rubick.tech/v1/employee/${state.userid}`,
      {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      }
    );
    if (response.status >= 200 || response.status < 400) {
      commit("setUserById", response.data.data);
    } else console.log(response);
  },
  async fetchRegister({ dispatch, commit }, param) {
    commit("setLoading", true);
    try {
      const response = await axios.post(
        "https://api.rubick.tech/v1/company/register",
        {
          name_company: param.name_company,
          address_company: param.address_company,
          sector: param.sector,
          website: param.website,
          logo: param.logo,
          name_admin: param.name_admin,
          phone_number: param.phone_number,
          address_admin: param.address_admin,
          email_admin: param.email_admin,
          password_admin: param.password_admin,
        },
        {
          headers: {
            Accept: "multipart/form-data",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status >= 200 || response.status < 400) {
        commit("setStatus", response.status);
        commit("setLoading", false);
        dispatch("fetchLogin", {
          email: param.email_admin,
          password: param.password_admin,
        });
      } else if (response.status >= 400) {
        commit("setStatus", response.status);
        commit("setLoading", false);
      }
    } catch (error) {
      commit("setStatus", error.code);
      commit("setLoading", false);
    }
  },
  async fetchLogin({ commit }, param) {
    console.log(param);
    commit("setLoading", true);
    try {
      const response = await axios.post(
        "https://api.rubick.tech/v1/login",
        param
      );
      if (response.status >= 200 || response.status < 400) {
        cookie.set("token", response.data.data.token, {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });
        console.log(response.status);
        commit("setToken", response.data.data.token);
        commit("setUserId", response.data.data.user_id);
        commit("setCompanyId", response.data.data.company_id);
        commit("setAkses", response.data.data.level_access);
        commit("setSpecializationId", response.data.data.specialization_id);
        commit("setLoading", false);
        router.push("/redirect");
      } else if (response.status > 400) {
        commit("setStatus", response.status);
        console.log(response.status);
        commit("setLoading", false);
      }
    } catch (e) {
      commit("setStatus", e.code);
      commit("setLoading", false);
    }
  },
};
export default {
  state,
  mutations,
  actions,
};
