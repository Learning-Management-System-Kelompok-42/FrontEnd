import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";
import SpecializationView from "../views/SpecializationView.vue"
import EmployeeView from "../views/EmployeeView.vue"
import DashboardView from "../views/DashBoard.vue"

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
    path: "/specialization",
    name: "specialization",
    component: SpecializationView,
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
