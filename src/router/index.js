import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";
import EmployeeView from "../views/EmployeeView.vue"
import DashBoard from "../views/DashBoard.vue"
import WebsiteDashboard from "../views/WebsiteDashboard.vue"
import AddAdmin from "../views/AddAdmin.vue"
import WebsiteSetting from "../views/WebsiteSetting.vue"
import ProfileSetting from "../views/ProfileSetting.vue"
import PasswordSetting from "../views/PasswordSetting.vue"

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
    component: DashBoard,
  }, 
  {
    path: "/dashboard_web",
    name: "dashboard_web",
    component: WebsiteDashboard,
  }, 
  {
    path: "/add_admin",
    name: "add_admin",
    component: AddAdmin,
  }, 
  {
    path: "/web_setting",
    name: "web_setting",
    component: WebsiteSetting,
  }, 
  {
    path: "/profile_setting",
    name: "profile_setting",
    component: ProfileSetting,
  }, 
  {
    path: "/pass_setting",
    name: "pass_setting",
    component: PasswordSetting,
  }, 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
