<template>
  <div class="tagList">
    <ul>
      <li :class="{selector:name === time.title}" v-for="time in iconlist[iconType]" :key="time.id"
          @click="witch(time)"
      >
        <div>
          <Icon :icon-name="time.name"/>
        </div>
        <span>{{ time.title }}</span>
      </li>
      <li @click="edit">
        <div>
          <Icon :icon-name="setName"/>
        </div>
        <span>{{ setTitle }}</span>
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
  setName = 'shezhi';
  setTitle = '自定义';
  @Prop() iconType: string | undefined;
  @Prop() readonly record?:RecordID
  @Prop() readonly iconlist: string[] | undefined;
 created(){
   if(this.record){
     this.name=this.record.tags.title
   }
 }
  witch(time: { id: string, name: string, title: string }) {

    if (this.name === time.title) {
      this.name = '';
      this.$emit('updata:getTime');
    } else {
      this.name = time.title;
      this.$emit('updata:getTime', time);
    }
  }

  edit(){
    this.$router.push({path: '/labels', query: {type: this.iconType}});
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
  margin: 0 auto;
  ul {
    @extend %clearfix;
    overflow: auto;
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