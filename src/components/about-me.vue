<script setup lang="ts"></script>

<template>
  <div id="about" class="about">
    <div>
      <!-- TODO: Add some portfolio icon of myself here -->
      <h1 class="primary">Chris Lim</h1>
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
  line-height: 1.5;
  height: 100vh;
  display: flex;
  place-items: center;
}

.logo {
  margin: 0 2rem 0 0;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  /* .about h1,
  .about h3 {
    text-align: left;
  } */
}
</style>
