import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Button from "../views/Button.vue"
import BreakPoint from "../views/BreakPoint.vue"
import Grid from "../views/Grid.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/button",
    name: "Button",
    component: Button
  },
  {
    path: "/break-point",
    name: "BreakPoint",
    component: BreakPoint
  },
  {
    path: "/grid",
    name: "Grid",
    component: Grid
  }
];

const router = new VueRouter({
  routes
});

export default router;
