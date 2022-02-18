<template>
  <div>
    <div class="screen">
      {{ outMoney || '0' }}
    </div>
    <div class="buts">
      <button @click="input">1</button>
      <button @click="input">2</button>
      <button @click="input">3</button>
      <button @click="input">+</button>
      <button @click="remove">删除</button>
      <button @click="input">4</button>
      <button @click="input">5</button>
      <button @click="input">6</button>
      <button @click="input">-</button>
      <button @click="empty">清空</button>
      <button @click="input">7</button>
      <button @click="input">8</button>
      <button @click="input">9</button>
      <button @click="input">*</button>
      <button class="ok">ok</button>
      <button @click="input">0</button>
      <button @click="input">.</button>
      <button @click="input">%</button>
      <button @click="input">/</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component
export default class Buts extends Vue {
  outMoney = '';
  input(event: MouseEvent) {
    if (event.target) {
      const button = (event.target as HTMLBaseElement)
      const moey = button.textContent as string
      if (this.outMoney === '') {
        this.outMoney = "0";
      }
      if (this.outMoney.length === 20) {
        return;
      }
      if (this.outMoney === "0") {
        if (moey === "0") {
          return;
        }
        if ('0123456789'.indexOf(moey) >= 0) {
          this.outMoney = moey;
        } else {
          this.outMoney += moey;
        }
        return;
      }
      if (/[+/*-/%]$/g.test(this.outMoney)) {
        if ("+-*%./".indexOf(moey) >= 0) {
          return
        }
      }
      if (/[+/*-/%]0$/g.test(this.outMoney)) {
        if ("123456789".indexOf(moey) >= 0) {
          return;
        }
      }
      this.outMoney += moey;
    }
  }

  remove() {
    if (this.outMoney.length === 1) {
      this.outMoney = "0"
    }
    else
    {
      this.outMoney = this.outMoney.slice(0, -1)
    }
  }

  empty() {
    this.outMoney = "0"
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/font.scss";

.screen {
  text-align: right;
  font-size: 36px;
  color: #333333;
  padding: 0 15px;
  box-shadow: inset 0px 3px 3px $color-shadow;
}

.buts {
  @extend %clearfix;

  > button {
    width: 20%;
    height: 64px;
    float: left;
    border: none;
    font-size: 24px;

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