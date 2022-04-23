<template>
  <Layout>
    <Tags class-prenfix="tags1" :arry="ta2" :value.sync="text1"></Tags>
<!--    <ol>-->
<!--      <li  v-for="time in list" :key="time.title">-->
<!--        <h3 class="title">{{hasDate(time.title ) }}</h3>-->
<!--        <ol>-->
<!--          <li class="listLi" v-for="(data,index) in time.list" :key="index">-->
<!--          <div class="tags" v-if="data.type===text1">-->
<!--            <span>{{ data.tags.length ===0?"":data.tags[0].name}}</span>-->
<!--            <span>{{ data.notes }}</span>-->
<!--            <span>{{ data.type==="+"?"+"+data.amount:+data.amount}}</span>-->
<!--          </div>-->
<!--          </li>-->
<!--        </ol>-->
<!--      </li>-->
<!--    </ol>-->
  </Layout>
</template>

<script lang="ts">

import Vue from "vue";
import {Component} from "vue-property-decorator";
import Tags from "@/components/Tags.vue";
import tag1 from '@/consts/tag1.ts'
import tag2 from '@/consts/tag2.ts'
import dayjs from "dayjs";

@Component({
  components: {Tags}
})
export default class statistics extends Vue {
  text1 = "-";
  text2 = 'yue';
  ta1=tag1;
  ta2=tag2
  get redList(){
    return this.$store.state.recordList
  }
  get list (){
    const {redList} = this
    const hasList:{[key:string]:{title:string,list:RecordID[]}} = {}
    for(let i=0;i<redList.length;i++){
      const [data] = redList[i].createAt.split('T')
      hasList[data]= hasList[data] ||{title:data,list:[]}
      hasList[data].list.push(redList[i])
    }
    console.log(hasList)
    return hasList
  }
  hasDate(string:string){
    const date = dayjs(string)
    const day1 = dayjs()
    if(date.isSame(day1,'day')){
      return "今天"
    }else if(date.isSame(day1.subtract(1,'day'),'day')){
      return "昨天"
    }else if(date.isSame(day1.subtract(2,'day'),'day')){
      return '前天'
    }else{
      return date.format('yyyy年m月DD日')
    }
  }
  created(){
    this.$store.commit('getRecordList')
    console.log(this.list)
  }
}
</script>

<style lang="scss" scoped>
::v-deep .time ul li.tags1-time {
  background: #FFFFFF;
  &.selected {
    background: #C4C4C4;;
    &:before {
      display: none;
    }
  }
}
::v-deep .time ul li.tags2-time{
  height: 40px;
}
.listLi{
  margin-bottom: 10px;
}
.title{
  font-size: 17px;
  padding: 8px 15px;
}
.tags{
  font-size: 17px;
  padding: 6px 15px;
  display: flex;
  justify-content: space-between;
  background: #FFFFFF;

  span:nth-child(2){
    color: #666666;
  }
}

</style>
