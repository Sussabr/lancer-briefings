<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <o-sidebar
        id="sidebar"
        position="static"
        :animate="animate"
        mobile="reduced"
        :open="true"
        :expand-on-hover="false"
        :reduce="isMobile"
      >
        <router-link class="clipped-bottom-right" to="/status">
          <img src="/icons/orbital.svg" />
          <span>Status</span>
        </router-link>

        <router-link class="clipped-bottom-right" to="/pilots">
          <img src="/icons/pilot.svg" />
          <span>Pilotos</span>
        </router-link>

        <router-link class="clipped-bottom-right" to="/events">
          <img src="/icons/events.svg" />
          <span>Registros</span>
        </router-link>
      </o-sidebar>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    animate: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isMobile: window.innerWidth <= 768,
    };
  },
  mounted() {
    this.onResize = () => {
      this.isMobile = window.innerWidth <= 768;
    };
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
