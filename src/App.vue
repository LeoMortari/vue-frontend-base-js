<template>
  <q-layout view="lHh lpr lff">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Title </q-toolbar-title>

        <q-toggle
          v-model="darkMode"
          @update:model-value="toggleDarkMode"
          color="secondary"
        />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { Dark } from "quasar";

export default {
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
