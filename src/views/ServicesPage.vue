<template>
  <HeaderComponent />
  <div class="services__container">
    <img
      class="our-services_img"
      src="../images/our-services.png"
      alt="our-services"
    />
    <div class="menu-container">
      <div class="menu-item" v-for="(item, index) in menuItems" :key="index">
        <button class="item-content" @click="selectService(index)">
          <p>{{ item.title }}<span class="arrow">↓</span></p>
        </button>
        <div v-if="index < menuItems.length - 1" class="separator"></div>
      </div>
    </div>

    <div
      v-if="
        selectedSection === 'consulting-marketing' || selectedSection === ''
      "
      class="consulting-marketing"
    >
      <div class="left-section__services">
        <h1>КОНСАЛТИНГ МАРКЕТИНГ</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
        <div class="arrows">
          <a href="#"
            >Концепції<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
          <a href="#"
            >Ідеї<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
          <a href="#"
            >Стратегії<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
        </div>
        <div class="input-form">
          <input
            type="text"
            placeholder="Ім'я"
            class="input-field_order"
            v-model="contactName"
          />
          <input
            type="text"
            placeholder="Телефон"
            class="input-field_order"
            v-model="contactPhone"
          />
          <div class="order-link">
            <a @click="submitContactForm" href="!"
              >Замовити<img
                class="cases-arrow"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
      </div>
      <div class="right-section__services">
        <div class="card">
          <div class="card-img"></div>
          <div class="card-content">
            <h2>Smartcover</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab...
            </p>
            <a href="#"
              >Детальніше
              <img
                class="arrow-img"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-content">
            <h2>Smartcover</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab...
            </p>
            <a href="#"
              >Детальніше<img
                class="arrow-img"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedSection === 'analytics'" class="analytics">
      <div class="left-section__services">
        <h1>АНАЛІТИКА</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
        <div class="arrows">
          <a href="#"
            >Аудит<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
          <a href="#"
            >Аналітика<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
        </div>
        <div class="input-form">
          <input
            type="text"
            placeholder="Ім'я"
            class="input-field_order"
            v-model="contactName"
          />
          <input
            type="text"
            placeholder="Телефон"
            class="input-field_order"
            v-model="contactPhone"
          />
          <div class="order-link">
            <a @click="submitContactForm" href="!#"
              >Замовити<img
                class="cases-arrow"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
      </div>
      <div class="right-section__services">
        <div class="card">
          <div class="card-img"></div>
          <div class="card-content">
            <h2>Smartcover</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab...
            </p>
            <a href="#"
              >Детальніше
              <img
                class="arrow-img"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-content">
            <h2>Smartcover</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab...
            </p>
            <a href="#"
              >Детальніше<img
                class="arrow-img"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedSection === 'design'" class="design">
      <div class="left-section__services">
        <h1>ДИЗАЙН І УПАКОВКА БРЕНДУ</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
        <div class="arrows">
          <a href="#"
            >Дизайн<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
          <a href="#"
            >Створення сайтів<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
          <a href="#"
            >SMM/таргет<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
        </div>
        <div class="input-form">
          <input
            type="text"
            placeholder="Ім'я"
            class="input-field_order"
            v-model="contactName"
          />
          <input
            type="text"
            placeholder="Телефон"
            class="input-field_order"
            v-model="contactPhone"
          />
          <div class="order-link">
            <a @click="submitContactForm"
              >Замовити<img
                class="cases-arrow"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
      </div>
      <div class="right-section__services">
        <div class="card">
          <div class="card-img"></div>
          <div class="card-content">
            <h2>Smartcover</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab...
            </p>
            <a href="#"
              >Детальніше
              <img
                class="arrow-img"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-content">
            <h2>Smartcover</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab...
            </p>
            <a href="#"
              >Детальніше<img
                class="arrow-img"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedSection === 'promotion'" class="promotion">
      <div class="left-section__services">
        <h1>ПРОСУВАННЯ І ВЕДЕННЯ</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ад
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
        <div class="arrows">
          <a href="#"
            >SEO<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
          <a href="!#"
            >Контекст сайтів<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
          <a href="#"
            >SMM<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
          <a href="#"
            >Таргет<img
              class="arrow-img"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
        </div>
        <div class="input-form">
          <input
            type="text"
            placeholder="Ім'я"
            class="input-field_order"
            v-model="contactName"
          />
          <input
            type="text"
            placeholder="Телефон"
            class="input-field_order"
            v-model="contactPhone"
          />
          <div class="order-link">
            <a @click="submitContactForm">
              Замовити<img
                class="cases-arrow"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="right-section__services">
        <div class="card">
          <div class="card-img"></div>
          <div class="card-content">
            <h2>Smartcover</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab...
            </p>
            <a href="#"
              >Детальніше
              <img
                class="arrow-img"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-content">
            <h2>Smartcover</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab...
            </p>
            <a href="#"
              >Детальніше<img
                class="arrow-img"
                src="../images/cases-arrow.png"
                alt="cases-arrow"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div class="promotion-tools">
      <img
        class="promotion-instruments_img"
        src="../images/promotion-instruments.png"
        alt="promotion-instruments"
      />
      <div class="cards-tools">
        <div class="card-tools">
          <h2>Розробка маркетингової стратегії:</h2>
          <ul>
            <li><span>■</span>Аналіз цільових сегментів та ринку.</li>
            <li><span>■</span>Позиціонування бренду.</li>
            <li><span>■</span>Аналіз конкурентів.</li>
            <li><span>■</span>Складання портрета клієнта.</li>
          </ul>
        </div>
        <div class="card-tools">
          <h2>Розробка сайтів:</h2>
          <ul>
            <li><span>■</span>Підготовка техзавдання.</li>
            <li>
              <span>■</span>Формування загальної концепції сайту (форма, стиль,
              цільова функція).
            </li>
            <li><span>■</span>Розробка мокапів та навігаційної карти.</li>
          </ul>
        </div>
        <div class="card-tools">
          <h2>Розробка SMM-стратегії:</h2>
          <ul>
            <li><span>■</span>Розробка стратегії SMM.</li>
            <li><span>■</span>Оформлення сторінок у соціальних мережах.</li>
            <li><span>■</span>Розробка рубрикатора.</li>
          </ul>
        </div>
        <div class="card-tools">
          <h2>Таргетована реклама:</h2>
          <ul>
            <li><span>■</span>Аналіз цільових сегментів та ринку.</li>
            <li><span>■</span>Позиціонування бренду.</li>
            <li><span>■</span>Аналіз конкурентів.</li>
            <li><span>■</span>Складання портрета клієнта.</li>
          </ul>
        </div>
        <div class="card-tools">
          <h2>Контекстна реклама:</h2>
          <ul>
            <li><span>■</span>Збір семантичного ядра.</li>
            <li><span>■</span>Налаштування та ведення контекстної реклами.</li>
            <li><span>■</span>Створення ремаркетингових кампаній.</li>
          </ul>
        </div>
        <div class="card-tools">
          <h2>SEO:</h2>
          <ul>
            <li>
              <span>■</span>Аналіз алгоритмів ранжування пошукових систем для
              виявлення ключових факторів ранжування, відстеження нововведень
              пошукових систем.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="making-cool__container">
      <div class="service_container">
        <div class="main-heading">
          <h2>ДАВАЙТЕ РАЗОМ СТВОРИМО ЩОСЬ КРУТЕ</h2>
          <p>
            напишіть нам блаблабла, залиште контакти і наш менеджер зв'яжеться з
            вами:
          </p>
        </div>
        <div class="service-buttons">
          <button
            class="service-button"
            v-for="service in services"
            :key="service"
            @click="toggleService(service)"
            :class="{ active: selectedServices.includes(service) }"
          >
            {{ service }}
          </button>
        </div>
      </div>
      <div class="contact-form_making">
        <div class="contact-form_making--inputs">
          <div class="contact-form_making--inputs-fields">
            <input
              type="text"
              placeholder="Ім'я"
              class="input-field_cases"
              v-model="makingName"
            />
            <input
              type="text"
              placeholder="Телефон"
              class="input-field_cases"
              v-model="makingPhone"
            />
          </div>
          <button class="submit-button_making" @click="submitMakingForm">
            <img class="contact-arrow" src="../images/arrow.png" alt="arrow" />
            <img class="contact-arrow" src="../images/arrow.png" alt="arrow" />
            <img class="contact-arrow" src="../images/arrow.png" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <SecondFooter />
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import SecondFooter from "../components/SecondFooter";

