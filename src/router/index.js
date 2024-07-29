import { createRouter, createWebHashHistory } from "vue-router";
import FirstPage from "../views/FirstPage.vue";
import LasergoodPage from "../views/LasergoodPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import SiteDevelopment from "../views/SiteDevelopment.vue";
import BriefPage from "@/views/BriefPage.vue";

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
  {
    path: "/development/",
    name: "site-development",
    component: SiteDevelopment,
  },
  {
    path: "/brief/",
    name: "brief-page",
    component: BriefPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
