<template>
  <a href="#" @click.prevent="openMenu">
    <img
      class="bricks-frame"
      src="../images/logos/bricks-frame.png"
      alt="bricks-frame"
    />
  </a>

  <div class="desktop-menu" v-show="isDesktop" :class="{ open: isMenuOpen }">
    <div class="desktop-menu__container">
      <span class="desktop-menu__close-btn" @click="closeMenu">&times;</span>
      <div class="desktop-menu__content">
        <div
          class="desktop-menu-item"
          :class="{ active: activeMenu === 'marketing' }"
          @click="selectMenu('marketing')"
        >
          МАРКЕТИНГ
          <img
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
          АНАЛІТИКА
          <img
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
          ДИЗАЙН
          <img
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
          ПРОСУВАННЯ
          <img
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
  <div class="main-content__container" @wheel="onScroll">
    <div class="first-page-content">
      <div class="first-page">
        <div class="upper-content__container">
          <div class="main-img"></div>

          <img
            src="../images/mosaicpart.png"
            alt="mosaicpart"
            class="mosaic-part"
          />

          <div class="callback__container">
            <input
              class="callback-number"
              type="text"
              placeholder="номер телефону"
            />
            <button class="callback-button">ЗАМОВИТИ ДЗВІНОК</button>
          </div>
        </div>
        <img src="../images/cases.png" alt="cases" class="cases" />
        <img src="../images/services.png" alt="services" class="services" />
        <div class="left-section">
          <div class="left-section__upper">
            <div class="upper-row">
              <img
                @click.prevent="navigateToSecondPage"
                src="../images/lasergood.png"
                alt="lasergood"
                class="lasergood"
              />

              <img
                src="../images/smartcover.png"
                alt="smartcover"
                class="smartcover"
              />

              <img
                src="../images/uniclinic.png"
                alt="uniclinic"
                class="uniclinic"
              />

              <img
                @click.prevent="navigateToSecondPage"
                src="../images/lasergood.png"
                alt="lasergood"
                class="lasergood"
              />

              <img
                src="../images/smartcover.png"
                alt="smartcover"
                class="smartcover"
              />

              <img
                src="../images/uniclinic.png"
                alt="uniclinic"
                class="uniclinic"
              />

              <img
                @click.prevent="navigateToSecondPage"
                src="../images/lasergood.png"
                alt="lasergood"
                class="lasergood"
              />

              <img
                src="../images/smartcover.png"
                alt="smartcover"
                class="smartcover"
              />

              <img
                src="../images/uniclinic.png"
                alt="uniclinic"
                class="uniclinic"
              />
            </div>
          </div>
          <div class="left-section__middle">
            <div class="middle-row">
              <img
                src="../images/services-marketing.png"
                alt="marketing"
                class="marketing"
              />
              <img
                src="../images/analytics.png"
                alt="analytics"
                class="analytics"
              />

              <img src="../images/design.png" alt="design" class="design" />

              <img
                src="../images/socialMedia.png"
                alt="socialMedia"
                class="social-media"
              />

              <img src="../images/aboutUs.png" alt="aboutUs" class="about-us" />

              <img
                src="../images/services-marketing.png"
                alt="marketing"
                class="marketing"
              />
              <img
                src="../images/analytics.png"
                alt="analytics"
                class="analytics"
              />

              <img src="../images/design.png" alt="design" class="design" />

              <img
                src="../images/socialMedia.png"
                alt="socialMedia"
                class="social-media"
              />

              <img src="../images/aboutUs.png" alt="aboutUs" class="about-us" />
            </div>
          </div>
        </div>
        <div class="services-content__container">
          <div class="lower-row">
            <img
              src="../images/packBrandBgrnd.png"
              alt="packBrandBgrnd"
              class="brand-service"
            />
            <img src="../images/wantlogo.png" alt="wantlogo" class="wantlogo" />
            <img
              src="../images/promoteBusiness.png"
              alt="promoteBusiness"
              class="promoteBusiness"
            />
            <img
              src="../images/coolDesign.png"
              alt="coolDesign"
              class="coolDesign"
            />
            <img
              src="../images/salesSite.png"
              alt="salesSite"
              class="salesSite"
            />
            <img
              src="../images/conceptions.png"
              alt="conceptions"
              class="conceptions"
            />
            <img src="../images/ideas.png" alt="ideas" class="ideas" />
            <img
              src="../images/strategies.png"
              alt="strategies"
              class="strategies"
            />
            <img src="../images/audit.png" alt="audit" class="audit" />
            <img
              src="../images/clearAnalytics.png"
              alt="clearAnalytics"
              class="clearAnalytics"
            />
            <img
              src="../images/makeAccounts.png"
              alt="makeAccounts"
              class="makeAccounts"
            />
            <img
              src="../images/organicPromote.png"
              alt="organicPromote"
              class="organicPromote"
            />
            <img
              src="../images/googleAds.png"
              alt="googleAds"
              class="googleAds"
            />
            <img
              src="../images/packBrandBgrnd.png"
              alt="packBrandBgrnd"
              class="brand-service"
            />
            <img src="../images/wantlogo.png" alt="wantlogo" class="wantlogo" />
            <img
              src="../images/promoteBusiness.png"
              alt="promoteBusiness"
              class="promoteBusiness"
            />
            <img
              src="../images/coolDesign.png"
              alt="coolDesign"
              class="coolDesign"
            />
            <img
              src="../images/salesSite.png"
              alt="salesSite"
              class="salesSite"
            />
            <img
              src="../images/conceptions.png"
              alt="conceptions"
              class="conceptions"
            />
            <img src="../images/ideas.png" alt="ideas" class="ideas" />
            <img
              src="../images/strategies.png"
              alt="strategies"
              class="strategies"
            />
            <img src="../images/audit.png" alt="audit" class="audit" />
            <img
              src="../images/clearAnalytics.png"
              alt="clearAnalytics"
              class="clearAnalytics"
            />
            <img
              src="../images/makeAccounts.png"
              alt="makeAccounts"
              class="makeAccounts"
            />
            <img
              src="../images/organicPromote.png"
              alt="organicPromote"
              class="organicPromote"
            />
            <img
              src="../images/googleAds.png"
              alt="googleAds"
              class="googleAds"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    FooterComponent,
  },
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

    const onScroll = (event) => {
      const container = event.currentTarget;
      container.scrollLeft += event.deltaY;

      const scrollFactor1 = 1.2;
      const scrollFactor2 = 0.8;
      const scrollFactor3 = 0.3;

      const upperRow = document.querySelector(".upper-row");
      const middleRow = document.querySelector(".middle-row");
      const lowerRow = document.querySelector(".lower-row");

      const loopScroll = (row, factor) => {
        row.scrollLeft += event.deltaY * factor;
        if (row.scrollLeft + row.clientWidth >= row.scrollWidth) {
          row.scrollLeft = 0;
        }
      };

      if (upperRow) {
        loopScroll(upperRow, scrollFactor1);
      }
      if (middleRow) {
        loopScroll(middleRow, scrollFactor2);
      }
      if (lowerRow) {
        loopScroll(lowerRow, scrollFactor3);
      }
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    const router = useRouter();

    const navigateToSecondPage = () => {
      router.push({ name: "second-page" });
    };

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
      onScroll,
      navigateToSecondPage,
    };
  },
};
</script>