export default {
  name: "ServicesPage",
  components: {
    HeaderComponent,
    SecondFooter, // Проверьте правильность пути и наличие этого компонента
  },
  data() {
    return {
      menuItems: [
        { title: "КОНСАЛТИНГ\nМАРКЕТИНГ", section: "consulting-marketing" },
        { title: "АНАЛІТИКА", section: "analytics" },
        { title: "ДИЗАЙН ТА\nУПАКОВКА БРЕНДУ", section: "design" },
        { title: "ПРОСУВАННЯ\nІ ВЕДЕННЯ", section: "promotion" },
      ],
      selectedSection: "",
      contactName: "",
      contactPhone: "",
      makingName: "",
      makingPhone: "",
      selectedServices: [],
      services: [
        "Запускайте мій бренд",
        "Хочу логотип",
        "Просувайте мій бізнес",
        "Треба крутий дизайн",
        "Зробіть сайт, що продає",
        "Поки не знаю",
      ],
    };
  },
  methods: {
    selectService(index) {
      this.selectedSection = this.menuItems[index].section;
    },
    submitContactForm() {
      const contactData = {
        name: this.contactName,
        phone: this.contactPhone,
      };
      console.log("Contact Form Data:", contactData);
      // Здесь вы можете отправить данные на сервер
    },
    toggleService(service) {
      const index = this.selectedServices.indexOf(service);
      if (index === -1) {
        this.selectedServices.push(service);
      } else {
        this.selectedServices.splice(index, 1);
      }
    },
    submitMakingForm() {
      const makingFormData = {
        name: this.makingName,
        phone: this.makingPhone,
        services: this.selectedServices,
      };
      console.log("Making Form Data:", makingFormData);
      // Здесь вы можете отправить данные на сервер
    },
  },
};
</script>

