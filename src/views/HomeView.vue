<script setup lang="ts"></script>

<template>
  <main class="home-page">
    <a-button type="primary">
      <template #default>Delete</template>
    </a-button>
    <a-badge :count="9">
      <a-avatar shape="square" />
    </a-badge>
  </main>
</template>
<style lang="less">
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