<style>
.bricks-frame {
  position: absolute;
  left: 0.7rem;
  top: 0.7rem;
  width: 4.2rem;
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
  margin-right: 1.1рем;
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

.main-content__container {
  position: relative;
  height: calc(100vh - 4rem);
  overflow-x: hidden; /* Добавлено для горизонтальной прокрутки */
  overflow-y: hidden; /* Добавлено для отключения вертикальной прокрутки */
}

.main-img {
  background-image: url("../images/mosaic2.png");
  background-size: cover;
  background-position: center;
  width: 76rem;
  z-index: 1; /* Убедитесь, что z-index у main-img ниже, чем у изображений в left-section */
  position: sticky;
  top: 0;
}

.mosaic-part {
  position: absolute;
  top: 3rem;
  left: 5rem;
  width: 56rem;
  z-index: 1;
}

.callback__container {
  position: absolute;
  bottom: 0.5rem;
  left: 7rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding: 1rem;
  z-index: 20;
}

.callback-number {
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  padding: 0.5rem;
  outline: none;
  font-size: 1rem;
}

.callback-number::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.callback-button {
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 6.86px;
  padding: 1rem 1.2rem;
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
}

.callback-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.first-page-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 4rem);
  box-sizing: border-box;
}

.first-page {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 4rem);
}

.left-section {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  height: 82.45vh;
  position: relative;
}

.left-section__upper,
.left-section__middle {
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
}

.left-section__upper {
  top: 0;
  left: 70rem;
  height: 57.69vh;
  white-space: nowrap;
}

.left-section__middle {
  width: 144.7rem;
  top: 33.1rem;
  left: 45rem;
  height: 25vh;
  overflow-x: hidden;
  white-space: nowrap;
  margin-top: -4px;
}

.left-section__upper img,
.left-section__middle img {
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
  flex-grow: 0;
  z-index: 300;
}

.left-section__upper a {
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
  flex-grow: 0;
  z-index: 300;
}

.upper-content__container {
  position: fixed;
  display: flex;
  flex-direction: row;
  gap: 0;
  height: 82.45vh;
  overflow-x: hidden;
  white-space: nowrap;
}

.upper-row {
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  gap: 0;
  overflow-x: hidden;
  white-space: nowrap;
  z-index: 300;
}

/* .upper-row img {
  height: 100%;
  width: auto;
  object-fit: cover;
} */

.middle-row {
  position: relative;
  display: flex;
  gap: 0;
  overflow-x: hidden;
  white-space: nowrap;
  z-index: 300;
}

.lower-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  overflow-x: hidden;
  white-space: nowrap;
  z-index: 300;
}

.image-wrapper {
  flex: 0 0 auto;
}

.image {
  width: auto;
  height: 100%;
  object-fit: cover;
}

.cases {
  position: fixed;
  height: 32.5rem;
  z-index: 301;
  left: 70.2rem;
  bottom: 24.4rem;
}

