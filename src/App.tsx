import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import "./App.scss";
export default defineComponent({
  name: "App",
  setup() {
    (window as any).router = useRouter();
    return () => <router-view class="router-view" />;
  },
});
