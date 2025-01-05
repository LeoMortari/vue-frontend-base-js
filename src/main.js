import { createApp } from "vue";
import { Quasar } from "quasar";

import quasarLang from "quasar/lang/pt-BR";

import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import "@quasar/extras/mdi-v7/mdi-v7.css";

import "quasar/src/css/index.sass";

import App from "./App.vue";

const app = createApp(App);

app.use(Quasar, {
  config: {
    dark: "auto",
  },
  plugins: {},
  lang: quasarLang,
});

app.mount("#app");
