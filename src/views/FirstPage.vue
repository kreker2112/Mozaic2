<template>
  <a href="#" @click.prevent="openMenu">
    <img
      class="bricks-frame"
      src="../images/logos/bricks-frame.png"
      alt="bricks-frame"
    />
  </a>

  <!-- Horizontal Menu for desktop -->
  <div class="desktop-menu" v-show="isDesktop" :class="{ open: isMenuOpen }">
    <div class="desktop-menu__container">
      <span class="desktop-menu__close-btn" @click="closeMenu">&times;</span>
      <div class="desktop-menu__content">
        <div
          class="desktop-menu-item"
          :class="{ active: activeMenu === 'marketing' }"
          @click="selectMenu('marketing')"
        >
          МАРКЕТИНГ<img
            class="desktop-menu-item__arrow"
            src="../images/menu-item__arrow.png"
            alt="menu-item__arrow"
          />
        </div>
        <div
          class="desktop-menu-item"
          :class="{ active: activeMenu === 'analytics' }"
          @click="selectMenu('analytics')"
        >
          АНАЛІТИКА<img
            class="desktop-menu-item__arrow"
            src="../images/menu-item__arrow.png"
            alt="menu-item__arrow"
          />
        </div>
        <div
          class="desktop-menu-item"
          :class="{ active: activeMenu === 'design' }"
          @click="selectMenu('design')"
        >
          ДИЗАЙН<img
            class="desktop-menu-item__arrow"
            src="../images/menu-item__arrow.png"
            alt="menu-item__arrow"
          />
        </div>
        <div
          class="desktop-menu-item"
          :class="{ active: activeMenu === 'promotion' }"
          @click="selectMenu('promotion')"
        >
          ПРОСУВАННЯ<img
            class="desktop-menu-item__arrow"
            src="../images/menu-item__arrow.png"
            alt="menu-item__arrow"
          />
        </div>
        <div
          class="desktop-menu-item"
          :class="{ active: activeMenu === 'about' }"
          @click="selectMenu('about')"
        >
          ЗАПОВНИТИ БРИФ
        </div>
      </div>
      <div class="desktop-menu__contact-section-container">
        <div v-if="!activeMenu" class="desktop-menu__contact-section">
          <h2 class="desktop-menu__contact-section__header">
            ЗВ'ЯЖІТЬСЯ З НАМИ
          </h2>
          <div class="contact-items__container">
            <div class="contact-item-email">1234567@gmail.com</div>
            <div class="contact-item-phone">0 800 123 456 7</div>
            <div class="contact-item-telegram">@khjhjkh</div>
            <div class="contact-item-address">
              м. Дніпро, вул. Виконкомівська, 85
            </div>
            <div class="desktop-menu__socials">
              <a href="#"
                ><img
                  class="desktop-menu__facebook-logo"
                  src="../images/logos/facebook.png"
                  alt="facebook"
              /></a>
              <a href="#"
                ><img
                  class="desktop-menu__instagram-logo"
                  src="../images/logos/instagram.png"
                  alt="instagram"
              /></a>
            </div>
          </div>
          <div class="footer-section">
            <div class="footer-icon">
              <img src="../images/footerframe_white.png" alt="footerframe" />
            </div>
          </div>
        </div>
        <div v-else class="desktop-menu__dynamic-content">
          <template v-if="activeMenu === 'about'">
            <h2 class="desktop-menu__contact-section__header">
              ЗВ'ЯЖІТЬСЯ З НАМИ
            </h2>
            <div class="contact-item-email">1234567@gmail.com</div>
            <div class="contact-item-phone">0 800 123 456 7</div>
            <div class="contact-item-telegram">@khjhjkh</div>
            <div class="contact-item-address">
              м. Дніпро, вул. Виконкомівська, 85
            </div>
            <div class="desktop-menu__socials">
              <a href="#"
                ><img
                  class="desktop-menu__facebook-logo"
                  src="../images/logos/facebook.png"
                  alt="facebook"
              /></a>
              <a href="#"
                ><img
                  class="desktop-menu__instagram-logo"
                  src="../images/logos/instagram.png"
                  alt="instagram"
              /></a>
            </div>
          </template>
          <template v-else>
            <a
              v-for="item in getMenuItems(activeMenu)"
              class="desktop-menu__dynamic-content--item"
              href="#"
              :key="item"
            >
              {{ item }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
  <div class="main-content__container">
    <div class="first-page-content page">
      <div class="first-page">
        <div class="upper-content__container">
          <div class="main-img__container">
            <img class="main-img" src="../images/mosaic2.png" alt="mosaic2" />
          </div>

          <div class="left-section">
            <div class="upper-row">
              <div class="upper-row--image_1"></div>
              <div class="upper-row--image_2"></div>
            </div>
            <div class="middle-row">
              <div class="middle-row--image_1"></div>
              <div class="middle-row--image_2"></div>
              <div class="middle-row--image_3"></div>
              <div class="middle-row--image_4"></div>
              <div class="middle-row--image_5"></div>
            </div>
          </div>
        </div>
        <div class="services-content__container">
          <div class="lower-row">
            <div class="lower-row--image_1">
              <img
                src="../images/packBrandBgrnd.png"
                alt="packBrandBgrnd"
                class="brand-service"
              />
            </div>
            <div class="lower-row--image_2"></div>
            <div class="lower-row--image_3"></div>
            <div class="lower-row--image_4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "SecondPage",
  setup() {
    const isMenuOpen = ref(false);
    const submenuOpen = ref("");
    const activeMenu = ref(null);
    const updateIsVerticalLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Определение для мобильного меню
      return (
        (width === 1024 && height === 1366) ||
        (width === 820 && height === 1180) ||
        (width === 768 && height === 1024) ||
        width <= 767
      );
    };

    const isVerticalLayout = ref(updateIsVerticalLayout());
    const isDesktop = ref(!isVerticalLayout.value);

    const openMenu = () => {
      isMenuOpen.value = true;
    };
    const closeMenu = () => {
      isMenuOpen.value = false;
      activeMenu.value = null;
    };
    const toggleSubmenu = (menu) => {
      submenuOpen.value = submenuOpen.value === menu ? "" : menu;
    };

    const selectMenu = (menu) => {
      activeMenu.value = activeMenu.value === menu ? null : menu;
    };

    const getMenuTitle = (menu) => {
      switch (menu) {
        case "marketing":
          return "МАРКЕТИНГ";
        case "analytics":
          return "АНАЛІТИКА";
        case "design":
          return "ДИЗАЙН";
        case "promotion":
          return "ПРОСУВАННЯ";
        case "fill-brief":
          return "ЗАПОВНИТИ БРИФ";
        default:
          return "";
      }
    };

    const getMenuItems = (menu) => {
      switch (menu) {
        case "marketing":
          return ["КОНЦЕПЦІЇ", "ІДЕЇ", "СТРАТЕГІЇ"];
        case "analytics":
          return ["АУДИТ", "АНАЛІТИКА"];
        case "design":
          return ["ДИЗАЙН", "УПАКОВКА БРЕНДУ", "СТВОРЕННЯ САЙТІВ"];
        case "promotion":
          return ["SEO", "КОНТЕКСТ", "ТАРГЕТ", "SMM"];
        case "fill-brief":
          return "about";
        default:
          return [];
      }
    };

    const handleResize = () => {
      isVerticalLayout.value = updateIsVerticalLayout();
      isDesktop.value = !isVerticalLayout.value;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      openMenu,
      closeMenu,
      toggleSubmenu,
      selectMenu,
      getMenuTitle,
      getMenuItems,
      isDesktop,
      isMenuOpen,
      activeMenu,
    };
  },
};
</script>

