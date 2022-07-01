import axios from "axios";
import router from "@/router";
import { mapGetters } from "vuex";
const cookie = require("tiny-cookie");

const state = () => ({
  message: "",
  userid: "",
  userlogin: {},
  token: null,
  isLoading: false,
  refCount: 0,
});
mapGetters;
const mutations = {
  loading(state, isLoading) {
    console.log({ isLoading });
    if (isLoading) {
      state.refCount++;
      state.isLoading = true;
    } else if (state.refCount > 0) {
      state.refCount--;
      state.isLoading = state.refCount > 0;
    }
  },
  setUser(state, param) {
    state.user = param;
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
};
const actions = {
  setToken(store, param) {
    store.commit("setToken", param);
  },
  async getUserById({ state, commit }) {
    const response = await axios.get(
      `http://54.254.240.107:4001/v1/users/${state.userid}`,
      {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      }
    );
    commit("setUser", response.data.data);
  },
  async fetchRegister({ dispatch }, param) {
    await axios.post(
      "http://54.254.240.107:4001/v1/company/register",
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
    dispatch("fetchLogin", {
      email: param.email_admin,
      password: param.password_admin,
    });
  },
  async fetchLogin(store, param) {
    console.log(param);
    const response = await axios.post(
      "http://54.254.240.107:4001/v1/login",
      param
    );
    cookie.set("token", response.data.data.token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    store.commit("setToken", response.data.data.token);
    store.commit("setUserId", response.data.data.user_id);
    router.push("/redirect");
  },
};
export default {
  state,
  mutations,
  actions,
};
