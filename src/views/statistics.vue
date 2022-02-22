<template>
  <Layout>
    <Tags class-prenfix="tags1" :arry="ta2" :value.sync="text1"></Tags>
    <Tags class-prenfix="tags2" :arry="ta1" :value.sync="text2"></Tags>
  </Layout>
</template>

<script>

import Vue from "vue";
import {Component} from "vue-property-decorator";
import Tags from "@/components/Tags";
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