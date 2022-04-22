<template>
  <div class="SetTag">
    <Inout>
      <template  #title>请输入类别</template>
      <template v-slot:span>
        <span @click="onClick">保存</span>
      </template>
    </Inout>
    <div class="tag">
      <div>
        <div class="icon">
          <Icon :icon-name="tag.name"/>
        </div>
        <div class="title">
          <span>{{ getTitle }}</span>
          <input type="text" placeholder="输入类别名称" v-model="getTitle">
        </div>
      </div>

    </div>
    <div class="choice">
      <p>选择图标</p>
      <ul>
        <li :class="{selector:name === time.name}"
            v-for="time in svg" :key="time.name"
            @click="action(time.name)"
        >
          <div class="icon">
            <Icon :icon-name="time.name"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Inout from "@/components/updataComp/Inout.vue";
import Vue from "vue";
import svgName from "@/lid/svgName.ts";
import {Component} from "vue-property-decorator";


@Component({
  components: {Inout},
})
export default class SetTag extends Vue {
  svg = svgName
  name = ''
  getTitle = ''

  get tag() {
    this.getTitle = this.$store.state.tag.title
    return this.$store.state.tag;
  }

  created() {
    this.$store.commit('getLanguage');
    const tagId = this.$route.params.id
    const type = this.$route.query.iconName
    this.$store.commit('getTag', {id: tagId, iconName: type});
  }
  action(name:string){
    this.name = name
    this.tag.name = name
  }
  onClick(){
    const tagId = this.$route.params.id
    const type = this.$route.query.iconName
    this.$store.commit('updateTag',
        {id:tagId,name:this.tag.name,title:this.getTitle,iconName:type})
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/font.scss";

.SetTag {
  background: #FFFFFF;
  height: 100vh;
  display: flex;
  flex-direction: column;
  > .navBut {
    color: #7175b0;
  }

  > .tag {
    margin-top: 2px;
    border-top: 1px solid #e0e0e0;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;

      > .icon {
        width: 48px;
        height: 48px;
        background: #dddedd;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        margin: 14px;
      }

      > .title {
        max-width: 100%;
        position: relative;
        min-width: 100px;
        margin: 14px 0;
        display: inline-block;
        border-bottom: 1px solid #6d6d6d;

        > span {
          display: inline-block;
          max-width: 100%;
        }

        > input {
          width: 100%;
          display: inline-block;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          opacity: 1;
          text-align: center;
          caret-color: black;
          border: none;
        }
      }
    }
  }

  > .choice {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    > p {
      padding: 4px 10px;
      background: #e0e0e0;
    }

    > ul {
      flex: 1;
      overflow: auto;
      @extend %clearfix;

      > li {
        float: left;
        width: 25%;
        display: flex;
        justify-content: center;
        padding: 10px 0;

        &.selector {
          > div {
            background: #31409f;
            color: #FFFFFF;

            > .icon {
              fill: #FFFFFF;
            }
          }

        }

        > .icon {
          width: 48px;
          height: 48px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #e0e0e0;
          font-size: 30px;
        }
      }
    }
  }
}

</style>