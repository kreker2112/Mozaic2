<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img
          src="../images/header-logo.png"
          alt="header-logo"
          class="header-logo"
        />
      </div>
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
  width: 100vw;
  height: 80px;
  padding: 25px 114.5px;
}

.container {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header .logo {
}

.header .nav {
  display: flex;
  flex-direction: row;
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
  color: #002d6e;
}

.header .contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8%;
  gap: 1rem;
}

.header .contact a {
  text-decoration: none;
  color: #333;
}

.header .social-media a {
}
</style>
