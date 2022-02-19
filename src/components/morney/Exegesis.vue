<template>
  <label class="exegesis">
    <span class="zs">{{ text }}</span>
    <input type="text" :value="value" @input="onChildChanged($event.target.value)"  :placeholder="plac"/>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Watch} from "vue-property-decorator";

@Component
export default class Exegesis extends Vue {
  @Prop({default:''}) value!: string;
  @Prop() text!: string;
  @Prop({default: '请输入内容'}) plac!: string;

  @Watch('value')
  onChildChanged(value: string) {
    this.$emit("updata:value", value);
  }
}
</script>

<style lang="scss" scoped>
.exegesis {
  //border: 1px solid red;
  background: #F5F5F5;;
  display: flex;
  align-items: center;

  > .zs {
    margin: 0 16px;
  }

  > input {
    flex-grow: 1;
    height: 64px;
    background: transparent;
    border: none;
  }
}
</style>