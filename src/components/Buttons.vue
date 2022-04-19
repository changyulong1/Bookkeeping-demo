<template>
  <div class="paentBtu">
    <div>
      <div class="screen">
        <div><input type="text" placeholder="输入备注..."></div>
        <div class="text">{{ outMoney || '0' }}</div>
      </div>
      <div class="buts">
        <button @click="input">1</button>
        <button @click="input">2</button>
        <button @click="input">3</button>
        <button @click="remove">今天</button>
        <button @click="input">4</button>
        <button @click="input">5</button>
        <button @click="input">6</button>
        <button @click="empty">+</button>
        <button @click="input">7</button>
        <button @click="input">8</button>
        <button @click="input">9</button>
        <button @click="empty">-</button>
        <button @click="input" >.</button>
        <button @click="input">0</button>
        <button @click="empty"><Icon icon-name="delete"/></button>
        <button class="ok" @click="ok">完成</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Button from "@/components/Button.vue";
@Component({
  components: {Button}
})
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
      if(moey ==="="){
        this.outMoney = eval(this.outMoney)
        return
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
      if (/[+/*-/]$/g.test(this.outMoney)) {
        if ("+-*=./".indexOf(moey) >= 0) {
          return
        }
      }
      if (/[+/*-/]0$/g.test(this.outMoney)) {
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
  ok(){
    if(this.outMoney === ''){
      this.outMoney = "0"
    }
    const number = eval(this.outMoney)
    this.$emit("updata:ok",number)
    this.$emit("updata:recordList",number)
    this.outMoney = "0"
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/font.scss";
.paentBtu{
    width: 100%;
    position: fixed;
    margin-left: -14px;
    bottom: 0;
    display: none;
    .screen {
      border-top: 2px solid #f2f2f2;
      display: flex;
      >div{
        width: 50%;
        font-size: 24px;
        background: #fdfdfd;
        &.text{
          padding: 4px 10px;
          color: #a90000;
          border-left: 2px solid #f2f2f2;
          text-align: right;
        }
        >input{
          height: 100%;
          border: none;
          margin-left: 10px;
        }
      }
    }
    .buts {
      @extend %clearfix;
      > button {
        width: 25%;
        height: 52px;
        background: #FFFFFF;
        float: left;
        border: none;
        font-size: 20px;
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
        border-left: 1px solid #f2f2f2;
        &.ok {
          color: #FFFFFF;
          background: #31409f;
        }
        &.qing{
          height: 160px;
          float: right;
        }
      }

    }
}



</style>