<!-- FooterComponent.vue -->
<template>
  <footer class="footer">
    <div class="footer-frame">
      <a href="#"><img src="../images/footerframe.png" alt="footerframe" /></a>
    </div>
    <div class="left">
      ВИРІШУЄМО <br />
      ПРОБЛЕМУ В 1 КЛІК
    </div>
    <div class="center">
      <a href="#">МАРКЕТИНГ</a>
      <a href="#">АНАЛІТИКА</a>
      <a href="#">ДИЗАЙН</a>
      <a href="#">ПРОСУВАННЯ</a>
    </div>
    <div class="right">
      <a href="#"
        ><img
          class="facebook_image"
          src="../images/logos/facebook.png"
          alt="facebook"
      /></a>
      <a href="#"
        ><img
          class="instagram_image"
          src="../images/logos/instagram.png"
          alt="instagram"
      /></a>
      <a href="tel:08001234567">0 800 123 45 67</a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #002d6e;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1%;
  box-sizing: border-box;
  height: 4.4rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.footer-frame {
  margin-left: 1%;
}

.footer-frame img {
  width: 70%;
}

.left {
  margin-left: 0.1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: "Montserrat";
  font-size: 100%;
  font-weight: bold;
}

.center {
  position: relative;
  width: 30%;
}

.center a {
  margin: 0 2%;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  font-family: "Montserrat";
  font-size: 100%;
}

.right {
  margin-right: 2%;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6%;
}

.right a {
  color: #ffffff;
  text-decoration: none;
  font-family: "Montserrat";
  font-weight: 100;
  font-size: 180%;
  display: flex;
  align-items: center;
}

@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 2043px) and (max-height: 2043px) {
  .footer {
    height: 9rem;
  }
  .footer-frame {
    margin-left: 1rem;
  }
  .footer-frame img {
    width: 5rem;
  }
  .center a {
    font-size: 180%;
  }
  .left {
    margin-left: 1rem;
    font-size: 150%;
  }
  .facebook_image {
    width: 1.2rem;
  }
  .instagram_image {
    width: 2.5rem;
  }
  .right a {
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 1083px) and (max-height: 1083px) {
  .footer {
    height: 5.1rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 3rem;
  }
  .center a {
    font-size: 120%;
  }
  .left {
    margin-left: 1rem;
    font-size: 100%;
  }
  .facebook_image {
    width: 0.9rem;
  }
  .instagram_image {
    width: 2rem;
  }
  .right a {
    font-size: 2rem;
  }
}

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 963px) and (max-height: 963px) {
  .footer {
    height: 4.6rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 2.6rem;
  }
  .center a {
    font-size: 100%;
  }
  .left {
    margin-left: 1rem;
    font-size: 80%;
  }
  .facebook_image {
    width: 0.7rem;
  }
  .instagram_image {
    width: 1.6rem;
  }
  .right a {
    font-size: 1.7rem;
  }
}

/* @media (max-width: 2560px) {
  .center a {
    font-size: 90%;
  }
}

@media (max-width: 2304px) {
  .center a {
    font-size: 120%;
  }
}

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 912px) and (max-height: 912px) {
  .center a {
    font-size: 120%;
  }
}

@media (max-width: 1400px) {
  .center a {
    font-size: 80%;
  }
}

@media (max-width: 1280px) {
  .center a {
    font-size: 80%;
  }
}
@media only screen and (min-width: 1180px) and (max-width: 1180px) and (min-height: 820px) and (max-height: 820px) {
  .center a {
    font-size: 70%;
  }
  .right a {
    font-size: 160%;
  }
}
@media (max-width: 1024px) {
  .center a {
    font-size: 65%;
  }
  .right a {
    font-size: 150%;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-height: 1366px) {
  .footer {
    display: none;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1024px) and (min-height: 768px) and (max-height: 768px) {
  .center a {
    font-size: 60%;
  }
  .right a {
    font-size: 140%;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1024px) and (min-height: 600px) and (max-height: 600px) {
  .right a {
    font-size: 120%;
  }
}
@media only screen and (min-width: 820px) and (max-width: 820px) and (min-height: 1180px) and (max-height: 1180px) {
  .footer {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 768px) and (max-height: 1024px) and (min-height: 1024px) {
  .footer {
    display: none;
  }
}
@media (max-width: 767px) {
  .footer {
    display: none;
  }
} */
</style>
