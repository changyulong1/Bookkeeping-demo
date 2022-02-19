<template>
  <layout>
    <div class="tagsList">
      <router-link :to="`/labels/tag/${tag.id}`" class="tag" v-for="(tag,i) in tags" :key="i">
        <span>{{ tag.name }}</span>
        <Icon iconName="jian"/>
      </router-link>
    </div>
    <div class="creatTag-parent">
      <Button class="creatTag" @click="createTag">添加标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import models from "@/models/models";
import Button from "@/components/Button.vue";
models.getLanguage()
@Component({
  components: {Button}
})
export default class labels extends Vue {
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

  > .tag {
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