<style scoped>
.bricks-frame {
  position: absolute;
  left: 0.7rem;
  top: 0.7rem;
  width: 3rem;
  z-index: 802;
}
.bricks-frame:hover {
  cursor: pointer;
}

/* Styles for desktop menu */
.desktop-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #ff6400;
  z-index: 1000;
  transition: left 0.3s ease-in-out;
  flex-direction: column;
}

.desktop-menu.open {
  left: 0;
}

.desktop-menu__close-btn {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 6rem;
  font-weight: bolder;
  cursor: pointer;
  color: #ffffff;
}

.desktop-menu__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.desktop-menu__header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  color: #ffffff;
}

.desktop-menu__content {
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5%;
  width: 58%;
  text-align: left;
}

.desktop-menu-item {
  font-size: 3rem;
  font-family: "Montserrat";
  font-weight: 200;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
}

.desktop-menu-item__arrow {
  margin-left: 10px;
}

.desktop-menu-item.active {
  border-bottom: 2px solid #ffffff;
}

.desktop-menu__dynamic-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 2rem;
  gap: 2rem;
}

.desktop-menu__dynamic-content--item {
  font-size: 3rem;
  font-family: "Montserrat";
  font-weight: bolder;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem 0;
  text-decoration: none;
}
.desktop-menu-item-about {
  font-size: 3rem;
  font-family: "Montserrat";
  font-weight: bolder;
  cursor: pointer;
  color: #ffffff;
}

