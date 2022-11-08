<script lang="ts">
export default {
  name: "side-nav",
  data() {
    return {
      navItems: [
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
      ],
      isShowMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
      const width = this.isShowMenu ? "150px" : "0px";
      const slidingMenu = document.getElementById("sliding-menu");
      if (slidingMenu) {
        slidingMenu.style.width = width;
      }
    },
  },
};
</script>

<template>
  <div class="menu">
    <font-awesome-icon
      class="open-button"
      icon="fa-solid fa-bars"
      size="lg"
      @click="toggleMenu"
    />
    <div id="sliding-menu">
      <font-awesome-icon
        class="close-button"
        icon="fa-solid fa-window-close"
        size="md"
        @click="toggleMenu"
      />
      <br />
      <a
        v-for="navItem in navItems"
        :key="navItem.id"
        :href="'/#' + navItem.id"
        :to="'#' + navItem.id"
      >
        {{ navItem.label }}
      </a>
    </div>
  </div>
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

.menu {
  visibility: hidden;
}

.nav {
  height: 100%;
  position: fixed;
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

@media (max-width: 480px) {
  .nav {
    visibility: hidden;
  }

  .menu {
    visibility: visible;
    height: 100%;
    position: fixed;
    top: 0;
    left: 1rem;
    z-index: 1;
    overflow-x: hidden;
    padding-top: 1rem;
  }

  .open-button,
  .close-button {
    cursor: pointer;
  }

  #sliding-menu {
    height: 100%;
    position: fixed;
    left: 1rem;
    overflow-x: hidden;
    padding-top: 1rem;
    top: 0;
    width: 150px;
    z-index: 1;
    background: black;
    transition: 0.5s;
  }

  #sliding-menu a {
    font-size: 1rem;
    display: block;
    padding: 0rem 1rem;
  }

  .close-button {
    padding-right: 1rem;
    float: right;
  }
}
</style>
