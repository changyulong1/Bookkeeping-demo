<template>
  <div class="parent">
    <div class="navBut">
      <Icon icon-name="left"/>
      <div class="but">
        <button>支出</button>
        <button class="selector">收入</button>
      </div>
      <span></span>
    </div>
    <div class="tagList">
      <ul>
        <li v-for="time in icons['outList']" :key="time.name">
          <div>
            <Icon :icon-name="time.name"/>
          </div>
          <span>{{ time.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "Bill",
  data(){
    return {
      inList:['gongzi','jianzhi','qianbao','hongbao','jiangjin','baoxiao','touzi','jiekuan','tuikuan'],
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
            {name:'tuikuan',title:'退款'}
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
          {name:'lufei',title:'过路费'},
          {name:'songli',title:'送礼'},
          {name:'haizi',title:'孩子'},
          {name:'huankuan',title:'还款'},
          {name:'shuma',title:'数码'},
          {name:'app',title:'app'},
        ],
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/font.scss";
.parent{
  padding: 0 14px;
  >.navBut{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    background: #fdfdfd;
    margin-bottom: 1px;
    >.icon{
     fill: #31409f;
    }
   >.but{
     >button{
       background: #FFFFFF;
       border: none;
       padding: 16px 24px;
       color: #323232;
       position: relative;
       &.selector{
          color: #5a5f98;
         &:after{
           content: '';
           display: block;
           height: 2px;
           width: 100%;
           background: #31409f;
           position: absolute;
           left: 0;
           bottom: 0;
         }
       }
     }
   }
  }
  >.tagList{
    ul{
      border: 1px solid red;
      @extend %clearfix;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 10px;
        float: left;
        width: 25%;
        >div{
          width: 46px;
          height: 46px;
          background: #dddddd;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
        }
        >span{
          font-size: 12px;
          padding: 6px 0;
        }
      }
    }
  }

}
</style>