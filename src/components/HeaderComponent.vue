<template>
  <header class="header">
    <div class="container">
      <div class="logo">ЛОГО</div>
      <nav class="nav">
        <ul>
          <li><a href="#">Послуги</a></li>
          <li><a href="#">Брифи</a></li>
          <li><a href="#">Контакти</a></li>
        </ul>
      </nav>
      <div class="contact">
        <a href="tel:0679077478">067 907 74 78</a>
        <div class="social-media">
          <a href="#"
            ><img src="../images/facebook-icon.png" alt="Facebook"
          /></a>
          <a href="#"
            ><img src="../images/instagram-icon.png" alt="Instagram"
          /></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.header {
  background: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.header .logo {
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
}

.header .nav {
  display: inline-block;
  margin-left: 20px;
}

.header .nav ul {
  list-style: none;
  display: flex;
}

.header .nav ul li {
  margin-right: 20px;
}

.header .nav ul li a {
  text-decoration: none;
  color: #333;
}

.header .contact {
  float: right;
}

.header .contact a {
  text-decoration: none;
  color: #333;
  margin-right: 10px;
}

.header .social-media a {
  margin-left: 5px;
}
</style>
