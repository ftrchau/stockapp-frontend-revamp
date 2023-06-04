import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import DayTrade from "./pages/DayTrade.vue";
import LongTermTrade from "./pages/LongTermTrade.vue";

const router = createRouter({
  history: createWebHistory("/stockapp-frontend-revamp/"), // use the browser history mechanism
  routes: [
    { path: "/", component: HomePage },
    { path: "/day-trade", component: DayTrade },
    { path: "/long-term-trade", component: LongTermTrade },
  ],
});

export default router;
