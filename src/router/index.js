import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Example01",
    component: () => import("@/views/Example01/Example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/Example02.vue")
  },
  {
    props: true,
    path: "/example03/students/:sid/homework/:hid",
    component: () => import("@/views/example03/Example03.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
