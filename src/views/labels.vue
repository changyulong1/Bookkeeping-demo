<template>
  <layout>
<!--    <div class="tagsList">-->
<!--      <router-link :to="`/labels/tag/${tag.id}`" class="tag" v-for="(tag,i) in tags" :key="i">-->
<!--        <span>{{ tag.name }}</span>-->
<!--        <Icon iconName="jian"/>-->
<!--      </router-link>-->
<!--    </div>-->
<!--    <div class="creatTag-parent">-->
<!--      <Button class="creatTag" @click="createTag">添加标签</Button>-->
<!--    </div>-->
<!--    <Bill/>-->
<!--   <SetTag/>-->
<!--    <CreateTag/>-->
    <Date  @update:value="getTime"/>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
//账单
import Count from "@/components/updataComp/Count.vue";
//添加页
import Bill from "@/components/updataComp/Bill.vue";
import SetUp from "@/components/updataComp/setUp.vue";
import SetTag from "@/components/updataComp/SetTag.vue";
import CreateTag from "@/components/updataComp/CreateTag.vue";
import Date from "@/components/updataComp/Date.vue";


@Component({
  components: {Date, CreateTag, SetTag, SetUp, Bill, Count, Header, Button}
})
export default class labels extends Vue {
  get tags(){
    return this.$store.state.tagList
  }
  created(){
    this.$store.commit('getLanguage')
  }
  createTag() {
    const name = window.prompt("请输入标签名");
   if(name){
     this.$store.commit('createTag',name)
   }
  }
  getTime(value:string){
    console.log(value)
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