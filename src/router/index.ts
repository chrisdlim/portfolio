import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to, _from, savedPos) => {
    if (to.hash) {
      console.log(to.hash, to.hash.replace(/#/, ""));
      const element = document.getElementById(to.hash.replace(/#/, ""));
      console.log(element);
      if (element && element.scrollIntoView) {
        element.scrollIntoView({ block: "end", behavior: "smooth" });
      }
      return { el: to.hash };
    } else if (savedPos) {
      return savedPos;
    }
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home-page.vue"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../components/unknown-404.vue"),
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
