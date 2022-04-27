<template>
  <Layout>
    <div class="parent">
      <div class="header">
        <h3>
          <span @click="to"><Icon  iconName="left"/></span>
          <Dates :times="createAt" type-name="year" format-name="yyyy年" @update:time="setTimes" icon-name="xia"/>
        </h3>
        <div class="main">
          <div>
            <span>年度结余</span>
            <span class="money">￥{{ TotalMonth().count }}</span>
            <span>年度收入：{{ TotalMonth().inList }}</span>
          </div>
          <div>
            <span class="year"></span>
            <span></span>
            <span>年度支出：{{ TotalMonth().outList }}</span>
          </div>
        </div>

      </div>
      <div class="section">
        <div>
          <p>
            <span>月份</span>
            <span>支出</span>
            <span>收入</span>
            <span >结余</span>
          </p>
        </div>
      <div  v-for="(time,index) in monthCount()" :key="index">
        <p>
          <span>{{  index }}</span>
          <span>{{ inList(time).inList }}</span>
          <span>{{ inList(time).outList }}</span>
          <span class="color">{{ inList(time).count }}</span>
        </p>
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
  components: {Button, Dates}
})
export default class yearCount extends Vue {
  createAt = new Date().toISOString();
  display = false;
  tag: RecordID | undefined;

  get recordList() {
    return this.$store.state.recordList;
  }

  TotalMonth() {
    const {recordList} = this;
    const obj: { count: number, inList: number, outList: number } = {count: 0, inList: 0, outList: 0};
    const date = dayjs(this.createAt);
    recordList.filter((time: RecordID) => {
      if (date.isSame(dayjs(time.createAt), 'year')) {
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
    let arr: RecordID[] = [];
    recordList.map((time: RecordID) => {
      if (date.isSame(dayjs(time.createAt), 'year')) {
        const name = dayjs(time.createAt).format('MM月');
        obj[name] = [];
        arr.push(time);
      }
    });
    for (let i = 0; i < arr.length; i++) {
      for (let key in obj) {
        const name = dayjs(arr[i].createAt).format('MM月');
        if (key === name) {
          obj[key].push(arr[i]);
        }
      }
    }
    return obj;
  }

  inList(value: RecordID[]) {
    let obj: { inList: number, outList: number, count: number } = {inList: 0, outList: 0, count: 0};
    value.map((time) => {
      if (time.type === 'inList') {
        obj.inList += time.amount;
      } else {
        obj.outList += time.amount;
      }
    });
    obj.count = obj.inList - obj.outList;
    return obj;
  }

  created() {
    this.$store.commit('getRecordList');
  }

  removeTag() {
    this.$confirm('此操作将删除账单, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$store.commit('removeRecord',);
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      });
    });

  }

  dataString(date: string) {
    return dayjs(date).format('YYYY年MM月DD日');
  }

  setTimes(value: Date) {
    this.createAt = value.toISOString();

  }
  to(){
    this.$router.back()
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
  > .section {
    flex: 1;
    padding: 0 4px;
    overflow: auto;
    > div {
      > p {
        display: flex;
        padding: 10px 0;
        box-shadow: 0 0.5px rgba(0, 0, 0, 0.2);

        > span {
          flex: 1;
          display: flex;
          justify-content: center;
          &.color{
            color: red;
          }
        }
      }
    }
  }
}

</style>