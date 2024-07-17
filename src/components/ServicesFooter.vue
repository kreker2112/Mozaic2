<template>
  <footer class="footer">
    <div class="container">
      <h2>Давайте разом створимо щось круте</h2>
      <form action="#" method="post">
        <input type="text" name="name" placeholder="Ваше ім'я" />
        <input type="text" name="phone" placeholder="Телефон" />
        <button type="submit">Відправити</button>
      </form>
      <div class="footer-contact">
        <a href="tel:08001234567">0 800 123 45 67</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ServicesFooter",
};
</script>

<style scoped>
.footer {
  padding: 50px 0;
  background: #333;
  color: #fff;
}

.footer h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.footer form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer input {
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
}

.footer button {
  padding: 10px 20px;
  background: #fff;
  color: #333;
  border: none;
  cursor: pointer;
}

.footer-contact {
  text-align: center;
}

.footer-contact a {
  color: #fff;
  text-decoration: none;
}
</style>
