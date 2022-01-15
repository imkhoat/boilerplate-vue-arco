<template>
  <signin-form></signin-form>
</template>
<script lang="ts">
import SigninForm from '@/modules/auth/components/signin-form.vue'

import { useAuthStore } from '@/modules/auth/store'

export default {
  components: { SigninForm },
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
