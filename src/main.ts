import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store, { key } from "./store";
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App);
app.use(store, key).use(router).use(Vant).mount("#app");
