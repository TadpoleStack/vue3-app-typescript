<template>
  <div class="vuexdemo">
    <van-sticky offset-top="1px">
      <van-nav-bar
        title="VuexDemo"
        left-text="返回"
        left-arrow
        @click-left="router.back()"
      />
    </van-sticky>
    <p>Store count:{{ count }}</p>
    <van-button @click="changeCount('1')">plus</van-button>
    <van-button @click="changeCount('2')">minus</van-button>
    <van-button @click="changeCount('0')">reset</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
export default defineComponent({
  name: "VuexDemo",
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
