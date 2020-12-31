<template>
  <div class="login-page">
    <van-form @submit="onSubmit" :style="{ marginTop: '-100px' }">
      <van-field
        v-model="form.username"
        name="username"
        label="用户名"
        placeholder="请填写用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 24px">
        <van-button
          round
          block
          size="small"
          type="primary"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Login",
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
