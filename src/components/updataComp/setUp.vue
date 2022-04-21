<template>
    <div class="setUp">
      <Inout iconName="44"></Inout>
        <ul class="iconList">
          <li>
            <div class="left">
              <div class="delete"></div>
              <div class="icon">
                <Icon icon-name="jiaotong"/>
              </div>
              <div>公交</div>
            </div>
            <div class="right">
              <span class="edit">编辑</span>
              <Icon icon-name="shangxia"/>
            </div>
          </li>
        </ul>
      <div class="add">
        <Button>
          <Icon icon-name="jiahao"/>
          新增泪飚
        </Button>
      </div>
    </div>
</template>

<script lang="ts">

import Inout from "@/components/updataComp/Inout.vue";
import Button from "@/components/Button.vue";
export default {
  name: "setUp",
  components: {Button, Inout}
};
</script>

<style lang="scss" scoped>
.setUp{
  border: 1px solid red;
  height: 100%;
  position: relative;
  >.iconList{
    >li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #FFFFFF;
      margin: 2px 0;
      padding: 10px 10px;
      font-size: 14px;
      >.left{
        display: flex;
        align-items: center;
        >.delete{
          width: 32px;
          height: 32px;
          background: #dd0000;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          &:after{
            content: '';
            display: block;
            width: 22px;
            height: 6px;
            background: #FFFFFF;
          }
        }
        >.icon{
          width: 48px;
          height: 48px;
          background: #dddedd;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 12px ;
          font-size: 30px;
        }
      }
      >.right{
        display: flex;
        align-items: center;
        >.edit{
          margin: 0 10px ;
        }
        >.icon{
          font-size: 30px;
          fill: #000050;
        }
      }
    }
  }
 >.add{
   display: flex;
   justify-content: center;
   position: absolute;
   width: 100%;
   bottom: 0;
   background: #f0eeef;
   >.button{
     color: #000050;
   }

 }
}

</style>