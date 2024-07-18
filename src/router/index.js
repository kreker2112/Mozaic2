import { createRouter, createWebHashHistory } from "vue-router";
import FirstPage from "../views/FirstPage.vue";
import LasergoodPage from "../views/LasergoodPage.vue";
import ServicesPage from "../views/ServicesPage.vue";

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
  {
    path: "/services/",
    name: "services-page",
    component: ServicesPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
