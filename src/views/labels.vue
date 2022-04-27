<template>
  <layout>
    <div class="setUp">
      <Tags  icon-name="left" :arry="iconType" :value.sync="iconName"/>
      <div class="list">
        <span></span>
        <ul class="iconList">
          <li v-for="time in tags[iconName]" :key="time.id">
            <div class="left">
              <div class="delete" @click="remove(time.id)"></div>
              <div class="icon">
                <Icon :icon-name="time.name"/>
              </div>
              <div>{{ time.title }}</div>
            </div>
            <div class="right">
              <span class="edit" @click="setTag(time.id)">编辑</span>
              <Icon icon-name="shangxia"/>
            </div>
          </li>
        </ul>
      </div>
      <div class="add">
        <Button @click="path">
          <Icon icon-name="jiahao"/>
         新增类别
        </Button>
      </div>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Button from "@/components/Button.vue";

//引入
import Inout from "@/components/updataComp/Inout.vue";
import Tags from "@/components/Tags.vue";
import tag2 from "@/consts/tag2";

@Component({
  components: {Tags, Button, Inout}
})
export default class labels extends Vue {
  iconName = '';
  iconType = tag2;

  get tags() {
    return this.$store.state.iconsList;
  }
  created() {
    const {type} = this.$route.query;
    this.iconName = type as string;
    this.$store.commit('getLanguage');
  }

  remove(id:string){
    this.$store.commit('removeTag', {id:id,iconName:this.iconName})
  }

  setTag(id:string){
    this.$router.push({path:`/labels/SetTag/${id}`,query:{iconName:this.iconName}})
  }
  path(){
    this.$router.push({path:`/labels/Create/${this.iconName}`})
  }
}
</script>

<style lang="scss" scoped>
.setUp {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  >.list{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    >span{
      width: 100%;
      display: block;
      height: 1px;
    }
    > .iconList {
      flex: 1;
      overflow: auto;
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #FFFFFF;
        margin: 2px 0;
        padding: 10px 10px;
        font-size: 14px;

        > .left {
          display: flex;
          align-items: center;

          > .delete {
            width: 32px;
            height: 32px;
            background: #dd0000;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            &:after {
              content: '';
              display: block;
              width: 22px;
              height: 6px;
              background: #FFFFFF;
            }
          }

          > .icon {
            width: 48px;
            height: 48px;
            background: #dddedd;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 12px;
            font-size: 30px;
          }
        }

        > .right {
          display: flex;
          align-items: center;

          > .edit {
            margin: 0 10px;
          }

          > .icon {
            font-size: 30px;
            fill: #000050;
          }
        }
      }
    }
  }

  > .add {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    padding: 14px 0;
    bottom: 0;
    z-index: 10;
    background: #f0eeef;

    > .button {
      color: #000050;
    }

  }
}
</style>