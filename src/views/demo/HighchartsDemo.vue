<template>
  <div class="highcharts-demo">
    <Sticky>
      <NavBar
        style="height: 50px"
        title="HighchartsDemo"
        left-text="返回"
        left-arrow
        @click-left="router.back()"
      />
    </Sticky>
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Sticky, NavBar } from "vant";
import * as Highcharts from "highcharts";
export default defineComponent({
  name: "HighchartsDemo",
  components: { Sticky, NavBar },
  setup() {
    const initCharts = (): void => {
      // let chart = Highcharts.chart("container", {
      //   chart: {
      //     type: "bar",
      //   },
      //   title: {
      //     text: "我的第一个图表",
      //   },
      //   xAxis: {
      //     categories: ["苹果", "香蕉", "橙子"],
      //   },
      //   yAxis: {
      //     title: {
      //       text: "吃水果个数",
      //     },
      //   },
      //   series: [
      //     { name: "小明", data: [1, 0, 4] },
      //     { name: "小红", data: [5, 7, 3] },
      //   ],
      // });
    };
    onMounted(() => {
      console.info(Highcharts);
      initCharts();
    });
    return {
      router: useRouter(),
    };
  },
});
</script>

<style lang="scss" scoped>
.highcharts-demo {
  #container {
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>
