<template>
  <div class="login-form">
    <div class="login-form__header">
      <h2 class="fil-title">Sign In</h2>
      <p class="fil-subtitle">
        or
        <router-link class="fil-link" to="/auth/register"
          >create an account</router-link
        >
      </p>
    </div>
    <div class="login-form__form">
      <a-form v-model="formValid" layout="vertical">
        <a-form-item field="email" label="Email/Username">
          <a-input
            v-model="form.email"
            placeholder="your@email.com"
            size="large"
            class="fil-input"
          />
        </a-form-item>
        <a-form-item field="password" label="Password">
          <a-input
            v-model="form.password"
            placeholder="******"
            size="large"
            class="fil-input"
          />
        </a-form-item>
        <a-form-item field="isRemember">
          <a-checkbox v-model="form.isRemember" class="fil-input">
            Remember me?
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" long size="large" class="fil-btn">Signin</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

interface LoginForm {
  email: String
  password: String
  isRemember: Boolean
}

const form = reactive<LoginForm>({
  email: '',
  password: '',
  isRemember: true,
})

const formValid = ref(false)
</script>
<style lang="less">
.login-form {
  &__header {
    margin-bottom: 26px;
  }
  &__header .fil-title {
    margin-bottom: 6px;
  }
  &__header .fil-subtitle a {
    text-decoration: none;
  }
}
</style>
