<template>
  <div class="second-page__container">
    <HeaderComponent />
    <div class="lasergood__rebrending">
      <!-- <img src="../images/hero-image.png" alt="hero-image" /> -->
    </div>
    <SecondFooter />
  </div>
</template>

<script>
import SecondFooter from "../components/SecondFooter";
import HeaderComponent from "../components/HeaderComponent";

export default {
  name: "ServicesPage",
  components: {
    SecondFooter,
    HeaderComponent,
  },
};
</script>

<style scoped>
.second-page__container {
  overflow-y: scroll;
  width: 100vw;
  /* height: 5598px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lasergood__rebrending {
  width: 100%;
  background-image: url("../images/hero-image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
