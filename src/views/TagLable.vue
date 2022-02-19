<template>
  <Layout>
    <div>
      <Icon iconName="left"></Icon>
      <span>标签页</span>
    </div>
    <Exegesis text="新标签" plac="请输入内容"></Exegesis>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import models from "@/models/models";
import Exegesis from "@/components/morney/Exegesis.vue";
@Component({
  components: {Exegesis}
})
export default class TagLable extends Vue {
  created() {
    const id = this.$route.params.id;
    models.getLanguage();
    const tag = models.dataList.filter(data => data.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');
    }
  }
}
</script>
<style lang=“scss” scoped>

</style>