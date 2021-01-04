import { defineComponent, computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
import { Sticky, NavBar, Button, Field } from "vant";
export default defineComponent({
  name: "VuexDemo",
  components: { Sticky, NavBar, Button },
  setup() {
    const router = useRouter();
    const store = useStore(key);
    const state = reactive({
      number: 1,
      string: "a",
    });
    const count = computed(() => store.getters["user/count"]);
    const changeCount = (flag: string): void => {
      store.commit(
        "user/count",
        flag === "1" ? count.value + 1 : flag === "2" ? count.value - 1 : 0
      );
    };
    return () => {
      return (
        <div class="vuexdemo">
          <Sticky offset-top="1px">
            <NavBar
              title="VuexDemo"
              left-text="返回"
              left-arrow
              onClickLeft={router.back}
            />
          </Sticky>
          <p>Store count:{count.value}</p>
          <Button onClick={changeCount.bind(null, "1")}>plus</Button>
          <Button onClick={changeCount.bind(null, "2")}>minus</Button>
          <Button onClick={changeCount.bind(null, "0")}>reset</Button>
          <p></p>
          <p>{state.string}</p>
          <Field v-model={state.string}></Field>
          <Button onClick={() => (state.string += "1")}>change-string</Button>
        </div>
      );
    };
  },
});
