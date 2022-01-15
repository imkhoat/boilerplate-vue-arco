<template>
Register page
</template>
<script lang="ts">
import { useAuthStore } from "@/modules/auth/store";
export default{
  setup(){
    const user = useAuthStore()
  }
}
</script>