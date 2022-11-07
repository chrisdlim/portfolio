<script setup lang="ts">
const navItems = [
  {
    label: "About",
    id: "about",
  },
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
    <a v-for="navItem in navItems" :key="navItem.id" :href="'#' + navItem.id">
      {{ navItem.label }}
    </a>
  </div>
</template>

<style scoped>
.nav {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 1rem;
  overflow-x: hidden;
  padding-top: 60px;
}

.nav a {
  font-size: 1rem;
  display: block;
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
