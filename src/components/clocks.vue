@@ -24,7 +24,7 @@
      </div>
    </div>
    <div
      v-if="$props.clock.type == 'Pilot'"
      v-if="$props.clock.type != 'Story'"
      :class="$props.clock.type.toLowerCase()"
    >
      <div class="clock-body">
@@ -36,10 +36,10 @@
          />
        </div>
        <div class="clock-header">
          <h2 class="clock-subtitle">{{ $props.clock.type }} // [CALLSIGN]</h2>
          <h2 class="clock-subtitle">{{ $props.clock.type }}</h2>
          <h1 class="clock-title">{{ $props.clock.name }}</h1>
        </div>
        <o-icon pack="mdi" class="icon" icon="chevron-up" size="large" />
        <o-icon pack="mdi" class="icon transition" ref="arrow" icon="chevron-up" size="large"  v-bind:style="{transform: `rotate(${deg}deg)`}"/>
      </div>
      <div v-if="isActive" class="clock-summary">
        {{ clock.description }}
@@ -62,7 +62,7 @@ Chart.defaults.animation = {
};
Chart.defaults.plugins.filler;
import { computed, defineComponent, ref, reactive } from "vue";
import { computed, defineComponent, ref } from "vue";
import { DoughnutChart } from "vue-chart-3";
export default defineComponent({
@@ -99,10 +99,15 @@ export default defineComponent({
        },
      ],
    }));
    const deg = ref(0);
    const isActive = ref(false);
    function toggleActive() {
      if (this.deg > 0){
        this.deg = 0;
      } else {
        this.deg = 180
      }
      isActive.value = !isActive.value;
    }
@@ -111,4 +116,9 @@ export default defineComponent({
});
</script>

<style type="scss"></style>
<style type="scss">
.transition {
  transition: transform 0.1s ease-in-out;
}
</style>
