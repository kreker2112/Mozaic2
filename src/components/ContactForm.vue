<template>
  <section class="contact-form">
    <div class="container">
      <h2>Залишились питання? Давайте обговоримо</h2>
      <form action="#" method="post">
        <input type="text" name="name" placeholder="Ваше ім'я" />
        <input type="text" name="phone" placeholder="Телефон" />
        <button type="submit">Відправити</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
.contact-form {
  padding: 50px 0;
}

.contact-form h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-form input {
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
}

.contact-form button {
  padding: 10px 20px;
  background: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
