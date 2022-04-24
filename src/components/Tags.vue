<template>
  <div class="navBut">
    <span class="icon" @click="path"><Icon :icon-name="iconName || ''"/></span>
    <div class="but">
      <button :class="{selector:value===time.value}"
              v-for="time in arry" :key="time.value"
              @click="selectType(time.value)"
      >
        {{ time.text }}
      </button>
    </div>
    <span></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import Inout from "@/components/updataComp/Inout.vue";

@Component({
  components: {Inout}
})
export default class Tags extends Vue {
  @Prop(String) iconName: string | undefined;
  @Prop(String) readonly value!: string;
  @Prop(String) readonly classPrenfix!: string;
  @Prop() readonly arry!: { text: string, value: string }[];

  selectType(type: string) {
    this.$emit('update:value', type);
  }
  path(){
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>

.navBut {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  background: #fdfdfd;
  margin-bottom: 1px;
  width: 100%;
  > span.icon {
    fill: #31409f;
    margin-left: 10px;
  }

  > .but {
    > button {
      background: #FFFFFF;
      border: none;
      padding: 16px 24px;
      color: #323232;
      position: relative;

      &.selector {
        color: #5a5f98;

        &:after {
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
}

</style>