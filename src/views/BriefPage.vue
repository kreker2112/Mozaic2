<template>
  <HeaderComponent />
  <div class="container">
    <header>
      <h1>БРИФ НА ВИКОНАННЯ РОБІТ</h1>
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

    <form @submit.prevent="handleSubmit">
      <div class="contact-info">
        <input type="text" v-model="name" placeholder="Ім'я" required />
        <input type="tel" v-model="phone" placeholder="Телефон" required />
        <button type="submit">Відправити</button>
      </div>

      <div class="buttons">
        <button type="button">Запалюйте мій бренд</button>
        <button type="button">Хочу логотип</button>
        <button type="button">Просувайте мій бізнес</button>
        <button type="button">Треба крутий дизайн</button>
        <button type="button">Зробіть сайт, що продає</button>
      </div>

      <section class="strategy">
        <h2>МЕНЕ ЦІКАВИТЬ РОЗРОБКА МАРКЕТИНГОВОЇ СТРАТЕГІЇ</h2>

        <label>
          Прикріпіть посилання на сайт та всі соцмережі, якщо вони є*
          <input type="text" v-model="links" required />
        </label>

        <label>
          Бажаний результат після впровадження маркетингової стратегії?*
          <div class="options">
            <button type="button">
              Введення на ринок нового продукту/послуги
            </button>
            <button type="button">Збільшення продажів на Х%</button>
            <button type="button">Підвищення лояльності клієнтів</button>
            <button type="button">Розширення географії присутності</button>
          </div>
        </label>

        <label>
          Назвіть декілька основних конкурентів (бажано з посиланнями на
          сайт/сторінку)
          <input type="text" v-model="competitors" />
        </label>

        <label>
          Ваша посада*
          <input type="text" v-model="position" required />
        </label>

        <label>
          Номер телефону (бажано той, на якому є telegram)*
          <input type="tel" v-model="telegramPhone" required />
        </label>

        <label>
          Коли вам буде зручно поспілкуватися? Вкажіть один або декілька часових
          проміжків
          <input type="text" v-model="availability" />
        </label>

        <button type="submit">відправити</button>
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
      name: "",
      phone: "",
      links: "",
      competitors: "",
      position: "",
      telegramPhone: "",
      availability: "",
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic
      console.log("Form submitted", this.$data);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.description,
.description-small {
  font-size: 16px;
  color: #333;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.contact-info input {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.contact-info button {
  padding: 10px 20px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.buttons button {
  padding: 10px;
  background-color: #fff;
  border: 1px solid #0074d9;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buttons button:hover {
  background-color: #0074d9;
  color: white;
}

.strategy {
  margin-bottom: 20px;
}

.strategy h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.strategy label {
  display: block;
  margin-bottom: 10px;
}

.strategy .options {
  display: flex;
  flex-wrap: wrap;
}

.strategy .options button {
  margin: 5px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #0074d9;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.strategy .options button:hover {
  background-color: #0074d9;
  color: white;
}

.strategy input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
}

.strategy button {
  padding: 10px 20px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
