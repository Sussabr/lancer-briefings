import { createApp } from "vue";
import App from "./App.vue";

import Oruga from "@oruga-ui/oruga-next";
import "@oruga-ui/oruga-next/dist/oruga.min.css";

import "@mdi/font/css/materialdesignicons.css";

import "@/assets/styles/_reset.css";
import "@/assets/styles/_base.css";
import "@/assets/styles/_glyphs.css";
import "@/assets/styles/_animations.css";
import "@/assets/responsive.css";
import router from "./router";

// IMPORTANTE: importar a lib
import MarkdownIt from "markdown-it";

// cria instância configurada
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

// app
const app = createApp(App);

// injeta globalmente
app.config.globalProperties.$md = md;

app.use(router).use(Oruga).mount("#app");

