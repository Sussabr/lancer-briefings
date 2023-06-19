<template>
  <Header :header="this.header" />
  <v-container>
    <div class="content-container">
      <v-row>
        <v-col cols="12" md="6">
          <section class="section-container" id="missions" style="width:435px; height:714px;">
            <!-- Missions section content -->
          </section>
        </v-col>
        <v-col cols="12" md="6">
          <section class="section-container" id="events" style="width:435px; height:714px;">
            <!-- Events section content -->
          </section>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <section class="section-container" id="pilots" style="padding:0; margin: 50px; box-sizing: border-box;">
            <!-- Pilots section content -->
          </section>
        </v-col>
      </v-row>
    </div>
    <svg style="visibility: hidden; position: relative;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <!-- SVG content -->
    </svg>
    <audio autoplay>
      <source src="/startup.ogg" type="audio/ogg" />
    </audio>
  </v-container>
  <Footer />
</template>
<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import Mission from './components/Mission.vue';
import Pilot from './components/Pilot.vue';
import Markdown from 'vue3-markdown-it';

export default {
  components: {
    Header,
    Footer,
    Mission,
    Pilot,
    Markdown
  },

  data() {
    return {
      "mission_slug": "001",
      "current_md": "",
      "events": "",
      "missions": [
        {
  "slug": "001",
          "name": "TBA",
          "status": "start"
        }, 
      ],
      "pilots": [
        {
         "callsign": "Titano",
          "alias": "Zahid Raja",
          "code": "ede41c32-7cf2424f-99d8-d249da109a26//NDL-C-BRASS-WILD",
          "corpro": "GMS",
          "frame": "Everest",
          "mech": "Allos"
        },
          {
         "callsign": "Ordis",
          "alias": "Ordan Karris",
          "code": "91320fec-2acd-4062-bb34-c8e11f6eb851//NDL-C-EARNEST-HUB",
          "corpro": "SSC",
          "frame": "Atlas",
          "mech": "Umbra"
        },
      ],
      "header": {
        "planet": "Hercynia",
        "year": "5014u",
        "system": "Ardennes-3",
        "gate": "Atlas-Quanoukrim",
        "ring": "Atlas",
        "headerTitle": "DEPARTAMENTO NAVAL DA UNIÃO",
        "headerSubtitle": " ",
        "subheaderTitle": "Time de resposta imediata",
        "subheaderSubtitle": "[sem nome]",
      },
      "options":{
        "eventsMarkdownPerMission": true
      }
    }
  },

  created() {
    this.loadMissionMarkdown()
    this.loadEventsMarkdown()
  },

  computed: {

  },

  methods: {
    selectMission(mission) {
      this.mission_slug = mission.slug;
      this.loadMissionMarkdown()
      if(this.options.eventsMarkdownPerMission){
        this.loadEventsMarkdown();
      }
    },
    loadMissionMarkdown() {
      let self = this;
      let md = `/missions/${self.mission_slug}.md`
      var client = new XMLHttpRequest();
      client.open('GET', md);
      client.onreadystatechange = function () {
        self.current_md = client.responseText;
      }
      client.send();
    },
    loadEventsMarkdown() {
      let self = this;
      let md = "";

      if(self.options.eventsMarkdownPerMission){
        md = `/events/${self.mission_slug}.md`
      }
      else {
        md = "/events.md"
      }

      var client = new XMLHttpRequest();
      client.open('GET', md);
      client.onreadystatechange = function () {
        self.events = client.responseText;
      }
      client.send();
    }
  }
}
</script>

<style lang="scss">
#app {
  overflow: column;
}

@media (max-width: 767px) {
  #app {
    /* Apply styles for mobile screens */
  }
}
</style>

