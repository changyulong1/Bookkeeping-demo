<template>
  <nav>
    <router-link to="/money" class="time" active-class="selected">
      <Icon iconName="money"/>
      记账
    </router-link>
    <router-link to="/statistics" class="time" active-class="selected">
      <Icon iconName="statistics"/>
      标签
    </router-link>
    <router-link to="/labels" class="time" active-class="selected">
      <Icon iconName="labels" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NAV"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/font.scss';
  nav{
    display: flex;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    flex-direction: row;
    > .time{
      padding: 2px 0;
      width: 33.333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
        width: 30px;
        height: 30px;
      }
    }
    > .time.selected{
      color: $color;
    }
  }

</style>