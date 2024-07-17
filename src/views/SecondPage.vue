<template>
  <div class="second-page__container">
    <HeaderComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";

export default {
  name: "ServicesPage",
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped>
.second-page__container {
  overflow-y: scroll !important;
  width: 100vw;
}

.header {
  background: #f8f8f8;
  padding: 20px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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

.hero {
  background: #f8f8f8;
  text-align: center;
}

.hero h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.clients h2,
.story h2,
.solution h2,
.content-plan h2,
.contact-form h2,
.footer h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.client-info,
.story-details {
  display: flex;
  align-items: center;
}

.client-info img,
.story-details img {
  margin-right: 20px;
}

.client-count,
.footer-contact {
  text-align: center;
}

.contact-form form,
.footer form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-form input,
.footer input {
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
}

.contact-form button,
.footer button {
  padding: 10px 20px;
  background: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

.footer {
  background: #333;
  color: #fff;
}

.footer a {
  color: #fff;
  text-decoration: none;
}
</style>
