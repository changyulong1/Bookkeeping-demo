<template>
  <div class="chart" ref="ecahrts">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Ref, Watch} from "vue-property-decorator";
import * as echarts from 'echarts'
@Component
export default class EachartPie extends Vue{
  @Ref('ecahrts')  div !:HTMLDivElement
  @Prop() optionPie?:any
  myChart?:any
  mounted(){
    if(!this.optionPie){return}
    this.myChart = echarts.init(this.div)
   this.myChart.setOption(this.optionPie)
  }
  @Watch('optionPie')
  onOptionChange(){
   this.myChart.setOption(this.optionPie)
  }
}

</script>

<style lang="scss" scoped>
.chart{
  width: 100vw;
  height: 200px;
}

</style>