import type { RouteRecordRaw } from "vue-router";
import LoginView from '@/views/login/index.vue';
import DashboardView from  '@/views/dashboard/index.vue'
import { createRouter, createWebHashHistory } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {path:'/',component:DashboardView,name:'dashboard'},
  { path: '/login',component:LoginView,name:'login' }
];

const router = createRouter(
  {
    history:createWebHashHistory(),
    strict: true,
    scrollBehavior : ()=>({left:0,top:0}),
    routes
  }
)

export default router
