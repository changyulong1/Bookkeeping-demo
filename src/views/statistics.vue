<template>
  <layout>
    <ol class="tagsList">
      <li v-for="(tag,i) in tags" :key="i">
        <span>{{ tag }}</span>
        <Icon iconName="jian"/>
      </li>
    </ol>
    <div class="creatTag-parent">
      <button class="creatTag" @click="createTag">添加标签</button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import models from "@/models/models";
models.getLanguage()
console.log(models.dataList)
@Component
export default class statistics extends Vue {
  tags = models.dataList;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const message = models.create(name);
      if (message === "duplicated") {
        window.alert("标签重复");
      }else{
        window.alert("添加成功")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tagsList {
  background: #FFFFFF;
  font-size: 16px;
  padding-left: 16px;

  > li {
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #BCBBC1;;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 22px;
    }
  }
}

.creatTag {
  background: #767676;
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