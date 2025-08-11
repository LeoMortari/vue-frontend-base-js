import { createMemoryHistory, createRouter } from "vue-router";

import Users from "../routes/users";

export const routes = [
  {
    path: "/users",
    component: Users,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
