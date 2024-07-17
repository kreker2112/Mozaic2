<template>
  <div class="second-page__container">
    <HeaderComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";

export default {
  name: "ServicesPage",
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped>
.second-page__container {
  overflow-y: scroll !important;
  width: 100vw;
}
</style>