<style scoped>
.services__container {
  overflow-y: scroll;
  width: 100vw;
}
.our-services_img {
  width: 62%;
  margin-top: 62px;
  margin-left: 120px;
}
.menu-container {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #002d6e;
  padding: 20px;
}

.menu-item {
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
}

.item-content {
  text-align: center;
  position: relative;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.item-content p {
  white-space: pre-wrap;
  margin: 0;
  padding: 15px;
}

.arrow {
  font-size: 12px;
  margin-left: 5px;
  margin-bottom: 2px;
}

.separator {
  height: 85px;
  width: 2px;
  background-color: #ffffff;
  margin: 0 15px;
}

.consulting-marketing {
  display: flex;
  justify-content: space-around;
  padding: 80px 40px;
  margin-bottom: 100px;
}

.analytics {
  display: flex;
  justify-content: space-around;
  padding: 80px 40px;
  margin-bottom: 40px;
}

.design {
  display: flex;
  justify-content: space-around;
  padding: 80px 40px;
  margin-bottom: 40px;
}

.promotion {
  display: flex;
  justify-content: space-around;
  padding: 80px 40px;
  margin-bottom: 40px;
}

.left-section__services {
  width: 50%;
}

.left-section__services h1 {
  color: #002d6e;
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 36px;
}

.left-section__services p {
  margin-top: 20px;
  font-size: 20px;
  font-family: "Montserrat";
  color: #2b2b2b;
}

.left-section h1 {
  color: #002d6e;
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 36px;
}

.left-section p {
  margin-top: 20px;
  font-size: 20px;
  font-family: "Montserrat";
  color: #2b2b2b;
}

.arrows {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-size: 24px;
  color: #ff6400;
  gap: 10px;
}

.arrows a {
  margin-top: 10px;
  display: inline-block;
  font-size: 24px;
  font-family: "Montserrat";
  font-weight: 400;
  color: #000000;
  text-decoration: none;
}

.arrow-img {
  margin-left: 10px;
}

.input-form {
  margin-right: 60px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.input-field_order {
  width: 300px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
}

.input-field_order::placeholder {
  color: #2b2b2b;
  font-family: "Montserrat";
  font-style: italic;
  font-size: 16px;
  opacity: 0.7;
}

.order-link {
  text-align: center;
  position: relative;
  display: inline-block;
}

.order-link a {
  color: #002d6e;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  position: relative;
}

.order-link a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #002d6e;
}

.right-section__services {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  width: 611.25px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: start;
  border-radius: 8px;
}

.card-img {
  width: 80%;
  height: 100%;
  background-color: #d9d9d9;
  border-radius: 8px;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10px 20px;
  text-align: start;
}

.card-content h2 {
  text-align: start;
  font-family: "Montserrat";
  margin: 0;
  color: #002d6e;
  font-size: 24px;
  font-weight: 600;
}

.card-content p {
  margin-top: 10px;
  font-family: "Montserrat";
  font-size: 16px;
  color: #2b2b2b;
}

.card-content a {
  margin-top: 10px;
  display: inline-block;
  font-size: 14px;
  color: #828282;
  text-decoration: none;
}

.promotion-tools {
  margin: 0 40px;
  text-align: start;
  padding: 20px;
  margin-bottom: 60px;
}

.promotion-instruments_img {
  width: 62%;
  margin-left: 30px;
  margin-bottom: 60px;
}

.title-tools {
  font-size: 3em;
  color: #0046c6;
}

.cards-tools {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-tools {
  width: 384px;
  background-color: #fff;
  color: #000;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  width: 30%;
}

.card-tools h2 {
  color: #002d6e;
  font-family: "Montserrat";
  border-bottom: 2px solid #ff6600;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.card-tools ul {
  font-family: "Montserrat";
  list-style: none;
  padding: 0;
  line-height: 1.8;
}
.card-tools span {
  margin-right: 4px;
}
.making-cool__container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  margin-bottom: 240px;
}

.service_container {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-form_making--inputs {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-form_making--inputs-fields {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
}

.main-heading {
  margin-bottom: 20px;
}

.main-heading h2 {
  color: #002d6e;
  font-size: 32px;
  font-family: "Montserrat";
  font-weight: 800;
  margin: 0;
  margin-bottom: 60px;
}

.main-heading p {
  color: #666;
  font-size: 24px;
  font-family: "Montserrat";
  margin: 40px 0;
}

.service-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.service-button {
  background: white;
  border: 2px solid #ccc;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 6px;
}

.service-button.active {
  background-color: #ff6600;
  color: white;
}

.contact-form_making {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.input-field_cases {
  flex: 1;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
}

.input-field::placeholder {
  color: #aaa;
}

.submit-button_making {
  margin-top: 47px;
  height: 66.07px;
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: transform 0.3s ease-in-out;
}

.submit-button_making:hover {
  transform: scale(1.1);
}

.contact-arrow {
  width: 120px;
}
</style>
