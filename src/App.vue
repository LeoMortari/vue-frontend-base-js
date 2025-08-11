<template>
  <q-layout view="lHh lpr lff">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <Button dense flat round icon="mdi-menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Title </q-toolbar-title>

        <Toggle v-model="darkMode" @toggle="toggleDarkMode" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div>
        <span>TITLE</span>
      </div>

      <q-list>
        <q-item clickable v-ripple to="/users">
          <q-item-section>Users</q-item-section>
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

import Button from "@/components/Button";
import Toggle from "@/components/Toggle";

export default {
  components: {
    Button,
    Toggle,
  },
  data() {
    return {
      leftDrawerOpen: false,
      darkMode: Dark.isActive,
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
};
</script>
