import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { bootstrapIcons } from "./bootstrap-icons";

const app = createApp(App);
bootstrapIcons(app);
app.use(createPinia());
app.use(router);

app.mount("#app");
