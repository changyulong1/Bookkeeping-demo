<template>
  <div class="navBut">
    <Icon icon-name="left" />
    <div class="title" v-if="!iconName">
      <slot name="title"></slot>
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

<script lang="js">
export default {
  props:['iconName']
};
</script>

<style lang="scss" scoped>
.navBut{
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  background: #fdfdfd;
  >.icon{
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