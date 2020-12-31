<template>
  <div class="pannellumdemo">
    <Sticky>
      <NavBar
        style="height: 50px"
        title="PannellumDemo"
        left-text="返回"
        left-arrow
        @click-left="router.back()"
      />
    </Sticky>
    <div id="panorama" class="panorama"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import "pannellum";
import "pannellum/build/pannellum.css";
import { Sticky, NavBar } from "vant";
export default defineComponent({
  name: "PannellumDemo",
  components: { Sticky, NavBar },
  setup() {
    const router = useRouter();
    const pannellum = (window as any).pannellum;
    const initPannellum = (): void => {
      pannellum.viewer("panorama", {
        type: "equirectangular",
        panorama: "https://pannellum.org/images/alma.jpg",
        autoLoad: true,
      });
    };
    onMounted(() => {
      initPannellum();
    });
    return {
      router,
    };
  },
});
</script>

<style lang="scss" scoped>
.pannellumdemo {
  .panorama {
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>
