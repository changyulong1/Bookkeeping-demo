<template>
  <div class="nav">
    <router-link to="/money">笔记</router-link>|
    <router-link to="/labels">标签</router-link>|
    <router-link to="/statistics">记账</router-link>
  </div>
</template>

<script>
export default {
  name: "NAV"
}
</script>

<style lang="scss" scoped>
  .nav{
    border: 1px solid red;
    display: flex;
  }

</style>