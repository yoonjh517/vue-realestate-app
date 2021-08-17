import { createWebHistory, createRouter } from "vue-router";
// components
import Home from "../components/Home.vue";
import Card from "../components/Card.vue";
import Detail from "../components/Detail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/unit",
    component: Card,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
