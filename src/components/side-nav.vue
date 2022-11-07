<script setup lang="ts">
const navItems = [
  {
    label: "Experience",
    id: "experience",
  },
  {
    label: "Skills",
    id: "skills",
  },
  {
    label: "Certifications",
    id: "certifications",
  },
];
</script>
<template>
  <div class="nav">
    <a href="#about" class="cl-nav">
      <h1>CL</h1>
    </a>
    <a
      v-for="navItem in navItems"
      :key="navItem.id"
      :href="'/#' + navItem.id"
      :to="'#' + navItem.id"
    >
      {{ navItem.label }}
    </a>
  </div>
</template>

<style scoped>
.cl-nav {
  color: var(--color-text);
}

.nav {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 1rem;
  overflow-x: hidden;
  padding-top: 1rem;
}

.nav a {
  font-size: 1rem;
  display: block;
  padding: 0rem 1rem;
}

/* nav a.router-link-exact-active {
  color: var(--color-text);
} */

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

@media (max-width: 480px) {
  .nav {
    width: 0%;
  }
}
</style>
