import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";

import EmployeeView from "../views/EmployeeView.vue"
import DashboardView from "../views/DashBoard.vue"

import LoginView from "../views/LoginView.vue";
// import RegisterAdminView from "../views/RegisterAdminView.vue";
import RegisterPerusahaanView from "../views/RegisterPerusahaanView.vue";
// import RegisterView from "../views/RegisterView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
    path: "/employee",
    name: "employee",
    component: EmployeeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  }, 
    path: "/daftar",
    component: RegisterPerusahaanView,
    // children: [
    //   {
    //     path: "",
    //     component: RegisterPerusahaanView,
    //   },
    //   {
    //     path: "admin",
    //     component: RegisterAdminView,
    //   },
    // ],
  },
  // {
  //   path: "/admin",
  //   name: "admin",
  //   component: RegisterAdminView,
  // },
  // {
  //   path: "/daftar",
  //   component: RegisterPerusahaanView,
  // },
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
