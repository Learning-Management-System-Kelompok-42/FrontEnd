import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";
import EmployeeView from "../views/EmployeeView.vue";
import DashboardView from "../views/DashBoard.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import SuccessLoginView from "../views/SuccessLoginView.vue";
import Course from "../views/course/course.vue";
import AddCourse from "../views/course/addcourse.vue";
import DetailCourse from "../views/course/detailcourse.vue";

Vue.use(VueRouter);

const cookie = require("tiny-cookie");

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
    beforeEnter: (to, from, next) => {
      if (!cookie.get("token")) {
        return next("/masuk");
      }
      next();
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    beforeEnter: (to, from, next) => {
      if (cookie.get("token") === null || !cookie.get("token")) {
        return next("/masuk");
      }
      next();
    },
  },
  {
    path: "/kursus",
    component: Course,
    // beforeEnter: (to, form, next) => {
    //   if (cookie.get("token") === null || !cookie.get("token")) {
    //     return next("/masuk");
    //   }
    //   next();
    // },
  },
  {
    path: "/kursus/tambah",
    component: AddCourse,
  },
  {
    path: "/kursus/detail",
    component: DetailCourse,
  },
  {
    path: "/daftar",
    component: RegisterView,
  },
  {
    path: "/masuk",
    name: "masuk",
    component: LoginView,
  },
  {
    path: "/sukseslogin",
    component: SuccessLoginView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
