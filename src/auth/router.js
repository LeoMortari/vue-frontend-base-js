import { createWebHistory, createRouter } from "vue-router";

import Videos from "../routes/videos";

export const routes = [
  {
    path: "/videos",
    component: Videos,
    title: "Vídeos",
    meta: { requiresAuth: true },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});
