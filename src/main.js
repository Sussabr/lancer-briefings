import { createApp } from "vue";
import App from "./App.vue";

import Oruga from "@oruga-ui/oruga-next";
import "@oruga-ui/oruga-next/dist/oruga.min.css";

import "@mdi/font/css/materialdesignicons.css";

import "@/assets/styles/_reset.css";
import "@/assets/styles/_base.css";
import "@/assets/styles/_glyphs.css";
import "@/assets/styles/_animations.css";

import router from "./router";

import MarkdownIt from "markdown-it";
import VueMarkdownIt from "@f3ve/vue-markdown-it";

const md = new MarkdownIt({
  html: true,        /
  linkify: true,
  typographer: true,
});

createApp(App)
  .use(router)
  .use(Oruga)
 
  .use(VueMarkdownIt, { markdownIt: md })

  .mount("#app");
