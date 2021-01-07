<template>
  <div class="home">
    <Sticky>
      <Header></Header>
    </Sticky>
    <div class="content">
      <Grid column-num="3" clickable>
        <GridItem
          v-for="item in menuList"
          :key="item.name"
          :icon="item.icon || 'photo-o'"
          :text="item.name"
          :to="item.route"
        />
      </Grid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import Header from "@/components/Header/index";
import { Sticky, Grid, GridItem } from "vant";
interface menuItem {
  route: string;
  name: string;
  icon: string;
}
export default defineComponent({
  name: "Home",
  components: { Header, Sticky, Grid, GridItem },
  setup() {
    const state: any = reactive({
      menuList: [],
    });
    onMounted(async () => {
      const menu: Array<menuItem> = [
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
        {
          route: "/home/highchartsdemo",
          name: "HighchartsDemo",
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

<style lang="scss" scoped></style>
