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
import SideBarParents from "../views/SideBarParents.vue";
import EmployeeParent from "../views/EmployeeParent.vue"
import EmployeeDetail from "../views/EmployeeDetail.vue"
import SettingView from "../views/Setting/SettingView.vue"
import SettingMenu from "../views/Setting/SettingMenu.vue"
import SettingProfile from "../views/Setting/SettingProfile.vue"
import SettingCompany from "../views/Setting/SettingCompany.vue"
import SettingPassword from "../views/Setting/SettingPassword.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
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
    path: "/dashboard",
    component: SideBarParents,
    children: [
      {
        path: "/",
        component: DashboardView,
      },
      {
        path: "/employee",
        component: EmployeeParent,
        children :[
          {
          path:'/',
          name : 'employeeView',
          component: EmployeeView,
          },
          {
            path:'detail',
            name : 'employeeDetail',
            component: EmployeeDetail,           
          }
        ]
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
        path: "/setting",
        component : SettingView,
        children :[
          {
            path : '/',
            component : SettingMenu,
          },
          {
            path : 'profile',
            name : 'settingProfile',
            component : SettingProfile, 
          },
          {
            path : 'company',
            name : 'settingCompany',
            component : SettingCompany,
          },
          {
            path :'password',
            name : 'settingPassword',
            component : SettingPassword,
          }
        ],
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
