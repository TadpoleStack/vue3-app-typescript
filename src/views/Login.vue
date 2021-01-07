<template>
  <div class="login-page">
    <Form @submit="onSubmit" :style="{ marginTop: '-100px' }">
      <Field
        v-model="form.username"
        name="username"
        label="用户名"
        placeholder="请填写用户名"
        :rules="[{ required: true }]"
      />
      <Field
        v-model="form.password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true }]"
      />
      <div style="margin: 24px">
        <Button round block size="small" type="primary" native-type="submit">
          提交
        </Button>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, Button } from "vant";
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
    return {
      ...toRefs(state),
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
