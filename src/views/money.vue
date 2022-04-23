<template>
  <Layout class-parfir="layout">
    <Tags :arry="iconType" :value.sync="record.type"></Tags>
    <Top class="icon-error" :iconlist.sync="icons"
         :iconType ="record.type"
         @updata:getTime="getTime"/>
    <Buttons v-if="show" @updata:ok="getok" @updata:recordList="updataList"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Top from "@/components/morney/Top.vue";
import Exegesis from "@/components/morney/Exegesis.vue";
import Gomoney from "@/components/morney/Gomoney.vue";
import Buts from "@/components/morney/Buts.vue";
import {Component} from "vue-property-decorator";
import Tags from "@/components/Tags.vue";
import tag2 from "@/consts/tag2";
import Buttons from "@/components/updataComp/Buttons.vue";

import createId from "@/lid/createId";

@Component({
  components: {Buttons, Tags, Buts, Gomoney, Exegesis, Top}
})
export default class money extends Vue {
  get icons() {
    return this.$store.state.iconsList;
  }
  iconType = tag2;
  show = false
  record: RecordID = {
    tags: {id:'',name:'',title:''}, notes: '', type: "inList", amount: 0, createAt: new Date().toISOString()
  };

  created() {
    this.$store.commit('getLanguage');
  }

  getTime(value:{id:string,name:string,title:string}) {
    value?this.show = true:this.show = false
    this.record.tags=value
  }

  getValue(value: string) {
    this.record.notes = value;

  }

  getok(value:{amount: number,notes: string,createAt:Date}) {
    this.record.amount = parseFloat(value.amount.toString());
    this.record.notes= value.notes
    this.record.createAt =value.createAt.toString()
  }

  updataList() {
    this.$store.commit('create', this.record);
  }
}
</script>
<style lang="scss">
.layout-content {

  display: flex;
  flex-direction: column;
  //flex-direction: column-reverse;
  >.icon-error{
    flex: 1;
    display: flex;
    overflow: hidden;
  }
}

</style>