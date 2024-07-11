import { createRouter, createWebHashHistory } from "vue-router";
import FirstPage from "../views/FirstPage.vue";

const routes = [
  {
    path: "/",
    name: "first-page",
    component: FirstPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
