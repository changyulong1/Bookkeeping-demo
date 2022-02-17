<template>
  <div class="screen">
    100
  </div>
</template>

<script>
export default {
  name: "Screen"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/font.scss";
.screen {
  text-align: right;
  line-height: 64px;
  font-size: 36px;
  color: #333333;
  height: 64px;
  padding: 0 10px;
  box-shadow: inset 0px 3px 3px $color-shadow;
}
</style>