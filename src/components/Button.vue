<template>
  <button class="button"
          @click="$emit('click',$event)"
  ><slot></slot></button>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  color: #FFFFFF;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-parent {
    text-align: center;
    padding: 16px;
    margin: 44-16px;
  }
}

</style>