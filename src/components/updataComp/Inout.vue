<template>
  <div class="navBut">
    <span @click="path"><Icon icon-name="left" /></span>
    <div class="title" v-if="!iconName">
      <slot name="title" ></slot>
    </div>
    <div class="but" v-if="iconName">
      <button :class="{selector:iconName==='outList'}">支出</button>
      <button :class="{selector:iconName==='inList'}">收入</button>
    </div>
    <span>
      <slot name="span"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop,} from "vue-property-decorator";
@Component
export default class Inout extends Vue{
  @Prop(String) iconName:string|undefined
  path(){
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
.navBut{
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  background: #fdfdfd;
  .icon{
    fill: #31409f;
  }
  >.but{
    >button{
      background: #FFFFFF;
      border: none;
      padding: 16px 24px;
      color: #323232;
      position: relative;
      &.selector{
        color: #5a5f98;
        &:after{
          content: '';
          display: block;
          height: 2px;
          width: 100%;
          background: #31409f;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
  >.title{
    padding: 16px 20px;
    flex: 1;
  }
}
</style>