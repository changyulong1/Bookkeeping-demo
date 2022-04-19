<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import '~@/assets/style/font.scss';
body{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  line-height: 1.5;
  font-family: $font-hai;
  background: #F5F5F5;
  max-width: 800px;
  margin: 0 auto;
  &{
    overflow: hidden;
  }
}

</style>
