<template>
  <Layout>
    标签页
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import models from "@/models/models";
@Component
export default class TagLable extends Vue {
    created(){
      const id = this.$route.params.id
      models.getLanguage()
      console.log(models.dataList)
      const tag = models.dataList.filter(data => data.id === id)[0]
      console.log(tag)
      if(tag){
        console.log(tag)
      }else{
        this.$router.replace('/404')
      }
    }
}
</script>

<style lang=“scss” scoped>

</style>