.desktop-menu__contact-section-container {
  width: 42%;
  background-color: #002d6e;
  color: #ffffff;
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 20px;
}
.desktop-menu__contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.desktop-menu__contact-section__header {
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  font-family: "Montserrat";
  justify-self: flex-start;
  margin: 0 0 4rem 2rem;
}

.contact-items__container {
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  gap: 2rem;
}

.desktop-menu__socials {
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  padding: 0.5rem 0;
  margin-left: 2rem;
  margin-top: 5%;
}

.desktop-menu__facebook-logo {
  width: 150%;
}

.desktop-menu__instagram-logo {
  width: 150%;
}

.contacts {
  margin-top: 2rem;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.contact-item-email,
.contact-item-phone,
.contact-item-telegram,
.contact-item-address {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  font-family: "Montserrat";
  font-size: 1.2rem;
  margin-left: 2rem;
}

.contact-item-email::before {
  content: url("../images/letter-logo.png");
  margin-right: 1.1rem;
}

.contact-item-phone::before {
  content: url("../images/phone-logo.png");
  margin-right: 1.1rem;
}

.contact-item-telegram::before {
  content: url("../images/telegram_logo.png");
  margin-right: 1.1rem;
}

.contact-item-address::before {
  content: url("../images/path-logo.png");
  margin-right: 1.1rem;
}

.menu__socials {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  padding: 0.5rem 0;
}

.menu__socials img {
  width: 150%;
}

.footer-section {
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 8rem;
  background-color: #002d6e;
  color: #fff;
}

.footer-icon img {
  width: 100%;
}

.footer-text {
  text-align: center;
}

/* Page-content */

.main-img {
  width: 60rem;
  height: 100%;
}

.first-page-content {
  width: 100%;
  height: 100%;
  overflow-x: auto;
}

.first-page {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
}

.left-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.upper-content__container {
  height: 100%;
}

.upper-row {
  display: flex;
  gap: 0;
  height: 40%;
}

.middle-row {
  display: flex;
  gap: 0;
  height: 35%;
}

.services-content__container {
  display: flex;
  gap: 0;
  height: 100%;
}

.lower-row {
  display: flex;
  gap: 0;
  height: 100%;
}

.upper-row--image_1 {
  height: 100%;
  width: 50%;
  background-color: #d9d9d9;
}

.upper-row--image_2 {
  height: 100%;
  width: 50%;
  background-color: #f3f3f3;
}

.middle-row--image_1 {
  height: 100%;
  width: 20%;
  background-color: #f3f3f3;
}
.middle-row--image_2 {
  height: 100%;
  width: 20%;
  background-color: #d9d9d9;
}
.middle-row--image_3 {
  height: 100%;
  width: 20%;
  background-color: #f3f3f3;
}
.middle-row--image_4 {
  height: 100%;
  width: 20%;
  background-color: #d9d9d9;
}
.middle-row--image_5 {
  height: 100%;
  width: 20%;
  background-color: #f3f3f3;
}

.lower-row--image_1 {
  height: 100%;
  width: 25%;
  background-color: #d9d9d9;
}
.lower-row--image_2 {
  height: 100%;
  width: 25%;
  background-color: #f3f3f3;
}
.lower-row--image_3 {
  height: 100%;
  width: 25%;
  background-color: #d9d9d9;
}
.lower-row--image_4 {
  height: 100%;
  width: 25%;
  background-color: #f3f3f3;
}

.left-section,
.form-component {
  flex: 1;
}
@media (max-width: 767px) {
  .second-page {
    width: 1710px;
    height: 932px;
    overflow-x: auto;
  }
}
</style>
