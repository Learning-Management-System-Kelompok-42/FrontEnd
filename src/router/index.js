import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";
import SpecializationParent from "../views/SpecializationParent.vue";
import SpecializationView from "../views/SpecializationView.vue";
import SpecializationAdd from "../views/SpecializationAdd.vue";
import SpecializationDetail from "../views/SpecializationDetail.vue";
import LoginView from "../views/LoginView.vue";
import EmployeeView from "../views/Employee/EmployeeView.vue";
import DashboardView from "../views/DashBoard.vue";
import SideBarParents from "../views/SideBarParents.vue";
import EmployeeParent from "../views/Employee/EmployeeParent.vue"
import EmployeeDetail from "../views/Employee/EmployeeDetail.vue"
import SettingView from "../views/Setting/SettingView.vue"
import SettingMenu from "../views/Setting/SettingMenu.vue"
import SettingProfile from "../views/Setting/SettingProfile.vue"
import SettingCompany from "../views/Setting/SettingCompany.vue"
import SettingPassword from "../views/Setting/SettingPassword.vue"
import RegisterView from "../views/RegisterView.vue";
import SuccessLoginView from "../views/SuccessLoginView.vue";
import Course from "../views/course/course.vue";
import AddCourse from "../views/course/addcourse.vue";
import DetailCourse from "../views/course/detailcourse.vue";
import UpdateCourse from "../views/course/updatecourse.vue";
import UserView from "../views/User/UserView.vue";
import CourseView from "../views/User/Course/CourseView.vue"
import UserDashboard from "../views/User/UserDashboard.vue";
import UserCourse  from "../views/User/Course/UserCourse.vue"
import CourseDetail from "../views/User/Course/CourseDetail.vue"
import UserSettingView from "../views/User/Setting/SettingView.vue"
import UserSettingMenu from "../views/User/Setting/SettingMenu.vue"
import UserSettingProfile from "../views/User/Setting/SettingProfile.vue"
import UserSettingPassword from "../views/User/Setting/SettingPassword.vue"


Vue.use(VueRouter);

const cookie = require("tiny-cookie");

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "masuk",
    component: LoginView,
  },
  {
    path: "/redirect",
    component: SuccessLoginView,
  },
  {
    path: "/dashboard",
    component: SideBarParents,
    beforeEnter: (to, from, next) => {
      if (cookie.get("token") === null || !cookie.get("token")) {
        return next("/login");
      }
      next();
    },
    children: [
      {
        path: "/",
        component: DashboardView,
      },
      {
        path: "/employee",
        component: EmployeeParent,
        children: [
          {
            path: "/",
            name: "employeeView",
            component: EmployeeView,
          },
          {
            path: "detail",
            name: "employeeDetail",
            component: EmployeeDetail,
          },
        ],
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
          {
            path: "detail",
            name: "specializationdetail",
            component: SpecializationDetail,
          },
        ],
      },
      {
        path: "/course",
        component: Course,
      },
      {
        path: "/course/add",
        component: AddCourse,
      },
      {
        path: "/course/detail/:id",
        component: DetailCourse,
      },
      {
        path: "/course/update/:id",
        component: UpdateCourse,
      },
      {
        path: "/setting",
        component: SettingView,
        children: [
          {
            path: "/",
            component: SettingMenu,
          },
          {
            path: "profile",
            name: "settingProfile",
            component: SettingProfile,
          },
          {
            path: "company",
            name: "settingCompany",
            component: SettingCompany,
          },
          {
            path: "password",
            name: "settingPassword",
            component: SettingPassword,
          },
        ],
      },
    ],
  },
  {
    path: "/urdashboard",
    component: UserView,
    children: [
      {
        path: "/",
        component:UserDashboard,
      },
      {
        path: "/urcourse",
        component: CourseView,
        children: [
          {
            path: "/",
            name : 'userCourse',
            component : UserCourse,
          },
          {
            path: "detail",
            name : 'userCourseDetail',
            component : CourseDetail,
          },
        ],
      },
      {
        path: "/ursetting",
        component: UserSettingView,
        children: [
          {
            path: "/",
            component: UserSettingMenu,
          },
          {
            path: "urprofile",
            name: "SettingProfile",
            component: UserSettingProfile,
          },
          {
            path: "urpassword",
            name: "SettingPassword",
            component: UserSettingPassword,
          },
        ],
      },
    ],
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
