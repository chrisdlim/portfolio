<script setup lang="ts"></script>

<template>
  <div id="about" class="about">
    <div class="avatar">
      <img src="../assets/avatar.jpg" />
    </div>
    <div>
      <h1 class="primary name">Chris Lim</h1>
      <h3>Senior Full Stack Engineer</h3>
      <p>Some random info about me</p>
      <p>Bunch of hooplah</p>
      <p>blah blah blah</p>
      <p>Some random info about me</p>
      <p>Some random info about me</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  line-height: 1.5;
  height: 100vh;
  display: flex;
  place-items: center;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.avatar {
  width: 250px;
  height: 250px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  font-style: italic;
  font-weight: bold;
}

@media (min-width: 1024px) {
  /* .about h1,
  .about h3 {
    text-align: left;
  } */
}

@media (max-width: 500px) {
  .avatar {
    height: 125px;
    width: 125px;
    margin: 0 auto;
  }

  .about {
    display: inline-block;
  }

  .name {
    text-align: center;
  }
}
</style>
