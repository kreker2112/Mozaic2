<template>
  <div id="app">
    <div class="page-container">
      <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.fullPath" />
      </router-view>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    FooterComponent,
  },
};
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-container {
  width: 100vw;
  height: calc(100% - 4rem); /* Adjust height considering the footer */
  overflow: hidden;
  position: relative;
}

.page {
  height: 100%;
  width: 100vw;
  position: absolute;
  transition: all 1s;
  overflow: hidden;
}

@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 2043px) and (max-height: 2043px) {
  .page-container {
    height: calc(100% - 9rem);
  }
}
@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 1323px) and (max-height: 1323px) {
  .page-container {
    height: calc(100% - 6.5rem);
  }
}
@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 1323px) and (max-height: 1323px) {
  .page-container {
    height: calc(100% - 6.5rem);
  }
}
@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 963px) and (max-height: 963px) {
  .page-container {
    height: calc(100% - 4.6rem);
  }
}
@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 1083px) and (max-height: 1083px) {
  .page-container {
    height: calc(100% - 5.7rem);
  }
}
@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 963px) and (max-height: 963px) {
  .page-container {
    height: calc(100% - 4.6rem);
  }
}
@media only screen and (min-width: 1600px) and (max-width: 1600px) and (min-height: 783px) and (max-height: 783px) {
  .page-container {
    height: calc(100% - 4.1rem);
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1440px) and (min-height: 783px) and (max-height: 783px) {
  .page-container {
    height: calc(100% - 3.2rem);
  }
}
@media only screen and (min-width: 1400px) and (max-width: 1400px) and (min-height: 933px) and (max-height: 933px) {
  .page-container {
    height: calc(100% - 3.5rem);
  }
}
@media only screen and (min-width: 1366px) and (max-width: 1366px) and (min-height: 651px) and (max-height: 651px) {
  .page-container {
    height: calc(100% - 2.5rem);
  }
}

@media (max-width: 767px) {
  .page-container {
    width: 100% !important;
    height: 932px !important;
    overflow: hidden !important;
  }
}
</style>
