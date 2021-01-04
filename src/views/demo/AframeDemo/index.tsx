import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import "aframe";
import { Sticky, NavBar } from "vant";
import "./index.scss";
export default defineComponent({
  name: "AframeDemo",
  components: { Sticky, NavBar },
  setup() {
    const router = useRouter();
    onMounted(() => {
      // console.info(Aframe);
    });
    return () => (
      <div class="aframedemo">
        <Sticky>
          <NavBar
            style="height: 50px"
            title="AframeDemo"
            left-text="返回"
            left-arrow
            onClickLeft={router.back}
          />
        </Sticky>
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
    );
  },
});
