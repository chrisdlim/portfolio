<script setup lang="ts">
import SideNav from "./components/side-nav.vue";
import AboutMe from "./components/about-me.vue";
import ResumeView from "./components/resume/resume-view.vue";
</script>

<template>
  <div class="main">
    <span>
      <SideNav />
    </span>
    <span>
      <AboutMe />
      <ResumeView />
    </span>
  </div>
</template>
<style scoped>
.main {
  grid-template-columns: 1fr 1fr;
  display: grid;
}

@media (max-width: 480px) {
  .main {
    display: block;
  }
}
</style>
