import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";
<<<<<<< HEAD
import SpesializationsView from "../views/SpesializationsView.vue";
=======
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
>>>>>>> rizki

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
<<<<<<< HEAD
    path: "/spesializations",
    name: "spesializations",
    component: SpesializationsView,
=======
    path: "/daftar",
    name: "daftar",
    component: RegisterView,
  },
  {
    path: "/masuk",
    name: "masuk",
    component: LoginView,
>>>>>>> rizki
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
