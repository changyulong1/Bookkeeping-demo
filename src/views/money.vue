<template>
  <Layout class-parfir="layout">
    <Buts @updata:ok="getok" @updata:recordList="uplist"/>
    <Gomoney :value.sync="record.type"/>
    <Exegesis @updata:value="getValue"/>
    <Top :nmver-datas.sync="gets" @updata:selectDatas="getSelectData"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Top from "@/components/morney/Top.vue";
import Exegesis from "@/components/morney/Exegesis.vue";
import Gomoney from "@/components/morney/Gomoney.vue";
import Buts from "@/components/morney/Buts.vue";
import {Component, Watch} from "vue-property-decorator";
import model from "@/models/model";
import models from "@/models/models";

const dataList = model.getLanguage();
const getsList = models.dataList
console.log(getsList)
@Component({
  components: {Buts, Gomoney, Exegesis, Top}
})
export default class money extends Vue {
  gets = getsList;
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
    const record2: RecordID = JSON.parse(JSON.stringify(this.record));
    record2.createAt = new Date();
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch('recordList')
  onRecordListChanged() {
    console.log(model);
    model.setLanguage(this.recordList);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>