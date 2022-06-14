import axios from "axios";
import router from "@/router";

const state = () => ({
  token: null,
});
const mutations = {
  setToken(state, param) {
    state.token = param;
  },
};
const actions = {
  setToken(store, param) {
    store.commit("setToken", param);
  },
  async fetchLogin(store, param) {
    const cookie = require("tiny-cookie");
    const response = await axios.post(
      "https://api-lms-42.herokuapp.com/v1/user/login",
      {
        email: param.email,
        password: param.password,
      },
      {
        Headers: {
          Accept: "multipart/form-data",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    cookie.set("token", response.data.data.Token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    store.commit("setToken", response.data.data.Token);
    router.push("/dashboard");
  },
};
export default {
  state,
  mutations,
  actions,
};
