<template>
	<div class="event-modal">
		<div class="event-header-container">
			<div class="section-header clipped-medium-backward-bio">
				<img src="/icons/events.svg" />
				<h1>REGISTRO DE EVENTOS</h1>
			</div>
			<div class="rhombus-back">&nbsp;</div>
		</div>
		<div class="event">
			<div class="name">
				<h1>{{ event.location }} // {{ event.time }}</h1>
				<h2>{{ event.title }}</h2>
			</div>
			<vue-markdown-it :source="event.content" class="markdown" :options="{ html: true }" />
		</div>
	</div>
</template>

<script>
import { md } from "@/markdown.js";

export default {
  name: "EventModal",
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    rendered() {
      return md.render(this.event.content || "");
    }
  }
};
</script>
