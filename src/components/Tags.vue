<template>
  <div class="time">
    <ul>
      <li :class="{[classPrenfix+'-time']:classPrenfix,'selected':value===time.value}
"        @click="selectType(time.value)"
      v-for="time in arry" :key="time.value">{{ time.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) readonly classPrenfix!: string;
  @Prop() readonly arry!: {text:string,value:string}[];

  selectType(type: string) {
    this.$emit('update:value', type);
  }
}
</script>

<style lang="scss" scoped>
.time {
  ul {
    display: flex;

    li {
      flex: 1;
      background: #C4C4C4;
      display: flex;
      padding: 15px 0;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected {
        &:before {
          content: "";
          display: block;
          width: 100%;
          position: absolute;
          height: 4px;
          background: #333333;
          bottom: 0;
        }

      }
    }
  }
}

</style>