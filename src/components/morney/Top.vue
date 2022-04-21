<template>
  <!--  <div class="top-money">-->
  <!--    <div>-->
  <!--      <button class="newBtn" @click="createType">新增标签</button>-->
  <!--    </div>-->
  <!--    <ul class="list">-->
  <!--      <li v-for="(get,index) in nmverDatas" :key="index"-->
  <!--          @click="select(get)"-->
  <!--      :class="{selected: selectDatas.indexOf(get)>=0}">-->
  <!--        {{ get.name }}-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </div>-->
  <div class="tagList">
    <ul>
      <li :class="{selector:name === time.title}" v-for="time in iconlist[iconType]" :key="time.name"
          @click="witch(time)"
      >
        <div>
          <Icon :icon-name="time.name"/>
        </div>
        <span>{{ time.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Watch} from "vue-property-decorator";
import iconlist from "@/store/iconlist";


@Component
export default class Top extends Vue {
  name = '';
  @Prop() iconType: string | undefined;
  @Prop() readonly iconlist: string[] | undefined;
  selectDatas: string[] = [];

  witch(time: { id: string, name: string, title: string }) {

    if (time.title === '自定义') {
      return;
    }
    if(this.name === time.title){
      this.name = ''
      this.$emit('updata:getTime');
    }else{
      this.name = time.title;
      this.$emit('updata:getTime', time);
    }
  }

  createType() {
    const name = prompt("请输入新标签");
    if (name) {
      this.$store.commit('createTag', name);
      if (this.$store.state.tagName === null) {
        window.alert('标签名重复请重新输入');
      } else {
        window.alert("添加成功");
      }
    }
  }

  @Watch('iconType')
  onIconTypeChange(Value: string, oldValue: string) {
    console.log('icontype变啦');
    this.name = '';
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/font.scss";
.tagList {
  ul {
    @extend %clearfix;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 10px;
      float: left;
      width: 25%;

      > div {
        width: 46px;
        height: 46px;
        background: #dddddd;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 34px;
      }

      > span {
        font-size: 12px;
        padding: 6px 0;
      }

      &.selector {
        > div {
          background: #31409f;
          color: #FFFFFF;

          > .icon {
            fill: #FFFFFF;
          }
        }

      }
    }
  }
}
</style>