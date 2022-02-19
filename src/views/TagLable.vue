<template>
  <Layout>
    <div class="newTag">
      <Icon class="left" iconName="left"></Icon>
      <span>编辑标签</span>
      <div class="right"></div>
    </div>
    <Exegesis :value="tag.name" @updata:value="updateTag" class="creatTag" text="标签名" plac="衣"></Exegesis>
    <div class="button-parent">
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import models from "@/models/models";
import Exegesis from "@/components/morney/Exegesis.vue";
import Button from "@/components/Button.vue";
@Component({
  components: {Button, Exegesis}
})
export default class TagLable extends Vue {
  tag?: { id: string, name: string } = undefined;

  created() {
    const id = this.$route.params.id;
    models.getLanguage();
    const tag = models.dataList.filter(data => data.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace('/404');
    }
  }

  updateTag(name: string) {
    if(this.tag){
       models.update(this.tag.id,name)
    }
  }
}
</script>
<style lang="scss" scoped>
.newTag {
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  padding: 12px 20px;

  > .left, > .right {
    width: 24px;
    height: 24px;
  }
}

.creatTag {
  background: #FFFFFF;
  height: 44px;
  margin-top: 8px;
}

.button-parent {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>