import { createRouter, createWebHashHistory } from "vue-router";
import FirstPage from "../views/FirstPage.vue";
import LasergoodPage from "../views/LasergoodPage.vue";

const routes = [
  {
    path: "/",
    name: "first-page",
    component: FirstPage,
  },
  {
    path: "/services/lasergood",
    name: "lasergood-page",
    component: LasergoodPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