.services {
  position: fixed;
  height: 14rem;
  z-index: 301;
  left: 45rem;
  bottom: 10rem;
}

.services-content__container {
  width: 190rem;
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 0;
  z-index: 2;
}

.lower-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  overflow-x: hidden;
  white-space: nowrap;
  z-index: 300;
}
.lower-row--image_1 {
  width: 100%;
}

.brand-service {
  width: 100%;
  height: 100%;
}
.lower-row--image_2 {
  height: 100%;
  width: 100%;
}
.lower-row--image_3 {
  height: 100%;
  width: 25%;
}
.lower-row--image_4 {
  height: 100%;
  width: 25%;
}

/* Скрыть скроллбары для всех браузеров */
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 2045px) and (max-height: 2045px) {
  .main-content__container {
    height: calc(100vh - 9rem);
  }
  .bricks-frame {
    left: 2rem;
    top: 2rem;
    width: 8rem;
  }
  .main-img {
    width: 150rem;
    background-position: 0 -10px;
  }
  .first-page-content {
    height: calc(100vh - 9rem);
  }
  .first-page {
    height: calc(100vh - 9rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 5.8rem;
    left: 11.2rem;
    width: 114rem;
  }
  .callback__container {
    bottom: 6rem;
    left: 6rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 3rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 2.9rem;
    padding: 1.5rem;
  }
  .cases {
    height: 65.9rem;
    left: 144.6rem;
    bottom: 62rem;
  }
  .services {
    height: 38.8rem;
    left: 89.9rem;
    bottom: 23.4rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 246rem;
    left: 144.5rem;
    height: 51.45vh;
  }
  .left-section__middle {
    width: 300.5rem;
    top: 65.9rem;
    left: 90rem;
    height: 30.4vh;
  }
  .services-content__container {
    width: 390.5rem;
    bottom: 0;
  }
  .lower-row {
    height: 14.5rem;
  }
}

@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 2043px) and (max-height: 2043px) {
  .main-content__container {
    height: calc(100vh - 9rem);
  }
  .bricks-frame {
    left: 2rem;
    top: 2rem;
    width: 8rem;
  }
  .main-img {
    width: 150rem;
    background-position: 0 -10px;
  }
  .first-page-content {
    height: calc(100vh - 9rem);
  }
  .first-page {
    height: calc(100vh - 9rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 5.8rem;
    left: 11.2rem;
    width: 114rem;
  }
  .callback__container {
    bottom: 6rem;
    left: 6rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 3rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 2.9rem;
    padding: 1.5rem;
  }
  .cases {
    height: 65.6rem;
    left: 144.7rem;
    bottom: 62rem;
  }
  .services {
    height: 38.5rem;
    left: 90rem;
    bottom: 23.5rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 246rem;
    left: 144.5rem;
    height: 51.45vh;
  }
  .left-section__middle {
    width: 300.5rem;
    top: 65.9rem;
    left: 90rem;
    height: 30.3vh;
  }
  .services-content__container {
    width: 390.5rem;
    bottom: 0;
  }
  .lower-row {
    height: 14.5rem;
  }
}

@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 1325px) and (max-height: 1325px) {
  .main-content__container {
    height: calc(100vh - 6.5rem);
  }
  .bricks-frame {
    left: 1.1rem;
    top: 1.1rem;
    width: 5rem;
  }
  .main-img {
    width: 100rem;
    background-position: 0 -5px;
  }
  .first-page-content {
    height: calc(100vh - 6.5rem);
  }
  .first-page {
    height: calc(100vh - 6.5rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 3.8rem;
    left: 7.2rem;
    width: 74rem;
  }
  .callback__container {
    bottom: 3.5rem;
    left: 5rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.6rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1.6rem;
    padding: 1.5rem;
  }
  .cases {
    height: 42.7rem;
    left: 93.5rem;
    top: 0;
  }
  .services {
    height: 25.2rem;
    left: 58.8rem;
    bottom: 15rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 297rem;
    left: 93.5rem;
    height: 51.8vh;
  }
  .left-section__middle {
    width: 331.5rem;
    top: 43rem;
    left: 59rem;
    height: 30.35vh;
  }
  .services-content__container {
    width: 390.5rem;
    bottom: 0;
  }
  .lower-row {
    height: 8.55rem;
  }
}

@media only screen and (min-width: 3840px) and (max-width: 3840px) and (min-height: 1323px) and (max-height: 1323px) {
  .main-content__container {
    height: calc(100vh - 6.5rem);
  }
  .bricks-frame {
    left: 1.1rem;
    top: 1.1rem;
    width: 5rem;
  }
  .main-img {
    width: 100rem;
    background-position: 0 -5px;
  }
  .first-page-content {
    height: calc(100vh - 6.5rem);
  }
  .first-page {
    height: calc(100vh - 6.5rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 3.8rem;
    left: 7.2rem;
    width: 74rem;
  }
  .callback__container {
    bottom: 3.5rem;
    left: 5rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.6rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1.6rem;
    padding: 1.5rem;
  }
  .cases {
    height: 42.6rem;
    left: 93.5rem;
    top: 0;
  }
  .services {
    height: 25rem;
    left: 58.8rem;
    bottom: 15rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 297rem;
    left: 93.5rem;
    height: 51.8vh;
  }
  .left-section__middle {
    width: 331.5rem;
    top: 43rem;
    left: 59rem;
    height: 30.2vh;
  }
  .services-content__container {
    width: 390.5rem;
    bottom: 0;
  }
  .lower-row {
    height: 8.55rem;
  }
}

@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 1325px) and (max-height: 1325px) {
  .main-content__container {
    height: calc(100vh - 6.5rem);
  }
  .bricks-frame {
    left: 1rem;
    top: 1rem;
    width: 5.1rem;
  }
  .main-img {
    width: 120rem;
    background-position: 0 -10px;
  }
  .first-page-content {
    height: calc(100vh - 6.5rem);
  }
  .first-page {
    height: calc(100vh - 6.5rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 3.5rem;
    left: 7.2rem;
    width: 74rem;
  }
  .callback__container {
    bottom: 4rem;
    left: 6rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.5rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1.5rem;
    padding: 1.5rem;
  }
  .cases {
    height: 42.5rem;
    left: 93.5rem;
    bottom: 40.4rem;
  }
  .services {
    height: 25rem;
    left: 58rem;
    bottom: 15.5rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 297rem;
    left: 93.5rem;
    height: 51.45vh;
  }
  .left-section__middle {
    width: 332rem;
    top: 42.5rem;
    left: 58.5rem;
    height: 30.4vh;
  }
  .services-content__container {
    width: 390.5rem;
    bottom: 0;
  }
  .lower-row {
    height: 9rem;
  }
}

@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 1323px) and (max-height: 1323px) {
  .main-content__container {
    height: calc(100vh - 6.5rem);
  }
  .bricks-frame {
    left: 1rem;
    top: 1rem;
    width: 5.1rem;
  }
  .main-img {
    width: 120rem;
    background-position: 0 -10px;
  }
  .first-page-content {
    height: calc(100vh - 6.5rem);
  }
  .first-page {
    height: calc(100vh - 6.5rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 3.5rem;
    left: 7.2rem;
    width: 74rem;
  }
  .callback__container {
    bottom: 4rem;
    left: 6rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.5rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1.5rem;
    padding: 1.5rem;
  }
  .cases {
    height: 42.5rem;
    left: 93.5rem;
    bottom: 40.4rem;
  }
  .services {
    height: 24.9rem;
    left: 58rem;
    bottom: 15.5rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 297rem;
    left: 93.5rem;
    height: 51.45vh;
  }
  .left-section__middle {
    width: 332rem;
    top: 42.5rem;
    left: 58.5rem;
    height: 30.28vh;
  }
  .services-content__container {
    width: 390.5rem;
    bottom: 0;
  }
  .lower-row {
    height: 9rem;
  }
}

@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 965px) and (max-height: 965px) {
  .main-content__container {
    height: calc(100vh - 4.6rem);
  }
  .bricks-frame {
    left: 0.8rem;
    top: 0.8rem;
    width: 3.8rem;
  }
  .main-img {
    width: 80rem;
    background-position: 0 -5px;
  }
  .first-page-content {
    height: calc(100vh - 4.6rem);
  }
  .first-page {
    height: calc(100vh - 4.6rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 2.7rem;
    left: 5.3rem;
    width: 53.5rem;
  }
  .callback__container {
    bottom: 2.5rem;
    left: 3rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.2rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1.2rem;
    padding: 1rem 0.8rem;
  }
  .cases {
    height: 31.2rem;
    left: 68rem;
    top: 0;
  }
  .services {
    height: 18.2rem;
    left: 42.8rem;
    bottom: 11rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 322.4rem;
    left: 68.1rem;
    height: 51.7vh;
  }
  .left-section__middle {
    width: 347.38rem;
    top: 31.3rem;
    left: 43rem;
    height: 30.2vh;
  }
  .services-content__container {
    width: 390.5rem;
    bottom: 0;
  }
  .lower-row {
    height: 6.5rem;
  }
}

@media only screen and (min-width: 2560px) and (max-width: 2560px) and (min-height: 963px) and (max-height: 963px) {
  .main-content__container {
    height: calc(100vh - 4.6rem);
  }
  .bricks-frame {
    left: 0.8rem;
    top: 0.8rem;
    width: 3.8rem;
  }
  .main-img {
    width: 80rem;
    background-position: 0 -5px;
  }
  .first-page-content {
    height: calc(100vh - 4.6rem);
  }
  .first-page {
    height: calc(100vh - 4.6rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 2.7rem;
    left: 5.3rem;
    width: 53.5rem;
  }
  .callback__container {
    bottom: 2.5rem;
    left: 3rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.2rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1.2rem;
    padding: 1rem 0.8rem;
  }
  .cases {
    height: 31.2rem;
    left: 68rem;
    top: 0;
  }
  .services {
    height: 18.2rem;
    left: 42.8rem;
    bottom: 11rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 322.4rem;
    left: 68.1rem;
    height: 51.7vh;
  }
  .left-section__middle {
    width: 347.38rem;
    top: 31.3rem;
    left: 43rem;
    height: 30vh;
  }
  .services-content__container {
    width: 390.5rem;
    bottom: 0;
  }
  .lower-row {
    height: 6.5rem;
  }
}

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 1085px) and (max-height: 1085px) {
  .main-content__container {
    height: calc(100vh - 5.7rem);
  }
  .bricks-frame {
    left: 0.8rem;
    top: 0.8rem;
    width: 4rem;
  }
  .main-img {
    width: 90rem;
    background-position: 0 -10px;
  }
  .first-page-content {
    height: calc(100vh - 5.7rem);
  }
  .first-page {
    height: calc(100vh - 5.7rem);
  }
  .upper-content__container {
    height: 81.95vh;
  }
  .mosaic-part {
    top: 2.6rem;
    left: 5.8rem;
    width: 59rem;
  }
  .callback__container {
    bottom: 3rem;
    left: 6rem;
    gap: 1.5rem;
  }
  .callback-number {
    font-size: 1.5rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1rem;
    padding: 0.8rem;
  }
  .cases {
    height: 33.8rem;
    left: 74.7rem;
    top: 0;
  }
  .services {
    height: 19.9rem;
    left: 46.9rem;
    bottom: 14.1rem;
  }
  .left-section {
    height: 81.95vh;
  }
  .left-section__upper {
    width: 132rem;
    left: 74.75rem;
    height: 49.82vh;
  }
  .left-section__middle {
    width: 159.6rem;
    top: 34rem;
    left: 47rem;
    height: 29.38vh;
  }
  .services-content__container {
    width: 206.6rem;
    bottom: 0;
  }
  .lower-row {
    height: 8.5rem;
  }
}

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 1083px) and (max-height: 1083px) {
  .main-content__container {
    height: calc(100vh - 5.7rem);
  }
  .bricks-frame {
    left: 0.8rem;
    top: 0.8rem;
    width: 4rem;
  }
  .main-img {
    width: 90rem;
    background-position: 0 -10px;
  }
  .first-page-content {
    height: calc(100vh - 5.7rem);
  }
  .first-page {
    height: calc(100vh - 5.7rem);
  }
  .upper-content__container {
    height: 81.95vh;
  }
  .mosaic-part {
    top: 2.6rem;
    left: 5.8rem;
    width: 59rem;
  }
  .callback__container {
    bottom: 3rem;
    left: 6rem;
    gap: 1.5rem;
  }
  .callback-number {
    font-size: 1.5rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1rem;
    padding: 0.8rem;
  }
  .cases {
    height: 34rem;
    left: 74.8rem;
    bottom: 33.9rem;
  }
  .services {
    height: 19.65rem;
    left: 46.9rem;
    bottom: 14.2rem;
  }
  .left-section {
    height: 81.95vh;
  }
  .left-section__upper {
    width: 132rem;
    left: 74.75rem;
    height: 49.82vh;
  }
  .left-section__middle {
    width: 159.6rem;
    top: 34rem;
    left: 47rem;
    height: 29.25vh;
  }
  .services-content__container {
    width: 206.6rem;
    bottom: 0;
  }
  .lower-row {
    height: 8.5rem;
  }
}

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 965px) and (max-height: 965px) {
  .main-content__container {
    height: calc(100vh - 4.6rem);
  }
  .bricks-frame {
    left: 1rem;
    top: 1rem;
    width: 3.8rem;
  }
  .main-img {
    width: 90rem;
    background-position: 0;
  }
  .first-page-content {
    height: calc(100vh - 4.6rem);
  }
  .first-page {
    height: calc(100vh - 4.6rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 2.9rem;
    left: 5.3rem;
    width: 54rem;
  }
  .callback__container {
    bottom: 1.9rem;
    left: 4rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.2rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  .cases {
    height: 18.39rem;
    left: 43rem;
    bottom: 10.5rem;
  }
  .services {
    height: 31.5rem;
    left: 68.34rem;
    bottom: 28.8rem;
  }
  .left-section {
    height: 90vh;
  }
  .left-section__upper {
    width: 246rem;
    left: 68.4rem;
    height: 52.29vh;
  }
  .left-section__middle {
    width: 271.4rem;
    top: 31.7rem;
    left: 43rem;
    height: 30.3vh;
  }
  .services-content__container {
    width: 314.4rem;
    bottom: 0;
  }
  .lower-row {
    height: 6rem;
  }
}

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 963px) and (max-height: 963px) {
  .main-content__container {
    height: calc(100vh - 4.6rem);
  }
  .bricks-frame {
    left: 1rem;
    top: 1rem;
    width: 3.8rem;
  }
  .main-img {
    width: 90rem;
    background-position: 0;
  }
  .first-page-content {
    height: calc(100vh - 4.6rem);
  }
  .first-page {
    height: calc(100vh - 4.6rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 2.9rem;
    left: 5.3rem;
    width: 54rem;
  }
  .callback__container {
    bottom: 1.9rem;
    left: 4rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.2rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  .cases {
    height: 18.25rem;
    left: 43rem;
    bottom: 10.5rem;
  }
  .services {
    height: 31.5rem;
    left: 68.34rem;
    bottom: 28.8rem;
  }
  .left-section {
    height: 90vh;
  }
  .left-section__upper {
    width: 246rem;
    left: 68.4rem;
    height: 52.29vh;
  }
  .left-section__middle {
    width: 271.4rem;
    top: 31.7rem;
    left: 43rem;
    height: 30.15vh;
  }
  .services-content__container {
    width: 314.4rem;
    bottom: 0;
  }
  .lower-row {
    height: 6rem;
  }
}

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 912px) and (max-height: 912px) {
  .main-content__container {
    height: calc(100vh - 4.4rem);
  }
  .bricks-frame {
    left: 1rem;
    top: 1rem;
    width: 3.5rem;
  }
  .main-img {
    width: 70rem;
    background-position: 0 -2px;
  }
  .first-page-content {
    height: calc(100vh - 4.4rem);
  }
  .first-page {
    height: calc(100vh - 4.4rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 2.8rem;
    left: 4.9rem;
    width: 51rem;
  }
  .callback__container {
    bottom: 1.9rem;
    left: 4rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.2rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  .cases {
    height: 17.34rem;
    left: 40rem;
    bottom: 10.18rem;
  }
  .services {
    height: 29.5rem;
    left: 64.35rem;
    top: 0;
  }
  .left-section {
    height: 90vh;
  }
  .left-section__upper {
    width: 249.8rem;
    left: 64.5rem;
    height: 52.29vh;
  }
  .left-section__middle {
    width: 274.25rem;
    top: 29.75rem;
    left: 40rem;
    height: 30.15vh;
  }
  .services-content__container {
    width: 314.4rem;
    bottom: 0;
  }
  .lower-row {
    height: 6rem;
  }
}

@media only screen and (min-width: 1600px) and (max-width: 1600px) and (min-height: 785px) and (max-height: 785px) {
  .main-content__container {
    height: calc(100vh - 4.1rem);
  }
  .bricks-frame {
    left: 0.6rem;
    top: 0.6rem;
    width: 3.2rem;
  }
  .main-img {
    width: 70rem;
    background-position: 0 -2px;
  }
  .first-page-content {
    height: calc(100vh - 4.1rem);
  }
  .first-page {
    height: calc(100vh - 4.1rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 2.3rem;
    left: 4.2rem;
    width: 43.8rem;
  }
  .callback__container {
    bottom: 1.6rem;
    left: 4rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 0.9rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 0.9rem;
    padding: 0.8rem 0.5rem;
  }
  .cases {
    height: 25.4rem;
    left: 55.4rem;
    top: 0;
  }
  .services {
    height: 14.75rem;
    left: 34.8rem;
    bottom: 8.8rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 194.75rem;
    left: 55.4rem;
    height: 52vh;
  }
  .left-section__middle {
    width: 215.1rem;
    top: 25.6rem;
    left: 35rem;
    height: 30.38vh;
  }
  .services-content__container {
    width: 250.1rem;
    bottom: 0;
  }
  .lower-row {
    height: 4.8rem;
  }
}

@media only screen and (min-width: 1600px) and (max-width: 1600px) and (min-height: 783px) and (max-height: 783px) {
  .main-content__container {
    height: calc(100vh - 4.1rem);
  }
  .bricks-frame {
    left: 0.6rem;
    top: 0.6rem;
    width: 3.2rem;
  }
  .main-img {
    width: 70rem;
    background-position: 0 -2px;
  }
  .first-page-content {
    height: calc(100vh - 4.1rem);
  }
  .first-page {
    height: calc(100vh - 4.1rem);
  }
  .upper-content__container {
    height: 84vh;
  }
  .mosaic-part {
    top: 2.3rem;
    left: 4.2rem;
    width: 43.8rem;
  }
  .callback__container {
    bottom: 1.6rem;
    left: 4rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 0.9rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 0.9rem;
    padding: 0.8rem 0.5rem;
  }
  .cases {
    height: 25.4rem;
    left: 55.4rem;
    top: 0;
  }
  .services {
    height: 14.75rem;
    left: 34.8rem;
    bottom: 8.8rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 194.75rem;
    left: 55.4rem;
    height: 52vh;
  }
  .left-section__middle {
    width: 215.1rem;
    top: 25.6rem;
    left: 35rem;
    height: 30.2vh;
  }
  .services-content__container {
    width: 250.1rem;
    bottom: 0;
  }
  .lower-row {
    height: 4.8rem;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1440px) and (min-height: 785px) and (max-height: 785px) {
  .desktop-menu__contact-section__header {
    font-size: 2.5rem;
    margin: 0 0 2.5rem 0;
  }
  .contact-items__container {
    padding-left: 2rem;
    gap: 1rem;
  }
  .desktop-menu__dynamic-content--item {
    font-size: 2.5rem;
  }
  .footer-section {
    padding-top: 1rem;
  }
  .main-content__container {
    height: calc(100vh - 3.2rem);
  }
  .bricks-frame {
    left: 0.65rem;
    top: 0.65rem;
    width: 3.3rem;
  }
  .main-img {
    width: 70rem;
    background-position: 0 -2px;
  }
  .first-page-content {
    height: calc(100vh - 3.2rem);
  }
  .first-page {
    height: calc(100vh - 3.2rem);
  }
  .upper-content__container {
    height: 86vh;
  }
  .mosaic-part {
    top: 2.3rem;
    left: 4.3rem;
    width: 44.8rem;
  }
  .callback__container {
    bottom: 1.6rem;
    left: 4rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 0.9rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 0.9rem;
    padding: 0.8rem 0.5rem;
  }
  .cases {
    height: 25.85rem;
    left: 56.7rem;
    top: 0;
  }
  .services {
    height: 15.3rem;
    left: 35.3rem;
    bottom: 7.95rem;
  }
  .left-section {
    height: 86vh;
  }
  .left-section__upper {
    width: 194.75rem;
    left: 56.7rem;
    height: 52.95vh;
  }
  .left-section__middle {
    width: 215.95rem;
    top: 26.1rem;
    left: 35.5rem;
    height: 31.1vh;
  }
  .services-content__container {
    width: 251.45rem;
    bottom: 0;
  }
  .lower-row {
    height: 4.8rem;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1440px) and (min-height: 783px) and (max-height: 783px) {
  .desktop-menu__contact-section__header {
    font-size: 2.5rem;
    margin: 0 0 2.5rem 0;
  }
  .contact-items__container {
    padding-left: 2rem;
    gap: 1rem;
  }
  .desktop-menu__dynamic-content--item {
    font-size: 2.5rem;
  }
  .footer-section {
    padding-top: 1rem;
  }
  .main-content__container {
    height: calc(100vh - 3.2rem);
  }
  .bricks-frame {
    left: 0.65rem;
    top: 0.65rem;
    width: 3.3rem;
  }
  .main-img {
    width: 70rem;
    background-position: 0 -2px;
  }
  .first-page-content {
    height: calc(100vh - 3.2rem);
  }
  .first-page {
    height: calc(100vh - 3.2rem);
  }
  .upper-content__container {
    height: 86vh;
  }
  .mosaic-part {
    top: 2.3rem;
    left: 4.3rem;
    width: 44.8rem;
  }
  .callback__container {
    bottom: 1.6rem;
    left: 4rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 0.9rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 0.9rem;
    padding: 0.8rem 0.5rem;
  }
  .cases {
    height: 25.85rem;
    left: 56.7rem;
    top: 0;
  }
  .services {
    height: 15rem;
    left: 35.3rem;
    bottom: 8rem;
  }
  .left-section {
    height: 86vh;
  }
  .left-section__upper {
    width: 194.75rem;
    left: 56.7rem;
    height: 52.95vh;
  }
  .left-section__middle {
    width: 215.95rem;
    top: 26.1rem;
    left: 35.5rem;
    height: 30.9vh;
  }
  .services-content__container {
    width: 251.45rem;
    bottom: 0;
  }
  .lower-row {
    height: 4.8rem;
  }
}

@media only screen and (min-width: 1400px) and (max-width: 1400px) and (min-height: 935px) and (max-height: 935px) {
  .desktop-menu__contact-section__header {
    font-size: 2.5rem;
    margin: 0 0 2.5rem 0;
  }
  .contact-items__container {
    padding-left: 2rem;
    gap: 1rem;
  }
  .desktop-menu__dynamic-content--item {
    font-size: 2.5rem;
  }
  .footer-section {
    padding-top: 2.5rem;
  }
  .main-content__container {
    height: calc(100vh - 3.5rem);
  }
  .bricks-frame {
    left: 1rem;
    top: 1rem;
    width: 3.8rem;
  }
  .main-img {
    width: 90rem;
    background-position: 0 -2px;
  }
  .first-page-content {
    height: calc(100vh - 3.5rem);
  }
  .first-page {
    height: calc(100vh - 3.5rem);
  }
  .upper-content__container {
    height: 86vh;
  }
  .mosaic-part {
    top: 2.8rem;
    left: 5.25rem;
    width: 54.1rem;
  }
  .callback__container {
    bottom: 1.5rem;
    left: 5rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.15rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1.15rem;
    padding: 0.8rem 0.8rem;
  }
  .cases {
    height: 31.3rem;
    left: 68.5rem;
    top: 0;
  }
  .services {
    height: 18.52rem;
    left: 43rem;
    bottom: 8.7rem;
  }
  .left-section {
    height: 86vh;
  }
  .left-section__upper {
    width: 194.79rem;
    left: 68.5rem;
    height: 53.8vh;
  }
  .left-section__middle {
    width: 220.1rem;
    top: 31.5rem;
    left: 43.2rem;
    height: 31.5vh;
  }
  .services-content__container {
    width: 263.29rem;
    bottom: 0;
  }
  .lower-row {
    height: 5.3rem;
  }
}

@media only screen and (min-width: 1400px) and (max-width: 1400px) and (min-height: 933px) and (max-height: 933px) {
  .desktop-menu__contact-section__header {
    font-size: 2.5rem;
    margin: 0 0 2.5rem 0;
  }
  .contact-items__container {
    padding-left: 2rem;
    gap: 1rem;
  }
  .desktop-menu__dynamic-content--item {
    font-size: 2.5rem;
  }
  .footer-section {
    padding-top: 2.5rem;
  }
  .main-content__container {
    height: calc(100vh - 3.5rem);
  }
  .bricks-frame {
    left: 1rem;
    top: 1rem;
    width: 3.8rem;
  }
  .main-img {
    width: 90rem;
    background-position: 0 -2px;
  }
  .first-page-content {
    height: calc(100vh - 3.5rem);
  }
  .first-page {
    height: calc(100vh - 3.5rem);
  }
  .upper-content__container {
    height: 86vh;
  }
  .mosaic-part {
    top: 2.8rem;
    left: 5.25rem;
    width: 54.1rem;
  }
  .callback__container {
    bottom: 1.5rem;
    left: 5rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 1.15rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 1.15rem;
    padding: 0.8rem 0.8rem;
  }
  .cases {
    height: 31.3rem;
    left: 68.5rem;
    top: 0;
  }
  .services {
    height: 18.35rem;
    left: 43rem;
    bottom: 8.7rem;
  }
  .left-section {
    height: 86vh;
  }
  .left-section__upper {
    width: 194.79rem;
    left: 68.5rem;
    height: 53.8vh;
  }
  .left-section__middle {
    width: 220.1rem;
    top: 31.5rem;
    left: 43.2rem;
    height: 31.4vh;
  }
  .services-content__container {
    width: 263.29rem;
    bottom: 0;
  }
  .lower-row {
    height: 5.3rem;
  }
}

@media only screen and (min-width: 1366px) and (max-width: 1366px) and (min-height: 653px) and (max-height: 653px) {
  .desktop-menu__contact-section__header {
    font-size: 2.5rem;
    margin: 0;
  }
  .contact-items__container {
    padding-left: 2rem;
    gap: 1rem;
  }
  .desktop-menu__dynamic-content--item {
    font-size: 2.5rem;
  }
  .footer-section {
    padding-top: 0;
  }
  .main-content__container {
    height: calc(100vh - 2.5rem);
  }
  .bricks-frame {
    left: 0.6rem;
    top: 0.6rem;
    width: 2.5rem;
  }
  .main-img {
    width: 55rem;
    background-position: 0 -2px;
  }
  .first-page-content {
    height: calc(100vh - 2.5rem);
  }
  .first-page {
    height: calc(100vh - 2.5rem);
  }
  .upper-content__container {
    height: 86vh;
  }
  .mosaic-part {
    top: 1.95rem;
    left: 3.55rem;
    width: 37.4rem;
  }
  .callback__container {
    bottom: 1.2rem;
    left: 2.2rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 0.8rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 0.8rem;
    padding: 10px 0.5rem;
  }
  .cases {
    height: 21.5rem;
    left: 47.1rem;
    top: 0;
  }
  .services {
    height: 12.8rem;
    left: 29.7rem;
    bottom: 6.58rem;
  }
  .left-section {
    height: 86vh;
  }
  .left-section__upper {
    width: 203rem;
    left: 47.1rem;
    height: 52.69vh;
  }
  .left-section__middle {
    width: 220.3rem;
    top: 21.7rem;
    left: 29.8rem;
    height: 31.3vh;
  }
  .services-content__container {
    width: 250.1rem;
    bottom: 0;
  }
  .lower-row {
    height: 4.1rem;
  }
}
@media only screen and (min-width: 1366px) and (max-width: 1366px) and (min-height: 651px) and (max-height: 651px) {
  .desktop-menu__contact-section__header {
    font-size: 2.5rem;
    margin: 0;
  }
  .contact-items__container {
    padding-left: 2rem;
    gap: 1rem;
  }
  .desktop-menu__dynamic-content--item {
    font-size: 2.5rem;
  }
  .footer-section {
    padding-top: 0;
  }
  .main-content__container {
    height: calc(100vh - 2.5rem);
  }
  .bricks-frame {
    left: 0.6rem;
    top: 0.6rem;
    width: 2.5rem;
  }
  .main-img {
    width: 55rem;
    background-position: 0 -2px;
  }
  .first-page-content {
    height: calc(100vh - 2.5rem);
  }
  .first-page {
    height: calc(100vh - 2.5rem);
  }
  .upper-content__container {
    height: 86vh;
  }
  .mosaic-part {
    top: 1.95rem;
    left: 3.55rem;
    width: 37.4rem;
  }
  .callback__container {
    bottom: 1.2rem;
    left: 2.2rem;
    gap: 2rem;
  }
  .callback-number {
    font-size: 0.8rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 0.8rem;
    padding: 10px 0.5rem;
  }
  .cases {
    height: 21.5rem;
    left: 47.1rem;
    top: 0;
  }
  .services {
    height: 12.65rem;
    left: 29.7rem;
    bottom: 6.6rem;
  }
  .left-section {
    height: 86vh;
  }
  .left-section__upper {
    width: 203rem;
    left: 47.1rem;
    height: 52.69vh;
  }
  .left-section__middle {
    width: 220.3rem;
    top: 21.7rem;
    left: 29.8rem;
    height: 31.1vh;
  }
  .services-content__container {
    width: 250.1rem;
    bottom: 0;
  }
  .lower-row {
    height: 4.1rem;
  }
}
</style>
