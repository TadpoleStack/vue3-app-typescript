import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, Button } from "vant";
import "./index.scss";
export default defineComponent({
  name: "Login",
  components: { Form, Field, Button },
  setup() {
    interface form {
      username: string;
      password: string;
      verifycode?: string;
    }
    const router = useRouter();
    const state = reactive({
      form: {
        username: "",
        password: "",
      },
    });
    const onSubmit = (form: form) => {
      console.info("form", form);
      router.replace("/home");
    };
    return () => (
      <div class="login-page">
        <Form onSubmit={onSubmit} style={{ marginTop: "-100px" }}>
          <Field
            v-model={state.form.username}
            name="username"
            label="用户名"
            placeholder="请填写用户名"
            rules={[{ required: true }]}
          />
          <Field
            v-model={state.form.password}
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            rules={[{ required: true }]}
          />
          <div style="margin: 24px">
            <Button
              round
              block
              size="small"
              type="primary"
              native-type="submit"
            >
              提交
            </Button>
          </div>
        </Form>
      </div>
    );
  },
});
