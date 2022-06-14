import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";
import SpecializationParent from "../views/SpecializationParent.vue";
import SpecializationView from "../views/SpecializationView.vue";
import SpecializationAdd from "../views/SpecializationAdd.vue";
import LoginView from "../views/LoginView.vue";
import RegisterPerusahaanView from "../views/RegisterPerusahaanView.vue";
import EmployeeView from "../views/EmployeeView.vue";
import DashboardView from "../views/DashBoard.vue";

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
  {
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
  {
    path: "/employee",
    name: "employee",
    component: EmployeeView,
  },
  {
    path: "/specialization",
    component: SpecializationParent,
    children: [
      {
        path: "/",
        name: "specializationview",
        component: SpecializationView,
      },
      {
        path: "add",
        name: "specializationadd",
        component: SpecializationAdd,
      },
    ],
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
