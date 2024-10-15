<template>
  <div>
    <HeaderComponent />
    <div class="site-development__container">
      <div class="site-development">
        <img
          class="site-development_img"
          src="../images/site-development.png"
          alt="site-development"
        />
        <div class="grid-container">
          <div class="grid-item">
            <h3>
              ПІДГОТОВКА <br />
              ТЕХНІЧНОГО ЗАВДАННЯ:
            </h3>
            <p>
              Детальний опис всіх параметрів майбутнього сайту: його структури і
              функціоналу, змісту та оформлення, базової оптимізації та
              налаштувань
            </p>
          </div>
          <div class="grid-item">
            <h3>
              РОЗРОБКА <br />
              ЗАГАЛЬНОЇ КОНЦЕПЦІЇ
            </h3>
            <p>
              Визначення головної мети й розробка ефективних заходів просування
              послуг компанії серед цільової аудиторії через сайт
            </p>
          </div>
          <div class="grid-item">
            <h3>
              РОЗРОБКА МОКАПІВ <br />
              І НАВІГАЦІЙНОЇ КАРТИ
            </h3>
            <p>
              Розробка структури сайту, змісту сторінок, шляхів навігації і
              загального функціоналу взаємодії між користувачем і компанією
            </p>
          </div>
          <div class="grid-item">
            <h3>
              ДИЗАЙН І МАКЕТУВАННЯ <br />
              СТОРІНОК САЙТУ
            </h3>
            <p>
              Визначення стилістичного оформлення згідно зі стилем бренду.
              Дизайн сторінок відповідно до затвердженої структури. Підготовка
              макета для верстки. Створення адаптивної версії
            </p>
          </div>
          <div class="grid-item">
            <h3>
              BACKEND FRONTEND <br />
              ЗАПУСК
            </h3>
            <p>
              Програмування (Laravel) та верстка сайту згідно техзавдання та
              узгодженого макета. Тестування та перевірка роботи сайту.
              Підготовка до переносу і перенесення на бойовий сервер.
            </p>
          </div>
          <div class="grid-item">
            <h3 class="tech-support">ТЕХПІДТРИМКА</h3>
            <p>
              Створення інструкції користувача. Консультативна підтримка щодо
              обслуговування сайту протягом півроку з моменту запуску.
            </p>
          </div>
        </div>
      </div>
      <div class="steps_container">
        <img
          class="steps-img__header"
          src="../images/steps_header-img.png"
          alt="steps-img__header"
        />
        <img class="steps-img" src="../images/steps-img.png" alt="steps-img" />
      </div>
      <div class="questions_container">
        <div class="contact-form">
          <div class="contact-text">
            <p>
              Залишились <br />
              питання?
            </p>
            <p>Давай обговоримо</p>
          </div>
          <div class="form-fields">
            <input
              type="text"
              placeholder="Ім'я"
              class="input-field"
              v-model="contactName"
            />
            <input
              type="text"
              placeholder="Телефон"
              class="input-field"
              v-model="contactPhone"
            />
          </div>
          <button class="submit-button" @click="submitContactForm">
            <img class="arrow" src="../images/arrow.png" alt="arrow" />
            <img class="arrow" src="../images/arrow.png" alt="arrow" />
            <img class="arrow" src="../images/arrow.png" alt="arrow" />
          </button>
        </div>
        <img
          class="questions-image"
          src="../images/questions-image.jpg"
          alt="questions-image"
        />
      </div>
      <div class="cases-development__container">
        <img
          class="development-cases"
          src="../images/development-cases.png"
          alt="development-cases"
        />
        <div class="cases-development__left-container">
          <div class="cases-development__left">
            <div class="card-development_img"></div>
            <div class="cases-tags">
              <span class="tag">Упаковка бренда</span>
              <span class="tag">Разработка сайта</span>
              <span class="tag">SMM</span>
              <span class="tag">Таргет</span>
              <span class="tag">Контекст</span>
            </div>
            <div class="card-development__info">
              <h1>Smartcover</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure
                reprehenderit.
              </p>
              <a
                >Детальніше<img
                  class="card-development__arrow-img"
                  src="../images/cases-arrow.png"
                  alt="cases-arrow"
              /></a>
            </div>
          </div>
        </div>
        <div class="cases-development__right">
          <div class="card">
            <div class="card-img"></div>
            <div class="card-content">
              <h2>Smartcover</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut lab...
              </p>
              <a
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
              <a
                >Детальніше<img
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
              <a
                >Детальніше<img
                  class="arrow-img"
                  src="../images/cases-arrow.png"
                  alt="cases-arrow"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="order__container">
        <div class="left">
          <h2 class="brief-order__header">ХОЧЕТЕ ЗАМОВИТИ?</h2>
          <h3 class="brief-order_text-top">ЗАПОВНІТЬ, БУДЬ-ЛАСКА, БРИФ</h3>
          <p class="brief-order_text-main">
            Дані з брифу допоможуть нам якісно підготувати <br />
            пропозицію саме для вас
          </p>
          <button class="order__button" @click="goToBriefPage">
            ЗРОБІТЬ САЙТ, ЩО ПРОДАЄ
          </button>
        </div>
        <div class="right">
          <h3 class="contacts__header">ЧИ ЗАЛИШТЕ КОНТАКТИ</h3>
          <form @submit.prevent="submitForm">
            <div class="inputs__container">
              <input type="text" v-model="name" placeholder="Ім'я" required />
              <input
                type="tel"
                v-model="phone"
                placeholder="Телефон"
                required
              />
            </div>
            <button class="requisition__button" type="submit">
              ЗАЛИШИТИ ЗАЯВКУ
            </button>
          </form>
        </div>
      </div>
    </div>
    <SecondFooter />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import SecondFooter from "../components/SecondFooter";

