<template>
  <Layout>
    <Tags class-prenfix="tags1" :arry="ta2" :value.sync="text1"></Tags>
    <Tags class-prenfix="tags2" :arry="ta1" :value.sync="text2"></Tags>
    <ol>
      <li v-for="time in list" :key="time.title">
        <h3>{{ time.title }}</h3>
        <ol>
          <li v-for="(data,index) in time.list" :key="index">
            <span>{{ data.amount }}</span><span>{{ data.createAt }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">

import Vue from "vue";
import {Component} from "vue-property-decorator";
import Tags from "@/components/Tags.vue";
import tag1 from '@/consts/tag1.ts'
import tag2 from '@/consts/tag2.ts'

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
      const [data,time] = redList[i].createAt.split('T')
      hasList[data]= hasList[data] ||{title:data,list:[]}
      hasList[data].list.push(redList[i])
    }
    console.log(hasList)
    return hasList
  }
  created(){
    this.$store.commit('getRecordList')
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

</style>