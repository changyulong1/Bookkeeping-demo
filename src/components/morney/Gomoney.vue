<template>
  <div class="go-money">
    <ul>
      <li :class="type === `+` && `selected`" @click="selectType('+')">收入</li>
      <li :class="type === `-` && `selected`" @click="selectType('-')">支出</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
@Component
export default class Gomoney extends Vue {
  type = '+';
  selectType(type:string) {
    if (type !== "+" && type !== "-") {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
}
</script>

<style lang="scss" scoped>
.go-money {
  background: #C4C4C4;
  height: 64px;

  ul {
    display: flex;
    justify-content: flex-start;
    height: 100%;

    li {
      flex: 1;
      background: #C4C4C4;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected {
        &:before {
          content: "";
          display: block;
          width: 100%;
          position: absolute;
          height: 4px;
          background: #333333;
          bottom: 0;
        }
      }
    }
  }
}
</style>