<template>
  <div class="SetTag">
    <Inout>
      <template #title>请输入类别</template>
      <template #span>
        <span @click="createTag">保存</span>
      </template>
    </Inout>
    <div class="tag">
      <div>
        <div class="icon">
          <Icon :icon-name="this.name"/>
        </div>
        <div class="title">
          <span>{{ value }}</span>
          <input type="text" placeholder="输入类别名称" v-model="value">
        </div>
      </div>

    </div>
    <div class="choice">
      <p>选择图标</p>
      <ul>
        <li v-for="time in svg" :key="time.name"
            :class="{selector:name === time.name}"
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
import svgName from "@/lid/svgName.ts";
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
  components: {Inout}
})
export default class CreateTag extends Vue {
  svg = svgName;
  value = '';
  name = '';

  action(name: string) {
    this.name = name;
  }

  created() {
    this.$store.commit('getLanguage');
  }

  createTag() {
    const iconName = this.$route.params.iconName;
    this.$store.commit('createTag',
        {time:{name:this.name,title:this.value},iconName:iconName});
    // this.$router.back()
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