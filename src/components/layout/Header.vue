<style lang="scss">
  @media (max-width: 767px) {
#app {
  position: relative;
  height: 100vh;
  overflow: auto;
  z-index: 9999;
}

.clipped-x-large-forward {
  position: fixed;
  top: 0;
  left: 0;
  width: 120%;
  height: 14%;
   display: flex;
  flex-direction: column; 
  z-index: 9999;
}
  clipped-x-large-forward {
    clip-path: polygon(100% 0,100% calc(100% - 96px),calc(100% - 96px) 100%,0 100%,0 0);
    -webkit-clip-path: polygon(100% 0,99% calc(100% - 96px),calc(101% - 91px) 100%,0 100%,0 0);
  }
.title clipped-x-large-forward {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
 
  z-index: 9999;
  }
  
  .title {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  flex-direction: row;
    column-gap: 1em;
  z-index: 9999;
  }
  .location-info {
  position: fixed;
  top: 56px; /* Adjust the top position as needed */
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999; /* Adjust the z-index value as needed */
  }
  .location-row h4 {
    margin: 0;
    line-height: 0.5em;
    font-family: "Raleway",sans-serif;
    font-size: 6px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #000000de
}

.location-row .subtitle {
    font-size: 15px;
    margin: 0%;
    align-self: center;
    font-family: "Big Shoulders Display",cursive;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: #000000de
}
  .rhombus {
    z-index: -1;
    transform: translate(-5000%) skew(-.785398rad);
    animation: .75s ease-out 1 slideInFromLeftRhombus;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    background-color: #991e2a;
    border-color: #991e2a;
    width: 0px;
    height: 100%;
    display: inline-flex;
    margin-left: 308px;
    margin-top: -23px;
}
  }
</style>
<template>
  <header class="clipped-x-large-forward">
    <div class="title clipped-x-large-forward">
      <img class="logo" src="/icons/company-icon.svg" />
      <div class="title-container">
        <div class="title-row" id="title-first-line">
          <span id="title-header">{{ header.headerTitle }}</span>
          <span id="title-subheader">{{ header.headerSubtitle }}</span>
        </div>
        <div class="title-row">
          <span id="subtitle-header">{{ header.subheaderTitle }}</span>
          <span id="subtitle-subheader">// {{ header.subheaderSubtitle }}</span>
        </div>
      </div>
    </div>
    <div class="rhombus">&nbsp;</div>
    <video autoplay muted loop width="90px" height="90px">
      <source src="/planet.webm" type="video/webm" />
    </video>
    <div class="location-info">
      <div class="location-row" id="planet-year">
        <div id="planet">
          <h4>Informação de Implantação</h4>
          <span class="subtitle">{{ header.planet }}</span>
        </div>
        <div id="year">
          <h4>Ano</h4>
          <span class="subtitle">{{ header.year }}</span>
        </div>
      </div>
      <div class="location-row" id="system-gate-ring">
        <div id="system">
          <h4>Sistema</h4>
          <span class="subtitle">{{ header.system }}</span>
        </div>
        <div id="gate">
          <h4>Gate</h4>
          <span class="subtitle">{{ header.gate }}</span>
        </div>
        <div id="ring">
          <h4>Circulo</h4>
          <span class="subtitle">{{ header.ring }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>


export default {
  components: {
  },
  props: {
    header: {
      type: Object,
      required: true,
    }
  }
}
</script>
