<template>
  <HeaderComponent />
  <div class="container">
    <header>
      <div class="brief-img__container">
        <img
          class="brief__img"
          src="../images/brief__img.png"
          alt="brief__img"
        />
      </div>
      <p class="description">
        MOSAIC - digital-агенція, яке забезпечує клієнтам бізнес-результати<br />
        Наш підхід:<br />
        - Створення комплексної digital стратегії;<br />
        - Розуміння аналітичних даних;<br />
        - Збільшення продажів вашого товару або послуги;<br />
        - Підвищення впізнаваності бренду.
      </p>
      <p class="description-small">
        Витратьте 5 хвилин та заповніть бриф, щоб отримати точний підрахунок.<br />
        Або залиште контакти і наш менеджер зв'яжеться з вами:
      </p>
    </header>

    <form class="contact-info__form" @submit.prevent="handleSubmit">
      <div class="contact-info">
        <input
          type="text"
          v-model="contactInfo.name"
          placeholder="Ім'я"
          required
        />
        <input
          type="tel"
          v-model="contactInfo.phone"
          placeholder="Телефон"
          required
        />
        <div class="submit-link">
          <a @click="submitContactForm('contact')"
            >Відправити<img
              class="cases-arrow"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
        </div>
      </div>

      <div class="buttons">
        <button
          type="button"
          @click="toggleContactOption('Запакуйте мій бренд')"
          :class="{ active: isContactOptionActive('Запакуйте мій бренд') }"
        >
          Запакуйте мій бренд
        </button>
        <button
          type="button"
          @click="toggleContactOption('Хочу логотип')"
          :class="{ active: isContactOptionActive('Хочу логотип') }"
        >
          Хочу логотип
        </button>
        <button
          type="button"
          @click="toggleContactOption('Просувайте мій бізнес')"
          :class="{ active: isContactOptionActive('Просувайте мій бізнес') }"
        >
          Просувайте мій бізнес
        </button>
        <button
          type="button"
          @click="toggleContactOption('Треба крутий дизайн')"
          :class="{ active: isContactOptionActive('Треба крутий дизайн') }"
        >
          Треба крутий дизайн
        </button>
        <button
          type="button"
          @click="toggleContactOption('Зробіть сайт, що продає')"
          :class="{ active: isContactOptionActive('Зробіть сайт, що продає') }"
        >
          Зробіть сайт, що продає
        </button>
      </div>

      <section class="strategy">
        <h2>МЕНЕ ЦІКАВИТЬ РОЗРОБКА МАРКЕТИНГОВОЇ СТРАТЕГІЇ</h2>

        <label>
          Прикріпіть посилання на сайт та всі соцмережі, якщо вони є*
          <input
            type="text"
            v-model="strategy.links"
            placeholder="Ваша відповідь"
            required
          />
        </label>

        <label>
          Бажаний результат після впровадження маркетингової стратегії?*
          <div class="options">
            <button
              type="button"
              @click="
                toggleStrategyOption(
                  'Введення на ринок нового продукту/послуги',
                )
              "
              :class="{
                active: isStrategyOptionActive(
                  'Введення на ринок нового продукту/послуги',
                ),
              }"
            >
              Введення на ринок нового продукту/послуги
            </button>
            <button
              type="button"
              @click="toggleStrategyOption('Збільшення продажів на Х%')"
              :class="{
                active: isStrategyOptionActive('Збільшення продажів на Х%'),
              }"
            >
              Збільшення продажів на Х%
            </button>
            <button
              type="button"
              @click="toggleStrategyOption('Підвищення лояльності клієнтів')"
              :class="{
                active: isStrategyOptionActive(
                  'Підвищення лояльності клієнтів',
                ),
              }"
            >
              Підвищення лояльності клієнтів
            </button>
            <button
              type="button"
              @click="toggleStrategyOption('Розширення географії присутності')"
              :class="{
                active: isStrategyOptionActive(
                  'Розширення географії присутності',
                ),
              }"
            >
              Розширення географії присутності
            </button>
          </div>
          <input
            type="text"
            v-model="strategy.otherResult"
            placeholder="Інше"
          />
        </label>

        <label>
          Назвіть декілька основних конкурентів (бажано з посиланнями на
          сайт/сторінку)
          <input
            type="text"
            v-model="strategy.competitors"
            placeholder="Ваша відповідь"
          />
        </label>
        <div class="contacts-poistion_container">
          <label>
            Ваша посада*
            <input
              type="text"
              v-model="strategy.position"
              required
              placeholder="Ваша відповідь"
            />
          </label>

          <label>
            Номер телефону (бажано той, на якому є telegram)*
            <input
              type="tel"
              v-model="strategy.telegramPhone"
              placeholder="Ваша відповідь"
              required
            />
          </label>
        </div>
        <label>
          Коли вам буде зручно поспілкуватися? Вкажіть один або декілька часових
          проміжків
          <input
            type="text"
            v-model="strategy.availability"
            placeholder="Ваша відповідь"
          />
        </label>

        <div class="submit-link__strategy">
          <a @click="submitContactForm('strategy')"
            >Відправити<img
              class="cases-arrow"
              src="../images/cases-arrow.png"
              alt="cases-arrow"
          /></a>
        </div>
      </section>
    </form>
  </div>
  <SecondFooter />
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import SecondFooter from "../components/SecondFooter";

