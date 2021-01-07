import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/home/vuexdemo",
    name: "VuexDemo",
    component: () => import("@/views/demo/VuexDemo.vue"),
  },
  {
    path: "/home/pannellumdemo",
    name: "PannellumDemo",
    component: () => import("@/views/demo/PannellumDemo.vue"),
  },
  {
    path: "/home/aframedemo",
    name: "AframeDemo",
    component: () => import("@/views/demo/AframeDemo.vue"),
  },
  {
    path: "/home/highchartsdemo",
    name: "HighchartsDemo",
    component: () => import("@/views/demo/HighchartsDemo.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
