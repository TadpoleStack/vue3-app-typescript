<template>
  <div class="home">
    <van-sticky>
      <Header></Header>
    </van-sticky>
    <div class="content">
      <van-grid column-num="3" clickable>
        <van-grid-item
          v-for="item in menuList"
          :key="item.name"
          :icon="item.icon || 'photo-o'"
          :text="item.name"
          :to="item.route"
        />
      </van-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import Header from "@/components/Header.vue";
export default defineComponent({
  name: "Home",
  components: { Header },
  setup() {
    const state = reactive({
      menuList: [],
    });
    onMounted(async () => {
      let menu: any = [
        { route: "/home/vuexdemo", name: "VuexDemo", icon: "tv-o" },
        {
          route: "/home/pannellumdemo",
          name: "PannellumDemo",
          icon: "envelop-o",
        },
        {
          route: "/home/aframedemo",
          name: "AframeDemo",
          icon: "envelop-o",
        },
      ];
      state.menuList = menu;
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  .content {
  }
}
</style>
