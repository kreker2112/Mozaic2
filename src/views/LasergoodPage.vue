<template>
  <div class="second-page__container">
    <div class="lasergood__rebrending">
      <HeaderComponent />
      <div class="rebrending-header__container">
        <H1 class="rebrending__header"
          >Re-брендинг мережі <br />
          центрів лазерної епіляції <br />
          та косметології</H1
        >
      </div>
    </div>
    <div class="client-container">
      <div class="our_client">
        <h1 class="our_client__header">ХТО НАШ КЛІЄНТ</h1>
        <div class="our_client--text__container">
          <p class="our_client--text">
            — мережа центрів лазерної епіляції та косметології, яка <br />
            перебувала на етапі ребрендингу. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />, sed
            do eiusmod tempor incididunt ut labore et dolore <br />
            magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
            exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />
            consequat. Duis aute irure dolor in reprehenderit
          </p>
        </div>
      </div>
      <div class="our-client__image__container">
        <img
          class="our-client__image"
          src="../images/client-card.png"
          alt="client-card"
        />
      </div>
      <div class="salons__container">
        <h1 class="salons__container-header">8</h1>
        <p class="salons__container-text">
          САЛОНІВ <br />
          ПО ВСІЙ УКРАЇНІ
        </p>
      </div>
    </div>
    <div class="lasergood-love__container">
      <div class="lasergood-love__container-left">
        <h1 class="lasergood-love__header">
          БЛАБЛАБЛА <br />
          БЛАБЛА
        </h1>
        <div class="lasergood-love--text__container">
          <p class="lasergood-love--text">
            Lorem ipsum dolor sit<br />
            amet, consectetur<br />
            adipiscing elit , sed do<br />
            eiusmod tempor<br />
            incididunt ut labore et<br />
            dolore magna aliqua. Ut<br />
            enim ad minim veniam
          </p>
        </div>
      </div>
      <div class="lasergood-love__container-center">
        <img
          class="lasergood__story-image"
          src="../images/story-image.png"
          alt="story-image"
        />
      </div>
      <div class="lasergood-love__container-right">
        <img
          class="lasergood-love__right-img"
          src="../images/lasergood-love__right.png"
          alt="lasergood-love__right"
        />
      </div>
    </div>
    <div class="storytelling__container">
      <div class="storytelling-left">
        <img
          class="storytelling-card_img"
          src="../images/storytelling-card.png"
          alt="storytelling-card"
        />
      </div>
      <div class="storytelling-center">
        <img
          class="storytelling-center_img"
          src="../images/storytelling-center_img.png"
          alt="storytelling-center_img"
        />
      </div>
      <div class="storytelling-right">
        <img
          class="storytelling-right_img"
          src="../images/storytelling-right_img.png"
          alt="storytelling-right_img"
        />
      </div>
    </div>
    <div class="fetch_container">
      <div class="fetch-left">
        <img
          class="fetch-left_img"
          src="../images/fetch-left_img.jpg"
          alt="fetch-left"
        />
      </div>
      <div class="fetch-center">
        <img
          class="fetch-center_img"
          src="../images/fetch-center_img.png"
          alt="fetch-center"
        />
      </div>
      <div class="fetch-right">
        <img
          class="fetch-right_img"
          src="../images/fetch-right_img.png"
          alt="fetch-right"
        />
      </div>
    </div>
    <div class="solution_container">
      <div class="solution_container-left">
        <img
          class="solution-left_img"
          src="../images/solution-left.png"
          alt="solution-left"
        />
      </div>
      <div class="solution_container-right">
        <img
          class="solution-right_img"
          src="../images/solution-right.jpg"
          alt="solution-right"
        />
      </div>
    </div>
    <div class="content-plan_container">
      <img
        class="content-plan_img"
        src="../images/content-plan.jpg"
        alt="content-plan"
      />
    </div>
    <div class="questions_container">
      <div class="contact-form">
        <div class="contact-text">
          <p>Залишились питання?</p>
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
    </div>
    <div class="contact-section">
      <div class="cases-link">
        <a href="#"
          >Більше кейсів<img
            class="cases-arrow"
            src="../images/cases-arrow.png"
            alt="cases-arrow"
        /></a>
      </div>
      <div class="making-cool__container">
        <div class="service_container">
          <div class="main-heading">
            <h2>ДАВАЙТЕ РАЗОМ СТВОРИМО ЩОСЬ КРУТЕ</h2>
            <p>
              напишіть нам блаблабла, залиште контакти і наш менеджер зв'яжеться
              з вами:
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
              <img
                class="contact-arrow"
                src="../images/arrow.png"
                alt="arrow"
              />
              <img
                class="contact-arrow"
                src="../images/arrow.png"
                alt="arrow"
              />
              <img
                class="contact-arrow"
                src="../images/arrow.png"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
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
  data() {
    return {
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
.second-page__container {
  overflow-y: scroll;
  width: 100vw;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lasergood__rebrending {
  width: 100%;
  height: 837.5px;
  background-image: url("../images/hero-image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.rebrending-header__container {
  width: 894px;
  height: 210px;
  padding-left: 95px;
  padding-top: 20px;
}
.rebrending__header {
  font-family: "Montserrat";
  font-size: 56px;
  font-weight: 800;
  color: #002d6e;
  text-align: start;
  cursor: none;
}
.client-container {
  width: 100%;
  height: 642.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}

.our_client {
  margin-top: 100px;
  margin-left: 80px;
  text-align: start;
  width: 50%;
}
.our_client__header {
  font-family: "Montserrat";
  font-size: 50px;
  font-weight: 800;
  color: #002d6e;
  text-align: start;
  cursor: none;
}
.our_client--text {
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
  color: #2b2b2b;
  text-align: start;
  cursor: none;
}
.our-client__image__container {
  margin-top: 0;
  width: 25%;
  height: 100%;
}
.our-client__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.salons__container {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #002d6e;
}
.salons__container-header {
  margin-bottom: 0;
  font-family: "Montserrat";
  font-size: 120px;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  cursor: none;
}
.salons__container-text {
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  cursor: none;
}

.lasergood-love__container {
  width: 100%;
  height: 591px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.lasergood-love__container-left {
  width: 25%;
  height: 100%;

  background-color: #002d6e;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.lasergood-love__header {
  padding-left: 110px;
  font-family: "Montserrat";
  font-size: 26px;
  font-weight: 800;
  color: #ffffff;
  text-align: start;
}

.lasergood-love--text__container {
  padding-left: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
}

.lasergood-love--text {
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  text-align: start;
  cursor: none;
}

.lasergood-love__container-center {
  width: 50%;
  height: 100%;
}

.lasergood__story-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lasergood-love__container-right {
  width: 25%;
  height: 100%;
  background-color: #ffffff;
}

.lasergood-love__right-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.storytelling__container {
  width: 100%;
  height: 870px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}
.storytelling-left {
  width: 25%;
  height: 100%;
}
.storytelling-card_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.storytelling-center {
  width: 25%;
  height: 100%;
}
.storytelling-center_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.storytelling-right {
  width: 50%;
  height: 100%;
}
.storytelling-right_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fetch_container {
  width: 100%;
  height: 870px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}
.fetch-left {
  width: 50%;
  height: 100%;
}
.fetch-left_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fetch-center {
  width: 25%;
  height: 100%;
}
.fetch-center_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fetch-right {
  width: 25%;
  height: 100%;
}
.fetch-right_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.solution_container {
  width: 100%;
  height: 782.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}
.solution_container-left {
  position: relative;
  width: 50%;
  height: 100%;
  background-color: #002d6e;
}
.solution_container-right {
  width: 50%;
  height: 100%;
}
.solution-left_img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.solution-right_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content-plan_container {
  width: 100%;
  height: 562.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.questions_container {
  position: relative;
  width: 100%;
  height: 965.6px;
  background-image: url("../images/questions-image.jpg");
  background-size: 100vw;
  background-position: center;
  background-repeat: no-repeat;
}
.contact-form {
  position: absolute;
  bottom: 14%;
  left: 4%;
  width: 86%;
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

.form-fields {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;
  flex-grow: 1;
}

.input-field {
  width: 400px;
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

.contact-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;
  padding: 20px;
}

.cases-link {
  margin-top: 60px;
  text-align: center;
  margin-bottom: 100px;
  position: relative;
  display: inline-block;
}

.cases-link a {
  color: #002d6e;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  position: relative;
}

.cases-link a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #002d6e;
}

.making-cool__container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
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
  margin-bottom: 40px;
}

.main-heading p {
  color: #666;
  font-size: 24px;
  font-family: "Montserrat";
  margin: 10px 0;
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