export default {
  name: "SiteDevelopment",
  components: {
    HeaderComponent,
    SecondFooter,
  },
  data() {
    return {
      name: "",
      phone: "",
      contactName: "",
      contactPhone: "",
    };
  },
  methods: {
    goToBriefPage() {
      this.$router.push({ name: "brief-page" });
    },
    submitForm() {
      const contactInfo = {
        name: this.name,
        phone: this.phone,
      };
      console.log(contactInfo);
    },
    submitContactForm() {
      const contactFormInfo = {
        name: this.contactName,
        phone: this.contactPhone,
      };
      console.log(contactFormInfo);
    },
  },
};
</script>

<style scoped>
.site-development__container {
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.site-development {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.site-development_img {
  align-self: flex-start;
  margin-top: 2%;
  margin-bottom: 20px;
  padding-left: 13%;
  width: 62%;
}

.grid-container {
  width: 76%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  margin-top: 40px;
}

.grid-item {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
}

.grid-item h3 {
  color: #2b2b2b;
  margin-bottom: 10px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 20px;
}

.grid-item p {
  color: #2b2b2b;
  font-size: 1.2em;
  line-height: 1.5;
  text-align: left;
  font-family: "Montserrat", sans-serif;
}

.grid-item h3::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background: #ff5733;
  margin-top: 10px;
}

.grid-item:last-child h3::after {
  margin-top: 8%;
}

.steps_container {
  width: 73vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 120px;
}

.steps-img__header {
  align-self: flex-start;
  width: 60%;
  margin-top: 100px;
  margin-bottom: 80px;
}

.steps-img {
  align-self: flex-start;
  width: 100%;
}

.questions_container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 965.6px;
  background-size: 100vw;
  background-position: center;
  background-repeat: no-repeat;
}

.questions-image {
  width: 100%;
}

.contact-form {
  position: absolute;
  bottom: 14%;
  left: 4%;
  width: 82%;
  height: 16.8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: #ffffff;
  opacity: 0.85;
}

.contact-text {
  font-family: "Montserrat";
  font-size: 30px;
  font-weight: 600;
  line-height: 0.4;
  color: #002d6e;
  margin-right: 20px;
}

.contact-text p {
  line-height: 1.5rem;
  text-align: left;
}

.form-fields {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;
  flex-grow: 1;
}

.input-field {
  width: 350px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
}

.input-field::placeholder {
  color: #aaa;
}

.submit-button {
  width: 325.65px;
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
  transition: transform 0.3s ease-in-out;
}

.submit-button:hover {
  transform: scale(1.1);
}

.arrow {
  width: 75px;
  margin: 0 15px;
}

.cases-development__container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 80px 40px;
  margin-top: 70px;
}

.cases-development__left-container {
  margin-left: 2%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}

.cases-development__left {
  margin-left: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.development-cases {
  position: absolute;
  left: 2.1%;
  top: 9%;
}

.card-development_img {
  width: 100%;
  height: 40vh;
  background-color: #d9d9d9;
  border-radius: 8px;
}

.cases-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 10px;
  margin-top: 30px;
}

.tag {
  color: #002d6e;
  padding: 5px;
  margin: 5px;
  border: 1.5px solid #002d6e;
  border-radius: 5px;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  cursor: default;
}

.card-development__info {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}

.cases-development__left h1 {
  margin-top: 10px;
  color: #002d6e;
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 36px;
  text-align: start;
}

.cases-development__left p {
  margin-top: 0;
  font-size: 20px;
  font-family: "Montserrat";
  color: #2b2b2b;
  text-align: start;
}

.cases-development__left a {
  margin-left: 0;
  font-size: 14px;
  color: #828282;
  text-decoration: none;
  cursor: pointer;
}

.cases-development__right {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 3%;
}

.card {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
}

.card-img {
  width: 30%;
  height: 100%;
  background-color: #d9d9d9;
  border-radius: 8px;
}

.card-content {
  width: 300px;
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
  cursor: pointer;
}

.order__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 100px;
}

.left {
  padding-left: 7%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: start;
  width: 48%;
}
.right {
  padding-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: start;
  width: 48%;
}

.brief-order__header {
  color: #002d6e;
  font-family: "Montserrat";
}

.brief-order_text-top {
  font-size: 18px;
  font-weight: 400;
  color: #2b2b2b;
  font-family: "Montserrat";
}

.brief-order_text-main {
  color: #2b2b2b;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 400;
  line-height: 1.5;
}

.inputs__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 40px;
  margin-bottom: 5%;
}

.requisition__button {
  background-color: #002d6e;
  color: #fff;
  border: none;
  padding: 15px 35px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
  margin-top: 10px;
  border-radius: 8px;
}

.contacts__header {
  font-size: 18px;
  font-weight: 400;
  color: #2b2b2b;
  font-family: "Montserrat";
}

.order__button {
  background-color: #002d6e;
  color: #fff;
  border: none;
  padding: 15px 35px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
  margin-top: 10px;
  border-radius: 8px;
}

input {
  width: 300px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
}

input::placeholder {
  color: #2b2b2b;
  font-style: italic;
  opacity: 0.7;
}
</style>
