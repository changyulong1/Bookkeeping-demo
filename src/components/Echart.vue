<template>
    <div class="chart" ref="ecahrts">
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Ref, Watch} from "vue-property-decorator";
import * as echarts from 'echarts'
@Component
export default class Echart extends Vue{
  @Ref('ecahrts')  div !:HTMLDivElement
  @Prop()option?:any
  myChart?:any
  mounted(){
   if(!this.option){return}
    this.myChart = echarts.init(this.div)
    this.myChart.setOption(this.option)
  }
  @Watch('option')
  onOptionChange(){
    this.myChart.setOption(this.option)
  }
}

</script>

<style lang="scss" scoped>
.chart{
  width: 100vw;
  height: 300px;
}

</style>