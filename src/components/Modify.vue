<template>

   <Layout class-parfir="layout">
     <Tags icon-name="left" :arry="iconType" :value.sync="record.type"></Tags>
     <Top :record="getRecord" class="icon-error" :iconlist.sync="icons"
          :iconType ="record.type"
          @updata:getTime="getTime"/>
     <Buttons :record="getRecord"  @updata:ok="getok" @updata:recordList="updataList"/>
   </Layout>
</template>

<script lang="ts">
import Top from "@/components/morney/Top.vue";
import Exegesis from "@/components/morney/Exegesis.vue";
import Gomoney from "@/components/morney/Gomoney.vue";
import Buts from "@/components/morney/Buts.vue";
import {Component} from "vue-property-decorator";
import Tags from "@/components/Tags.vue";
import tag2 from "@/consts/tag2";
import Buttons from "@/components/updataComp/Buttons.vue";
import Vue from "vue";
//Modify
@Component({
  components: {Buttons, Tags, Buts, Gomoney, Exegesis, Top}
})
export default class Modify extends Vue {
  get icons() {
    return this.$store.state.iconsList;
  }
  get getRecord(){
    return this.$store.state.record
  }
  iconType = tag2;
  show = false
  record: RecordID = {
    tags: {id:'',name:'',title:''}, notes: '', type: "inList", amount: 0, createAt: new Date().toISOString()
  };

  created() {
    const id = this.$route.params.id
    this.$store.commit('getLanguage');
    this.$store.commit('getRecordList');
    this.$store.commit('getRecord',id)
    this.record.type = this.getRecord.type
    this.record.tags=this.getRecord.tags
    this.record.notes=this.getRecord.notes
    this.record.createAt=this.getRecord.createAt
    this.record.amount=this.getRecord.amount
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
    const id = this.$route.params.id
    this.$store.commit('updateRecord', {id:id,time:this.record});
  }
}
</script>

<style lang="scss" scoped>

</style>