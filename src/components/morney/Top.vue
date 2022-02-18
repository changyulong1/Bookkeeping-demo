<template>
  <div class="top-money">
    <div>
      <button class="newBtn" @click="createType">新增标签</button>
    </div>
    <ul class="list">
      <li v-for="(get,index) in nmverDatas" :key="index"
          @click="select(get)"
      :class="{selected: selectDatas.indexOf(get)>=0}">
        {{ get }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";

@Component
export default class Top extends Vue {
  @Prop() readonly nmverDatas:string[]|undefined;
  selectDatas:string[]=[];
  select(label:string){
    const index = this.selectDatas.indexOf(label);
    if(index>=0){
      this.selectDatas.splice(index,1)
    }else{
      this.selectDatas.push(label)
    }
  }
  createType(){
    const name = prompt("请输入新标签")
    if(name === ''){
      alert('请输入正觉的标签米昂')
    }else if(this.nmverDatas){
      //采坑
      this.$emit('update:nmver-datas',[...this.nmverDatas,name])
    }

  }
}
</script>

<style lang="scss" scoped>
.top-money {
  font-size: 14px;
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  .list {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    > li {
      height: 24px;
      background: #D9D9D9;
      border-radius: 12px;
      margin-bottom: 12px;
      padding: 0 15px;
      margin-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.selected {
        background: #787878;
      }
    }
  }
  > div {
    > .newBtn {
      width: 56px;
      font-size: 12px;
      padding: 4px 0;
      position: relative;
      margin-top: 10px;
      background: white;
      border: none;
      color: #999999;
      border-bottom: 1px solid #666666;
    }

  }

}
</style>