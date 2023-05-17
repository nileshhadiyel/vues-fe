import HomePage from "@/components/HomePage.vue";
import ThreadShow from "@/components/ThreadShow.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/thread",
    name: "THreadShow",
    component: ThreadShow,
  },
];


export default createRouter({
  history: createWebHistory(),
  routes,
});