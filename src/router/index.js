import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import RegisterAdminView from "../views/RegisterAdminView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
    path: "/daftar",
    name: "daftar",
    component: RegisterView,
  },
  {
    path: "/admin",
    component: RegisterAdminView,
  },
  {
    path: "/masuk",
    name: "masuk",
    component: LoginView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
