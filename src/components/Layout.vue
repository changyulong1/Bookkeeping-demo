<template>
  <div class="nav-wrap">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script>
export default {
  name: "layout"
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
}

</style>