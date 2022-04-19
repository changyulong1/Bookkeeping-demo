<template>
  <div class="newTag">
    <h3>{{ name }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
@Component
export default class Header extends Vue {
    @Prop({default:''}) name!:string
}
</script>

<style lang="scss" scoped>
.newTag {
  display: flex;
  justify-content: center;
  font-size: 16px;
  background: #FFFFFF;
  padding: 12px 20px;
  margin-bottom: 16px;
}

</style>