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
  height: calc(100% - 6rem); /* Adjust height considering the footer */
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

@media (max-width: 767px) {
  .page-container {
    width: 100% !important;
    height: 932px !important;
    overflow: hidden !important;
  }
}
</style>
