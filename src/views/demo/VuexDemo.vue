<template>
  <div class="vuexdemo">
    <Sticky offset-top="1px">
      <NavBar
        title="VuexDemo"
        left-text="返回"
        left-arrow
        @click-left="router.back()"
      />
    </Sticky>
    <p>Store count:{{ count }}</p>
    <Button @click="changeCount('1')">plus</Button>
    <Button @click="changeCount('2')">minus</Button>
    <Button @click="changeCount('0')">reset</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
import { Sticky, NavBar, Button } from "vant";
export default defineComponent({
  name: "VuexDemo",
  components: { Sticky, NavBar, Button },
  setup() {
    const router = useRouter();
    const store = useStore(key);
    const count = computed(() => store.getters["user/count"]);
    const changeCount = (flag: string): void => {
      store.commit(
        "user/count",
        flag === "1" ? count.value + 1 : flag === "2" ? count.value - 1 : 0
      );
    };
    return {
      router,
      count,
      changeCount,
    };
  },
});
</script>
