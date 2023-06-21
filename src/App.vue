<template>
  <div id="app">
    <Header :header="header" />
    <v-container>
      <div class="content-container">
            <section class="section-container" id="missions" :style="missionSectionStyle">
              <div class="section-header clipped-medium-backward">
                <img src="/icons/mission-icon.svg" />
                <h1>Missões</h1>
              </div>
              <div class="section-content-container">
                <h3>Objetivo Atual</h3>
                <Markdown :source="current_md" class="markdown" />
                <h3>Lista de Missões</h3>
                <div class="mission-list-container">
                  <Mission
                    v-for="item in this.missions"
                    :key="item.slug"
                    :mission="item"
                    :selected="this.mission_slug"
                    @click="selectMission(item)"
                  />
                </div>
              </div>
            </section>
     
            <section class="section-container" id="events" :style="eventsSectionStyle">
              <div class="section-header clipped-medium-backward">
                <img src="/icons/events-icon.svg" />
                <h1>Eventos da missão</h1>
              </div>
              <div class="section-content-container">
                <Markdown :source="events" class="markdown" />
              </div>
            </section>
         
            <section class="section-container" id="pilots" :style="pilotsSectionStyle">
              <div style="height:52px; overflow:hidden;">
                <div class="section-header clipped-medium-backward-pilot">
                  <img src="/icons/pilot-icon.svg" />
                  <h1>Pilotos</h1>
                </div>
                <div class="rhombus-back">&nbsp;</div>
              </div>
              <div class="section-content-container">
                <div class="pilot-list-container">
                  <Pilot v-for="item in this.pilots" :key="item.slug" :pilot="item" />
                </div>
              </div>
            </section>
      </div>
      <svg style="visibility: hidden; position: relative;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -5"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <audio autoplay>
        <source src="/startup.ogg" type="audio/ogg" />
      </audio>
    </v-container>
    <Footer/>
  </div>
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
      "mission_slug": "000",
      "current_md": "",
      "events": "",
      "missions": [
        {
  "slug": "001",
          "name": "Bug Hunt",
          "status": "start"
        }, 
        {
        "slug": "002",
          "name": "Vigilant Gaze",
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
  position: relative;
   width: 100vw; /* Use viewport width */
  height: 100vh; /* Use viewport height */
  overflow: auto;
  display: flex;
  flex-direction: column;
 }
  .header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Adjust the z-index value as needed */
}
.container {
  display: flex;
   flex-wrap: wrap;
   flex-basis: 50%;
  justify-content: center;
}

.section {
  flex: 1 1 100%;
  box-sizing: border-box;
  padding: 20px;
}

  .col-mobile {
  width: 100%;
}

  @media (max-width: 767px) {
  /* Styles for mobile devices */

 #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    position: relative;
    height: 100vh;
    overflow-x: auto;
  }

  .content-container {
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    max-width: 1000px; /* Set a maximum width for the content container */
    width: 100%; /* Set the initial width to 100% */
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
    flex: 1 1 auto;
  }

  #missions,
  #events,
  #pilots {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  .section {
    flex: 1 1 100%;
    box-sizing: border-box;
    padding: 20px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 10px;
  }

  .section-header img {
    max-width: 50px;
    margin-right: 10px;
  }

 .section-container {
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 16px;
    padding-right: 16px;
  }

  .section-content-container {
    padding: 10px;
  }

  .pilot-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .markdown {
    /* Styles for Markdown content */
  }

  .missions {
    flex-basis: 100%;
    order: 1;
  }

  .events {
    flex-basis: 100%;
    order: 2;
  }

  .pilots {
    flex-basis: 100%;
    order: 3;
  }
  .pilot-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 9999;
}

.pilot-modal.portrait .pilot {
  max-width: 40vw;
  max-height: 20vh;
}
  .portrait {
  max-width: 100%;
  max-height: 100%;
  }
  }
</style>
