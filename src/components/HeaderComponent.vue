<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img
            src="../images/header-logo.png"
            alt="header-logo"
            class="header-logo"
          />
        </router-link>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-list__item">
            <router-link to="/services">Послуги</router-link>
          </li>
          <li class="nav-list__item">
            <a><router-link to="/brief">Брифи</router-link></a>
          </li>
          <li class="nav-list__item"><a href="#!">Контакти</a></li>
        </ul>
      </nav>
      <div class="contact">
        <a href="tel:0679077478">067 907 74 78</a>

        <a href="#!"
          ><img src="../images/facebook-icon.png" alt="Facebook"
        /></a>
        <a href="#!"
          ><img src="../images/instagram-icon.png" alt="Instagram"
        /></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
}

.header-logo {
  cursor: pointer;
}

.container {
  margin: 0 auto;
  padding: 25px 124.5px;
  width: 1440px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.header .nav {
  display: flex;
  flex-direction: row;
}

.nav-list {
  list-style: none;
  display: flex;
}

.nav-list__item {
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 400;
  margin-right: 20px;
  text-decoration: none;
  color: #002d6e;
}

.nav-list__item a {
  text-decoration: none;
  color: #002d6e;
}

.header .contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  gap: 50px;
}

.header .contact a {
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: #ff6400;
}
</style>
