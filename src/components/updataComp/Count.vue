<template>
  <Layout>
    <div class="parent">
      <div class="header">
        <h3>
          <Dates :times="createAt" type-name="month" icon-name="xia" @update:time="setTimes"/>
        </h3>
        <div class="main">
          <div>
            <span>本月支出</span>
            <span class="money">￥{{ TotalMonth().outList }}</span>
            <span>本月收入：{{ TotalMonth().inList }}</span>
          </div>
          <div>
            <span class="year"><router-link to="/YearCount">年度统计 <Icon iconName="right"/></router-link></span>
            <span></span>
            <span>本月结余：{{ TotalMonth().count }}</span>
          </div>
        </div>

      </div>
      <div class="section" v-for="(time,index) in monthCount()" :key="index">
        <div class="date">
          <div>
            {{ index }}
          </div>
          <div class="inLout">
            <span>{{ '收入:' + inList(time).inList }}</span>
            <span>{{ "支出：" + inList(time).outList }}</span>
          </div>
        </div>
        <ul class="detailed">
          <li v-for="(tag,i) in time" :key="i" @click="show(tag)">
            <div class="remarks">
              <div class="icon">
                <Icon :iconName="tag.tags.name"/>
              </div>
              <span>{{ tag.tags.title }}</span>
            </div>
            <span :class="{inList:tag.type==='inList',outList:tag.type==='outList'}">{{ tag.type==="inList"?`+${tag.amount}`:`-${tag.amount}`}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="display" @click="hide" class="delete">
      <div class="content1">
        <div>
          <span>账单详情</span>
          <div>
            <span><router-link :to="`/Modify/${tag.id}`">修改</router-link></span>
            <span class="deleteText" @click="removeTag(tag.id)">删除</span>
          </div>
        </div>
        <div>
          <span>金额</span>
          <span>{{ tag.amount }}}</span>
        </div>
        <div>
          <span>分类</span>
          <span>{{ tag.tags.title }}</span>
        </div>
        <div>
        <span>
          日期
        </span>
          <span>
          {{ dataString(tag.createAt) }}
        </span>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import dayjs from "dayjs";
import Button from "@/components/Button.vue";
import Dates from "@/components/updataComp/Dates.vue";
@Component({
  components: {Button,Dates}
})
export default class Count extends Vue {
  createAt = new Date().toISOString()
  display=false
  tag:RecordID|undefined
  get recordList() {
    return this.$store.state.recordList;
  }

  TotalMonth() {

    const {recordList} = this;
    const obj: { count: number, inList: number, outList: number } = {count: 0, inList: 0, outList: 0};
    const date = dayjs(this.createAt);
    recordList.filter((time: RecordID) => {
      if (date.isSame(dayjs(time.createAt), 'month')) {
        if (time.type === "inList") {
          obj.inList += time.amount;
        }
        if (time.type === "outList") {
          obj.outList += time.amount;
        }
      }
    });
    obj.count = obj.inList - obj.outList;
    return obj;
  }

  monthCount() {
    const {recordList} = this;
    const date = dayjs(this.createAt);
    let obj: { [key: string]: RecordID[] } = {};
    let  arr:RecordID[]= [];
     recordList.map((time: RecordID) => {
      if (date.isSame(dayjs(time.createAt), 'month')) {
        const name = dayjs(time.createAt).format('YYYY年MM月DD日');
        obj[name] = [];
        console.log(time)
        arr.push(time)
      }
      console.log(555)
    });
    for (let i = 0; i < arr.length; i++) {
      for (let key in obj) {
        const name = dayjs(arr[i].createAt).format('YYYY年MM月DD日');
        if (key === name) {
          obj[key].push(arr[i]);
        }
      }
    }
    return obj;
  }

  inList(value: RecordID[]) {
    let obj: { inList: number, outList: number } = {inList: 0, outList: 0};
    value.map((time) => {
      if (time.type === 'inList') {
        obj.inList += time.amount;
      } else {
        obj.outList += time.amount;
      }
    });

    return obj;
  }

  created() {
    this.$store.commit('getRecordList');
  }
  show(tag:RecordID){
    this.tag = tag
    this.display=true
  }
  hide(){
    this.display=false
  }
  removeTag(){
    this.$confirm('此操作将删除账单, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      console.log(555)
        this.$store.commit('removeRecord',)
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      });
    });

  }
  dataString(date:string){
      return dayjs(date).format('YYYY年MM月DD日')
  }
  setTimes(value:Date){
    console.log('shijian')
    console.log(value)
    this.createAt = value.toISOString()

  }
}
</script>

<style lang="scss" scoped>
.parent {
  display: flex;
  flex-direction: column;
  height: 100%;

  > .header {
    background: #31409f;
    padding: 12px 12px;
    color: #FFFFFF;

    > h3 {
      padding: 8px 0;
      font-size: 16px;
      display: flex;
      width: 100px;
      align-items: center;
      > .icon {
        //margin-left: 8px;
      }
      >.date{
        border: 1px solid red;
      }
    }

    > .main {
      display: flex;
      justify-content: space-between;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > span {
          margin: 10px 0;
          &.money {
            font-size: 30px;
          }

          &.year {
            text-align: right;
            >a{
              color: #FFFFFF;
              > .icon {
                margin-right: 8px;
                color: #FFFFFF;
                font-size: 18px;
              }
            }
          }
        }
      }

    }
  }

  > .section {
    //flex: 1;
    padding: 0 4px;

    > .date {
      display: flex;
      justify-content: space-between;
      background: #efefef;
      padding: 4px 0;
      font-size: 12px;
      color: #707070;

      > .inLout {
        > span {
          margin-right: 10px;
        }
      }
    }

    > .detailed {
      padding: 0 10px;
      background: #FFFFFF;

      > li {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        margin: 2px 0;
        line-height: 46px;
        >span.inList{
          color: darkgreen;
        }
        >span.outList{
          color: red;

        }
        > .remarks {
          display: flex;
          align-items: center;

          > div.icon {
            width: 46px;
            height: 46px;
            font-size: 24px;
            text-align: center;
            border-radius: 100%;
            margin-right: 12px;
            background: #dedede;
          }
        }
      }
    }
  }
}

.delete {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
background: rgba(0,0,0,0.5);
>.content1{
  position: fixed;
  bottom: 0;
  width: 100vw;
  z-index: 50;
  > div {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    background: #FFFFFF;
    font-size: 14px;
    span.deleteText{
      color: red;
    }
    span {
      display: inline-block;
      padding: 0 10px;
    }
  }
}

}
</style>