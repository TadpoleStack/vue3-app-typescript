import { defineComponent, computed } from "vue";
import "./index.scss";
export default defineComponent({
  name: "Header",
  props: {
    height: {
      type: String,
      default: "50px",
    },
  },
  setup(props) {
    const styleObj: any = computed(() => {
      return { width: "100%", height: props.height };
    });
    return () => {
      return (
        <div class="header" style={styleObj}>
          Header
        </div>
      );
    };
  },
});
