<template>
  <div class="header" :style="styleObj">Header</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "Header",
  props: {
    height: {
      type: String,
      default: "50px",
    },
  },
  setup(props) {
    const styleObj = computed(() => {
      return { width: "100%", height: props.height };
    });
    return {
      styleObj,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  line-height: 50px;
}
</style>
