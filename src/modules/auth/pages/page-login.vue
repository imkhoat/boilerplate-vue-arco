<template>
  <login-form></login-form>
</template>
<script lang="ts">
import LoginForm from '@/modules/auth/components/login-form.vue'

import { useAuthStore } from '@/modules/auth/store'

export default {
  components: { LoginForm },
  setup() {
    const user = useAuthStore()
  },
}
</script>
<style lang="less">
.page-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
