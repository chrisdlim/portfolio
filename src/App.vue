<script setup lang="ts">
import SideNav from "./components/side-nav.vue";
</script>

<template>
  <div class="main">
    <span>
      <SideNav />
    </span>
    <span>
      <router-view />
    </span>
  </div>
</template>
<style scoped>
.main {
  grid-template-columns: 1fr 2fr;
  display: grid;
}

@media (max-width: 480px) {
  .main {
    display: block;
  }
}
</style>
