<template>
  <div class="block"  :class="{month:typeName==='month'||typeName==='year'}" >
    <el-date-picker
        :editable="false"
        v-model="value"
        :type="type"
        :format="format"
        ref="date"
        @blur="hide"
        placeholder="选择日期">
    </el-date-picker>
    <Icon :iconName="iconName"/>
    <div class="Mask" @click.stop.prevent="displayHide"
         :class="{warp:Mask}"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Ref} from "vue-property-decorator";

@Component
export default class Dates extends Vue {
  type='month'
  format='yyyy年M月'
  @Prop(String) times!:string
  @Prop(String) typeName!:string
  @Prop(String) iconName!:string
  @Prop(String) formatName!:string
  value = new Date().toISOString()
  Mask = false
  Hide = false
  @Ref('date')  input !:HTMLInputElement

  created() {
    if(this.typeName){
      this.type=this.typeName
      this.format = this.formatName
    }

    this.$emit('update:time', this.value)
  }
  displayHide(){
    if (this.Hide) {
      this.Hide = false
      return
    }
    this.input.focus()
    this.Mask = true
  }

  hide() {
    this.Mask = false
    this.Hide = true
    this.$emit('update:time', this.value)
  }
}
</script>

<style lang="scss">

.block {
  position: relative;
  width: 100%;

  > div.el-date-editor {
    width: 100%;
    > input.el-input__inner {
      text-align: center;
      padding: 0;
      border: none;
      background: rgba(0, 0, 0, 0);
      color: black;

      &::-webkit-input-placeholder {
        color: black;
      }
    }

    > span {
      display: none;
    }


  }

  > .Mask {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    z-index: 10;
    &.warp {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 100;
    }
  }
  &.month{
    display: flex;
    align-items: center;
    > div.el-date-editor{
      > input.el-input__inner{
        color: #FFFFFF;
      }
    }
  }

}

body {

  .el-picker-panel {
    margin: 15px 0;
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    > .popper__arrow {
      display: none;
    }

    > .el-picker-panel__body-wrapper {
      > .el-picker-panel__body {
        > .el-picker-panel__content {
        }
      }
    }
  }
}
</style>