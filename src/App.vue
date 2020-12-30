<template>
  <router-view class="router-view" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "App",
  setup() {
    (window as any).router = useRouter();
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.router-view {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
