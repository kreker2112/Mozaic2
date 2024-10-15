<template>
  <div id="app">
    <div class="page-container">
      <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.fullPath" />
      </router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-container {
  width: 100vw;
  height: calc(100% - 4rem);
  position: relative;
}

@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 2045px) and (max-height: 2045px) {
  .page-container {
    height: calc(100% - 9rem);
  }
}

@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 2043px) and (max-height: 2043px) {
  .page-container {
    height: calc(100% - 9rem);
  }
}
@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 1325px) and (max-height: 1325px) {
  .page-container {
    height: calc(100% - 6.5rem);
  }
}
@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 1323px) and (max-height: 1323px) {
  .page-container {
    height: calc(100% - 6.5rem);
  }
}
@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 1325px) and (max-height: 1325px) {
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
@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 965px) and (max-height: 965px) {
  .page-container {
    height: calc(100% - 4.6rem);
  }
}

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 1085px) and (max-height: 1085px) {
  .page-container {
    height: calc(100% - 5.7rem);
  }
}
@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 1083px) and (max-height: 1083px) {
  .page-container {
    height: calc(100% - 5.7rem);
  }
}
@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 965px) and (max-height: 965px) {
  .page-container {
    height: calc(100% - 4.6rem);
  }
}
@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 963px) and (max-height: 963px) {
  .page-container {
    height: calc(100% - 4.6rem);
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
