<template>
  <Layout class-parfir="layout">
    <Buts @updata:ok="getok" @updata:recordList="uplist"/>
    <Gomoney  :value.sync="record.type"/>
    <Exegesis text="注释" plac="请输入内容" @updata:value="getValue"/>
    <Top :nmver-datas.sync="gets"
         @updata:selectDatas="getSelectData"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Top from "@/components/morney/Top.vue";
import Exegesis from "@/components/morney/Exegesis.vue";
import Gomoney from "@/components/morney/Gomoney.vue";
import Buts from "@/components/morney/Buts.vue";
import {Component, Watch} from "vue-property-decorator";
import recordList from "@/models/recordList";

const dataList = recordList.getLanguage();

@Component({
  components: {Buts, Gomoney, Exegesis, Top}
})
export default class money extends Vue {
  gets = window.tagList;
  record: RecordID = {
    tags: [], notes: '', type: "-", amount: 0, createAt: new Date()
  };
  recordList: RecordID[] = dataList;

  getSelectData(value: string[]) {
    this.record.tags = value;
  }

  getValue(value: string) {
    this.record.notes = value;
  }

  setVauer(value: string) {
    this.record.type = value;
  }

  getok(value: string) {
    this.record.amount = parseFloat(value);
  }

  uplist() {
    recordList.create(this.record)
  }
  @Watch('recordList')
  onRecordListChanged() {
    recordList.setLanguage();
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>