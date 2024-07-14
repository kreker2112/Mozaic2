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
    };
  },
};
</script>

<style>
.bricks-frame {
  position: absolute;
  left: 0.8rem;
  top: 0.8rem;
  width: 3.9rem;
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
  background-position: -2%;
  background-repeat: no-repeat;
  width: 76rem;
  z-index: 1; /* Убедитесь, что z-index у main-img ниже, чем у изображений в left-section */
  position: sticky;
  top: 0;
}

.mosaic-part {
  position: absolute;
  top: 2.8rem;
  left: 5rem;
  width: 50rem;
  z-index: 1;
}

.callback__container {
  position: absolute;
  bottom: 1.8rem;
  left: 4rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
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
  left: 63.4rem;
  height: 51vh;
  white-space: nowrap;
}

.left-section__middle {
  width: 144.7rem;
  top: 29rem;
  left: 40rem;
  height: 30.54vh;
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
  gap: 0;
  overflow-x: hidden;
  white-space: nowrap;
  z-index: 300;
}

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
  height: 28.7rem;
  z-index: 301;
  left: 63.5rem;
  top: 0;
}

.services {
  position: fixed;
  height: 17.3rem;
  z-index: 301;
  left: 40rem;
  bottom: 10.89rem;
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
  height: 6.9rem;
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

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 1083px) and (max-height: 1083px) {
  .upper-content__container {
    height: 84vh;
  }
  .callback__container {
    bottom: 2rem;
    left: 2rem;
    gap: 1.5rem;
  }
  .callback-number {
    font-size: 1rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
  .cases {
    height: 35.9rem;
    left: 64.4rem;
    bottom: 31.7rem;
  }
  .services {
    height: 20.1rem;
    left: 35rem;
    bottom: 11.5rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 125.61rem;
    left: 64.3rem;
    height: 53.4vh;
  }
  .left-section__middle {
    width: 154.95rem;
    top: 36.26rem;
    left: 35rem;
    height: 30vh;
  }
  .services-content__container {
    bottom: 0.3rem;
  }
  .lower-row {
    height: 7.11rem;
  }
}

@media only screen and (min-width: 1920px) and (max-width: 1920px) and (min-height: 963px) and (max-height: 963px) {
  .upper-content__container {
    height: 84vh;
  }
  .callback__container {
    bottom: 2rem;
    left: 2rem;
    gap: 1.5rem;
  }
  .callback-number {
    font-size: 1rem;
    padding: 1rem;
  }
  .callback-button {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
  .cases {
    height: 35.9rem;
    left: 64.4rem;
    bottom: 31.7rem;
  }
  .services {
    height: 20.1rem;
    left: 35rem;
    bottom: 11.5rem;
  }
  .left-section {
    height: 84vh;
  }
  .left-section__upper {
    width: 125.61rem;
    left: 64.3rem;
    height: 53.4vh;
  }
  .left-section__middle {
    width: 154.95rem;
    top: 36.26rem;
    left: 35rem;
    height: 30vh;
  }
  .services-content__container {
    bottom: 0.3rem;
  }
  .lower-row {
    height: 7.6rem;
  }
}

@media (max-width: 767px) {
  .second-page {
    width: 1710px;
    height: 932px;
    overflow-x: auto;
  }
}
</style>
