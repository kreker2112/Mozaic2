<template>
  <section class="story">
    <div class="container">
      <h2>Якийсь сторітелінг</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="story-details">
        <img src="../images/story-image.png" alt="Story-Image" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesStory",
};
</script>

<style scoped>
.story {
  padding: 50px 0;
}

.story h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.story-details {
  display: flex;
  align-items: center;
}

.story-details img {
  margin-right: 20px;
}
</style>
