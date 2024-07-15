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

@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 2045px) and (max-height: 2045px) {
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
@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 1325px) and (max-height: 1325px) {
  .footer {
    height: 6.5rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 4rem;
  }
  .center a {
    font-size: 150%;
  }
  .left {
    margin-left: 1rem;
    font-size: 120%;
  }
  .facebook_image {
    width: 1rem;
  }
  .instagram_image {
    width: 2.2rem;
  }
  .right a {
    font-size: 2.2rem;
  }
}
@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 1323px) and (max-height: 1323px) {
  .footer {
    height: 6.5rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 4rem;
  }
  .center a {
    font-size: 150%;
  }
  .left {
    margin-left: 1rem;
    font-size: 120%;
  }
  .facebook_image {
    width: 1rem;
  }
  .instagram_image {
    width: 2.2rem;
  }
  .right a {
    font-size: 2.2rem;
  }
}
@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 1325px) and (max-height: 1325px) {
  .footer {
    height: 6.5rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 4rem;
  }
  .center a {
    font-size: 150%;
  }
  .left {
    margin-left: 1rem;
    font-size: 120%;
  }
  .facebook_image {
    width: 1rem;
  }
  .instagram_image {
    width: 2.2rem;
  }
  .right a {
    font-size: 2.2rem;
  }
}
@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 1323px) and (max-height: 1323px) {
  .footer {
    height: 6.5rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 4rem;
  }
  .center a {
    font-size: 150%;
  }
  .left {
    margin-left: 1rem;
    font-size: 120%;
  }
  .facebook_image {
    width: 1rem;
  }
  .instagram_image {
    width: 2.2rem;
  }
  .right a {
    font-size: 2.2rem;
  }
}

@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 965px) and (max-height: 965px) {
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

@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 963px) and (max-height: 963px) {
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

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 1085px) and (max-height: 1085px) {
  .footer {
    height: 5.7rem;
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

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 1083px) and (max-height: 1083px) {
  .footer {
    height: 5.7rem;
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

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 965px) and (max-height: 965px) {
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

@media only screen and (min-width: 1600px) and (max-width: 1600px) and (min-height: 785px) and (max-height: 785px) {
  .footer {
    height: 4.1rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 2.6rem;
  }
  .center a {
    font-size: 85%;
  }
  .left {
    margin-left: 1rem;
    font-size: 80%;
  }
  .facebook_image {
    width: 0.6rem;
  }
  .instagram_image {
    width: 1.5rem;
  }
  .right a {
    font-size: 1.5rem;
  }
}

@media only screen and (min-width: 1600px) and (max-width: 1600px) and (min-height: 783px) and (max-height: 783px) {
  .footer {
    height: 4.1rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 2.6rem;
  }
  .center a {
    font-size: 85%;
  }
  .left {
    margin-left: 1rem;
    font-size: 80%;
  }
  .facebook_image {
    width: 0.6rem;
  }
  .instagram_image {
    width: 1.5rem;
  }
  .right a {
    font-size: 1.5rem;
  }
}
@media only screen and (min-width: 1440px) and (max-width: 1440px) and (min-height: 785px) and (max-height: 785px) {
  .footer {
    height: 3.2rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 1.8rem;
  }
  .center a {
    font-size: 70%;
  }
  .left {
    margin-left: 0.6rem;
    font-size: 60%;
  }
  .facebook_image {
    width: 0.6rem;
  }
  .instagram_image {
    width: 1.2rem;
  }
  .right a {
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 1440px) and (max-width: 1440px) and (min-height: 783px) and (max-height: 783px) {
  .footer {
    height: 3.2rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 1.8rem;
  }
  .center a {
    font-size: 70%;
  }
  .left {
    margin-left: 0.6rem;
    font-size: 60%;
  }
  .facebook_image {
    width: 0.6rem;
  }
  .instagram_image {
    width: 1.2rem;
  }
  .right a {
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 1400px) and (max-width: 1400px) and (min-height: 935px) and (max-height: 935px) {
  .footer {
    height: 3.5rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 2.2rem;
  }
  .center a {
    font-size: 80%;
  }
  .left {
    margin-left: 0.8rem;
    font-size: 70%;
  }
  .facebook_image {
    width: 0.6rem;
  }
  .instagram_image {
    width: 1.2rem;
  }
  .right a {
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 1400px) and (max-width: 1400px) and (min-height: 933px) and (max-height: 933px) {
  .footer {
    height: 3.5rem;
  }
  .footer-frame {
    margin-left: 0.5rem;
  }
  .footer-frame img {
    width: 2.2rem;
  }
  .center a {
    font-size: 80%;
  }
  .left {
    margin-left: 0.8rem;
    font-size: 70%;
  }
  .facebook_image {
    width: 0.6rem;
  }
  .instagram_image {
    width: 1.2rem;
  }
  .right a {
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 1366px) and (max-width: 1366px) and (min-height: 653px) and (max-height: 653px) {
  .footer {
    height: 2.5rem;
  }
  .footer-frame {
    margin-left: 0;
  }
  .footer-frame img {
    width: 1.5rem;
  }
  .center a {
    font-size: 60%;
  }
  .left {
    margin-left: 0.6rem;
    font-size: 50%;
  }
  .facebook_image {
    width: 0.5rem;
  }
  .instagram_image {
    width: 1rem;
  }
  .right a {
    font-size: 1rem;
  }
}
@media only screen and (min-width: 1366px) and (max-width: 1366px) and (min-height: 651px) and (max-height: 651px) {
  .footer {
    height: 2.5rem;
  }
  .footer-frame {
    margin-left: 0;
  }
  .footer-frame img {
    width: 1.5rem;
  }
  .center a {
    font-size: 60%;
  }
  .left {
    margin-left: 0.6rem;
    font-size: 50%;
  }
  .facebook_image {
    width: 0.5rem;
  }
  .instagram_image {
    width: 1rem;
  }
  .right a {
    font-size: 1rem;
  }
}
</style>
