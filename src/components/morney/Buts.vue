<template>
  <div class="buts">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>+</button>
    <button>删除</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>-</button>
    <button>清空</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>x</button>
    <button class="ok">ok</button>
    <button>0</button>
    <button>.</button>
    <button>%</button>
    <button>+</button>
  </div>
</template>

<script>
export default {
  name: "Buts"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/font.scss";
.buts {
  @extend %clearfix;

  > button {
    width: 20%;
    height: 64px;
    float: left;
    border: none;

    &.ok {
      height: 128px;
      float: right;
    }

    $color: #f2f2f2;
    //scssS使用for循环
    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        background: darken($color, 4%*$i);
      }
    }
  }

}
</style>