<template>
  <Layout class-parfir="layout">
    <Buts @updata:ok="getok" @updata:recordList="updataList"/>
    <Gomoney  :value.sync="record.type"/>
    <Exegesis text="注释" plac="请输入内容" @updata:value="getValue"/>
    <Top :nmver-datas.sync="tags"
         @updata:selectDatas="getSelectData"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Top from "@/components/morney/Top.vue";
import Exegesis from "@/components/morney/Exegesis.vue";
import Gomoney from "@/components/morney/Gomoney.vue";
import Buts from "@/components/morney/Buts.vue";
import {Component} from "vue-property-decorator";

@Component({
  components: {Buts, Gomoney, Exegesis, Top}

})
export default class money extends Vue {
  get tags(){
    return this.$store.state.tagList
  }
  record: RecordID = {
    tags: [], notes: '', type: "-", amount: 0, createAt: new Date()
  };
  created(){
    this.$store.commit('getLanguage')
  }
  getSelectData(value: string[]) {
    this.record.tags = value;
  }

  getValue(value: string) {
    this.record.notes = value;
  }
  getok(value: string) {
    this.record.amount = parseFloat(value);
  }

  updataList() {
    // store.create(this.record)
    this.$store.commit('create',this.record)

  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>