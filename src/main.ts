import { createApp } from "vue";
import App from "./App";
import "./registerServiceWorker";
import router from "./router";
import store, { key } from "./store";

const app = createApp(App);
app.use(store, key).use(router).mount("#app");
