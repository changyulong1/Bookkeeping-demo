<template>
    <div class="SetTag">
      <Inout>
        <template #title>请输入类别</template>
        <template #span>保存</template>
      </Inout>
      <div class="tag">
        <div>
          <div class="icon">
              <Icon icon-name="jiaotong"/>
          </div>
          <div class="title">
            <span>{{ inputValue }}</span>
              <input type="text" placeholder="输入类别名称" v-model="inputValue">
          </div>
        </div>

      </div>
      <div class="choice">
        <p>选择图标</p>
          <ul>
            <li v-for="time in icons['outList']" :key="time.name">
              <div class="icon">
                <Icon icon-name="jiaotong" />
              </div>
            </li>
            <li>
              <div class="icon">
                <Icon icon-name="jiaotong" />
              </div>
            </li>
          </ul>
      </div>
    </div>
</template>

<script lang="ts">
import Inout from "@/components/updataComp/Inout.vue";
export default {
  name: "SetTag",
  components: {Inout},
  data(){
    return {
      inputValue:'交通',
      icons:{
        'inList':[
          {name:'gongzi',title:'工资'},
          {name:'jianzhi',title:'兼职'},
          {name:'qianbao',title:'生活费'},
          {name:'hongbao',title:'红包'},
          {name:'jiangjin',title:'奖金'},
          {name:'baoxiao',title:'报销'},
          {name:'touzi',title:'投资'},
          {name:'jiekuan',title:'借款'},
          {name:'tuikuan',title:'退款'},
          {name:'shezhi',title:'自定义'}
        ],
        "outList":[
          {name:'canyin',title:'餐饮'},
          {name:'shuiguo',title:'水果'},
          {name:'jiaotong',title:'零食'},
          {name:'maicai',title:'买菜'},
          {name:'tongxun',title:'通讯'},
          {name:'shenghuo',title:'生活用品'},
          {name:'fushi',title:'服饰'},
          {name:'meirong',title:'美容'},
          {name:'yule',title:'娱乐'},
          {name:'jianshen',title:'健身'},
          {name:'baoxian',title:'保险'},
          {name:'yiyuan',title:'医疗'},
          {name:'touzi',title:'投资'},
          {name:'xuexi',title:'学习'},
          {name:'jiaju',title:'家居'},
          {name:'zhufang',title:'住房'},
          {name:'shuidian',title:'水电费'},
          {name:'weixiu',title:'维修'},
          {name:'tingche',title:'停车'},
          {name:'jiayou',title:'加油'},
        ],
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/font.scss";
.SetTag{
  background: #FFFFFF;
  height: 100%;
  display: flex;
  flex-direction: column;
  >.navBut{
    color: #7175b0;
  }
  >.tag{
    margin-top: 2px;
    border-top: 1px solid #e0e0e0;
  >div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    >.icon{
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
    >.title{
      max-width: 100%;
      position: relative;
      min-width: 100px;
      margin: 14px 0;
      display: inline-block;
      border-bottom: 1px solid #6d6d6d;
      >span{
        display: inline-block;
        max-width: 100%;
      }
      >input{
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
  >.choice{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    >p{
      padding: 4px 10px;
      background: #e0e0e0;
    }
    >ul{
      flex: 1;
      overflow: auto;
      @extend %clearfix;
      >li{
        float: left;
        width: 25%;
        display: flex;
        justify-content: center;
        padding: 10px 0;
        >.icon{
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