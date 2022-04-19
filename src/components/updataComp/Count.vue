<template>
  <div class="parent">
    <div class="header">
      <h3>2022年4月<Icon iconName="tou" /></h3>
      <div class="main">
        <div>
          <span>本月收入</span>
          <span class="money">￥3000</span>
          <span>本月收入：500</span>
        </div>
        <div>
          <span class="year">年度统计 <Icon iconName="leftTou" /></span>
          <span></span>
          <span>本月结余：3000</span>
        </div>
      </div>

    </div>
    <div class="section">
      <div class="date">
       <div>
         2022年4月
       </div>
        <div class="inLout">
          <span>收入：1000</span>
          <span>支出：5000</span>
        </div>
      </div>
      <ul class="detailed">
        <li>
          <div class="remarks">
            <div class="icon">
              <Icon iconName="che" />
            </div>
            <span>交通</span>
          </div>
          <span>+5000</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
@Component
export default class Count extends Vue {
    list = 0
}
</script>

<style lang="scss" scoped>
.parent{
  display: flex;
  flex-direction: column;
  height: 100%;
  > .header{
    background: #31409f;
    padding: 12px 12px;
    color: #FFFFFF;
    > h3{
      padding: 16px 0;
      font-size: 16px;
      display: flex;
      align-items: center;

      > .icon{
        margin-left: 8px;
      }
    }
    >.main{
      display: flex;
      justify-content: space-between;
      > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        >span{
          margin: 10px 0;
          &.money{
            font-size: 30px;
          }
          &.year{
            text-align: right;
            > .icon{
              margin-right: 8px;
            }
          }
        }
      }

    }
  }
  >.section{
    flex: 1;
    padding: 0 4px;
    >.date{
      display: flex;
      justify-content: space-between;
      background: #efefef;
      padding: 4px 0;
      font-size: 12px;
      color: #707070;
      >.inLout{
        >span{
          margin-right: 10px;
        }
      }
    }
    >.detailed{
      padding: 0 10px;
      background: #FFFFFF;
      >li{
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        margin: 2px 0;
        line-height: 46px;
        >.remarks{
          display: flex;
          align-items: center;
          >div.icon{
            width: 46px;
            height: 46px;
            font-size: 24px;
            text-align: center;
            border-radius: 100%;
            margin-right: 12px;
            background: #dedede;
          }
        }
      }
    }
  }
}
</style>