export default {
  name: "BriefPage",
  components: {
    HeaderComponent,
    SecondFooter,
  },
  data() {
    return {
      contactInfo: {
        name: "",
        phone: "",
        options: [],
      },
      strategy: {
        links: "",
        competitors: "",
        position: "",
        telegramPhone: "",
        availability: "",
        otherResult: "",
        options: [],
      },
    };
  },
  methods: {
    toggleContactOption(option) {
      const index = this.contactInfo.options.indexOf(option);
      if (index > -1) {
        this.contactInfo.options.splice(index, 1);
      } else {
        this.contactInfo.options.push(option);
      }
    },
    isContactOptionActive(option) {
      return this.contactInfo.options.includes(option);
    },
    toggleStrategyOption(option) {
      const index = this.strategy.options.indexOf(option);
      if (index > -1) {
        this.strategy.options.splice(index, 1);
      } else {
        this.strategy.options.push(option);
      }
    },
    isStrategyOptionActive(option) {
      return this.strategy.options.includes(option);
    },
    submitContactForm(type) {
      let formData = {};
      if (type === "contact") {
        formData = {
          ...this.contactInfo,
        };
      } else if (type === "strategy") {
        formData = {
          ...this.strategy,
        };
      }
      console.log("Form submitted", formData);
      // отправка данных на сервер
      // axios.post('/submit', formData)
      //   .then(response => console.log(response))
      //   .catch(error => console.error(error));
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}

.brief-img__container {
  margin-left: 12%;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100vw;
  margin-bottom: 20px;
}

.brief__img {
  width: 65%;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.description {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  margin-top: 5%;
  font-size: 20px;
  color: #2b2b2b;
  line-height: 1.5;
}
.description-small {
  margin-top: 5%;
  font-size: 20px;
  color: #2b2b2b;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-bottom: 10%;
}

.contact-info input {
  width: 350px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
}

.contact-info input::placeholder {
  font-style: italic;
  opacity: 0.7;
}

.submit-link {
  text-align: center;
  position: relative;
  display: flex;
  cursor: pointer;
}

.submit-link a {
  color: #002d6e;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
}

.submit-link a::after {
  content: "";
  position: absolute;
  bottom: 1%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #002d6e;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10%;
}

.buttons button {
  padding: 5px;
  background-color: #fff;
  border: 1px солид #2b2b2b;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "Montserrat";
  font-size: 18px;
}

.buttons button:hover {
  background-color: #002d6e;
  color: white;
}

.buttons button.active {
  background-color: #002d6e;
  color: white;
}

.strategy {
  margin-bottom: 13%;
}

.strategy h2 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 7%;
  font-family: "Montserrat";
  color: #002d6e;
  font-size: 24px;
}

.strategy label {
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 18px;
  font-family: "Montserrat";
}

.strategy .options {
  margin-top: 2%;
  display: flex;
  flex-wrap: wrap;
}

.strategy .options button {
  margin: 5px;
  padding: 10px;
  background-color: #fff;
  color: #002d6e;
  border: 1.5px solid #002d6e;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.strategy .options button:hover {
  background-color: #002d6e;
  color: white;
}

.strategy .options button.active {
  background-color: #002d6e;
  color: white;
}

.strategy input {
  margin-top: 20px;
  width: 350px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
}

.strategy input::placeholder {
  font-style: italic;
  opacity: 0.7;
}

.submit-link__strategy {
  margin-top: 5%;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.submit-link__strategy a {
  color: #002d6e;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
}

.contacts-poistion_container {
  display: flex;
  gap: 10%;
}

.submit-link__strategy a::after {
  content: "";
  position: absolute;
  bottom: 1%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #002d6e;
}
</style>
