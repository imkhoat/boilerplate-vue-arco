<script lang="ts">
import AppLayoutDefault from '@/layouts/app-layout-default.vue'
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const layout = ref()
    const route = useRoute()

    watch(
      () => route.meta?.layout as string | undefined,
      async (metaLayout) => {
        try {
          const component =
            metaLayout &&
            (await import(/* @vite-ignore */ `./layouts/${metaLayout}.vue`))
          layout.value = markRaw(component?.default || AppLayoutDefault)
        } catch (e) {
          layout.value = markRaw(AppLayoutDefault)
        }
      },
      { immediate: true }
    )

    return { layout }
  },
})
</script>

<template>
  <component :is="layout"> <router-view /> </component>
</template>

<style lang="less">
@import '@/assets/less/index.less';
</style>
