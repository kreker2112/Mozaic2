<template>
  <section class="clients">
    <div class="container">
      <h2>Хто наш клієнт</h2>
      <p>
        Мережі центрів лазерної епіляції та косметології, які перебувають на
        етапі ребрендингу.
      </p>
      <div class="client-info">
        <img src="../images/client-card.png" alt="Client Card" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="client-count">
        <h3>8 салонів по всій Україні</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesClients",
};
</script>

<style scoped>
.clients {
  padding: 50px 0;
}

.clients h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.client-info {
  display: flex;
  align-items: center;
}

.client-info img {
  margin-right: 20px;
}

.client-count {
  text-align: center;
}
</style>
