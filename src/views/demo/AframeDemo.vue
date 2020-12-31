<template>
  <div class="aframedemo">
    <van-sticky>
      <van-nav-bar
        style="height: 50px"
        title="AframeDemo"
        left-text="返回"
        left-arrow
        @click-left="router.back()"
      />
    </van-sticky>
    <div class="aframe-box">
      <a-scene>
        <a-assets>
          <img
            id="city"
            src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg"
          />
        </a-assets>
        <a-sky id="image-360" radius="10" src="#city"></a-sky>
      </a-scene>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import Aframe from "aframe";
export default defineComponent({
  name: "AframeDemo",
  setup() {
    const router = useRouter();
    onMounted(() => {
      console.info(Aframe);
    });
    return {
      router,
    };
  },
});
</script>

<style lang="scss" scoped>
.aframedemo {
  .aframe-box {
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>
