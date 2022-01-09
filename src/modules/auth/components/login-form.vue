<template>
  <div class="login-form">
    <div class="login-form__header">
      <h2 class="fil-title">Sign in</h2>
      <p class="fil-subtitle">
        or
        <router-link class="fil-link" to="/auth/register"
          >create an account</router-link
        >
      </p>
    </div>
    <div class="login-form__form">
      <a-form layout="vertical">
        <a-form-item field="name" label="Fullname">
          <a-input
            v-model="form.name"
            placeholder="Ha Minh Tuan..."
            size="large"
          />
        </a-form-item>
        <a-form-item field="email" label="Email">
          <a-input
            v-model="form.email"
            placeholder="your@email.com..."
            size="large"
          />
        </a-form-item>
        <a-form-item field="isRead">
          <a-checkbox v-model="form.password">
            I have read the manual
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" long size="large">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

interface LoginForm {
  name: String
  email: String
  password: String
  confirmPassword: String
}

const form = reactive<LoginForm>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})
</script>
<style lang="less">
.login-form {
  &__header {
    margin-bottom: 28px;
  }
}
</style>
