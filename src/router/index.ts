import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login/index"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home/index"),
  },
  {
    path: "/home/vuexdemo",
    name: "VuexDemo",
    component: () => import("../views/demo/VuexDemo/index"),
  },
  {
    path: "/home/pannellumdemo",
    name: "PannellumDemo",
    component: () => import("../views/demo/PannellumDemo/index"),
  },
  {
    path: "/home/aframedemo",
    name: "AframeDemo",
    component: () => import("../views/demo/AframeDemo/index"),
  },
  {
    path: "/home/highchartsdemo",
    name: "HighchartsDemo",
    component: () => import("../views/demo/HighchartsDemo/index"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
