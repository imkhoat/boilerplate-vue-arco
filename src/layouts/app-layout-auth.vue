<template>
  <a-row class="layout-auth">
    <a-col class="slide-section" :span="16">
      <div class="cover-image"></div>
    </a-col>
    <a-col class="page-component" :span="8">
      <slot></slot>
    </a-col>
  </a-row>
</template>
<script lang="ts">
export default {}
</script>

<style lang="less">
.layout-auth {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.cover-image {
  background-image: url('https://app.crypterium.com/static/images/sign/welcomeCarousel/coinOnTrack.png');
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-height: 200px;
}
.slide-section {
  background-color: #262a3c;
  height: 100%;
}
.page-component {
  padding: 32px;
}
</style>
