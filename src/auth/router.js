import { createWebHistory, createRouter } from "vue-router";

import Users from "../routes/users";
import Videos from "../routes/videos";

export const routes = [
  {
    path: "/users",
    component: Users,
    title: "Usuários",
    meta: { requiresAuth: true },
  },
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
