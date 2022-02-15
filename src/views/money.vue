<template>
  <div class="nav-wrap">
    <div class="content">
      money.vue
    </div>
    <Nav/>
  </div>

</template>

<script>
export default {
  name: "money",
}
</script>

<style scoped>
  .nav-wrap{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content{
    flex-grow: 1;
    overflow: auto;
    border: 1px solid green;
  }


</style>