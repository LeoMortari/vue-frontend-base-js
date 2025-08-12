<template>
  <q-layout view="lHh lpr lff">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <Button dense flat round icon="mdi-menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> {{ currentRouteTitle }} </q-toolbar-title>

        <Toggle v-model="darkMode" @toggle="toggleDarkMode" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div class="row q-pa-md items-center">
        <div class="col q-ml-xs title">
          <span>Clipper AI</span>
        </div>
      </div>

      <q-separator />

      <q-list>
        <q-item v-for="route in routes" clickable v-ripple :to="route.path">
          <q-item-section>{{ route.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { Dark } from "quasar";

import Button from "@components/Button";
import Toggle from "@components/Toggle";

import { routes } from "./auth/router";

export default {
  components: {
    Button,
    Toggle,
  },
  data() {
    return {
      leftDrawerOpen: false,
      darkMode: Dark.isActive,
      routes,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    toggleDarkMode() {
      Dark.toggle();
    },
  },
  computed: {
    currentRouteTitle() {
      const route = routes.find((route) => route.path === this.$route.path);

      return route?.title || "N/A";
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  color: $primary;
}
</style>
