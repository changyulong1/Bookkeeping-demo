<template>
  <Layout>
    <Tags class-prenfix="tags1" :arry="ta2" :value.sync="type"></Tags>
    <div class="HeaderBun">
      <ul @click="active">
        <li :class="{selector:text===time}" v-for="time in string" :key="time">{{ time }}</li>
      </ul>
    </div>
    <div class="echarts">
      <div>
        <p>本{{ text }}</p>
        <div>
          <Echart :option="chartOptions"/>
        </div>
      </div>
      <div><p>支出占比</p>
        <div>
          <EachartPie :option-pie="PieOptions"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">

import Vue from "vue";
import {Component} from "vue-property-decorator";
import Tags from "@/components/Tags.vue";
import tag2 from '@/consts/tag2.ts';
import dayjs from "dayjs";
import Dates from "@/components/updataComp/Dates.vue";
import Echart from "@/components/Echart.vue";
import EachartPie from "@/components/EachartPie.vue";

@Component({
  components: {EachartPie, Dates, Tags, Echart}
})
export default class statistics extends Vue {
  ta2 = tag2;
  value = new Date();
  string = ['周', '年', '月'];
  text = '年';
  type = 'outList';
  get getList() {
    const date = dayjs(new Date())
    const data = this.$store.state.recordList
    return   data.filter((time:RecordID)=>date.isSame(dayjs(time.createAt), 'year'))
  }
  created() {
    this.$store.commit('getRecordList');
  }

  get key() {
    const {getList} = this;
    const inList = getList.filter((time: RecordID) => time.type === 'inList');
    const outList = getList.filter((time: RecordID) => time.type === 'outList');
    const obj: { [key: string]: RecordID[] } = {"inList": [...inList], "outList": [...outList]};
    return obj;
  }

  get count() {
    const name = this.type;
    const data = this.key;
    const date =dayjs( new Date())
    const recordList = data[name];
    const array = [];
    if (this.text === '年') {
      for (let i = 1; i <= 12; i++) {
        const dateString = i;
        const found = recordList.map((time: RecordID) => {
          const Moth = dayjs(time.createAt).format('M');
          if (dateString === parseInt(Moth)) {
            return time.amount;
          } else {
            return 0;
          }
        });
        array.push({
          key: dateString,
          value: this.theSum(found) > 0 ? {value: this.theSum(found), label: {show: true, position: 'top'}} : 0
        });
      }
    }
    if (this.text === '月') {
      const yearList = recordList.filter((time:RecordID)=>date.isSame(dayjs(time.createAt), 'month'))
      for (let i = 1; i <= 30; i++) {
        const dateString = i;
        const found = yearList.map((time: RecordID) => {
          const Moth = dayjs(time.createAt).format('D');
          if (dateString === parseInt(Moth)) {
            return time.amount;
          } else {
            return 0;
          }
        });
        array.push({
          key: dateString,
          value: this.theSum(found) > 0 ? {value: this.theSum(found), label: {show: true, position: 'top'}} : 0
        });
      }

    }
    if (this.text === '周') {
      const yearList = recordList.filter((time:RecordID)=>date.isSame(dayjs(time.createAt), 'week'))
      for (let i = 1; i <= 7; i++) {
        const dateString = i;
        const found = yearList.map((time: RecordID) => {
          const Moth = dayjs(time.createAt).format('d');
          if (dateString ===parseInt(Moth)) {
            return time.amount;
          } else {
            return 0;
          }
        });
       let week:{[key:number]:string}={1:'周一',2:'周二',3:'周三',4:'周四',5:'周五',6:'周六',7:'周日'}
        array.push({
          key: week[dateString],
          value: this.theSum(found) > 0 ? {value: this.theSum(found), label: {show: true, position: 'top'}} : 0
        });
      }

    }
    return array;
  }

  get chartOptions() {
    const keys = this.count.map(item => item.key);
    const values = this.count.map(item => item.value);
    return {
      position: {
        left: 0
      },
      xAxis: {
        type: 'category',
        data: keys,
        axisLine: {
          lineStyle: {
            color: '#959597'
          }
        },
        axisTick: {
          show: true,
          alignWithLabel:true,
          splitNumber:5
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          barWidth: 4,
          color: '#232323',
          data: values,
          type: 'bar'
        }
      ]
    };
  }
get PieData(){
  const name = this.type;
  const data = this.key;
  const date =dayjs( new Date())
  const obj:{[key:string]:number[]}={}
  const recordList = data[name];
  if (this.text === '年') {
   const data =  recordList.map((time)=>{
     obj[time.tags.title]=[]
      return{ value:time.amount,name:time.tags.title}
    })
    data.map((time)=>{
      for(let key in obj){
        if(key === time.name){
          obj[key].push(time.value)
        }
      }
    })
  }
  if (this.text === '月') {
    const monthList = recordList.filter((time:RecordID)=>date.isSame(dayjs(time.createAt), 'month'))
    const data =  monthList.map((time)=>{
      obj[time.tags.title]=[]
      return{ value:time.amount,name:time.tags.title}
    })
    data.map((time)=>{
      for(let key in obj){
        if(key === time.name){
          obj[key].push(time.value)
        }
      }
    })
  }
  if (this.text === '周') {
    const weekList = recordList.filter((time:RecordID)=>date.isSame(dayjs(time.createAt), 'week'))
    const data =  weekList.map((time)=>{
      obj[time.tags.title]=[]
      return{ value:time.amount,name:time.tags.title}
    })
    data.map((time)=>{
      for(let key in obj){
        if(key === time.name){
          obj[key].push(time.value)
        }
      }
    })
  }
  return obj
}
get PieOptions(){
    const array = []
    for(let key in this.PieData){
      array.push({value:this.theSum(this.PieData[key]),name:key})
    }
    return {
      title: {
        subtext: this.valueSun(this.PieData),
        left:'center',
        top: 'center',
        subtextStyle:{
          color: 'red'
        }
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: true,
          label: {
            show: true,
            position: 'outside',
            formatter :'{b}{d}%'
          },
          labelLine:{
            show:true,
            length:8,
            length2:30
          },
          data: array
        }
      ]
    }

}
  theSum(array: number[]) {
    let ann = 0;
    for (let i = 0; i < array.length; i++) {
      ann += array[i];
    }
    return ann;
  }
  valueSun(obj:{[key:string]:number[]}){
    let ann = 0;
    for (let key in obj ) {
      ann += this.theSum(obj[key])
    }
    return ann;
  }
  active(e: Event) {
    const li = e.target as HTMLLIElement;
    this.text = (li.textContent as string);
  }
}
</script>

<style lang="scss" scoped>
.HeaderBun {
  display: flex;
  justify-content: center;
  background: #FFFFFF;
  padding: 16px 0;

  > ul {
    display: flex;

    > li {
      padding: 8px 39px;
      border: 2px solid #2e40a3;
      color: #2e40a3;

      &.selector {
        color: #FFFFFF;
        background: #2e40a3;
      }
    }
  }
}

.echarts {
  div {
    > p {
      padding: 8px 20px;
      background: #efefef;
      font-size: 14px;
    }

    > div {
      background: #FFFFFF;
      display: flex;
      justify-content: center;
      padding: 20px;
    }
  }
}


</style>
