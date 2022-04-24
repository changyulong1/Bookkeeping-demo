<template>
  <div class="nav-wrap" >
    <div class="content" :class="classParfir &&` ${classParfir}-content`">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script>
export default {
  props:["classParfir"],
  name: "layout"
}
</script>
<style scoped>
.nav-wrap{
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
}
.content{
  flex: 1;
  overflow: auto;
}

</style>