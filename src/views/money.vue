<template>
  <Layout>
    <div class="top-money">
      <ul class="list">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class="newBtn">新增标签</div>
    </div>
    <label class="exegesis">
      <span class="zs">注释</span>
      <input type="text" placeholder="请输入内容"/>
    </label>
    <div class="go-money">
      <ul>
        <li class="selected">收入</li>
        <li >支出</li>
      </ul>
    </div>
    <div class="screen">
      100
    </div>
    <div class="buts">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>x</button>
      <button class="ok">ok</button>
      <button>0</button>
      <button>.</button>
      <button>%</button>
      <button>+</button>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "money",
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/font.scss";

.top-money {
  font-size: 14px;
  margin-bottom: 12px;

  .list {
    display: flex;
    margin-left: 16px;

    > li {
      height: 24px;
      background: #D9D9D9;
      border-radius: 12px;
      padding: 0 20px;
      margin-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.selected{
        background: red;
      }
    }
  }

  > .newBtn {
    width: 56px;
    font-size: 12px;
    padding: 4px 0;
    margin-left: 16px;
    position: relative;
    color: #999999;
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      border-bottom: 1px solid #666666;
      bottom: 0;
    }
  }
}

.exegesis {
  //border: 1px solid red;
  background: #F5F5F5;;
  display: flex;
  align-items: center;

  > .zs {
    margin: 0 16px;
  }

  > input {
    flex-grow: 1;
    height: 64px;
    background: transparent;
    border: none;
  }
}

.go-money {
  background: #C4C4C4;
  height: 64px;

  ul {
    display: flex;
    justify-content: flex-start;
    height: 100%;
    li {
      flex: 1;
      background: #C4C4C4;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected{
        &:before{
          content: "";
          display: block;
          width: 100%;
          position: absolute;
          height: 4px;
          background: #333333;
          bottom: 0;
        }
      }
    }
  }

}

.screen {
  text-align: right;
  line-height: 64px;
  font-size: 36px;
  color: #333333;
  height: 64px;
  padding: 0 10px;
  box-shadow: inset 0px 3px 3px $color-shadow;
}

.buts {
  @extend %clearfix;

  > button {
    width: 20%;
    height: 64px;
    float: left;
    border: none;
    &.ok {
      height: 128px;
      float: right;
    }
    $color: #f2f2f2;
    @for $i from 1 through 20 {
      .item-#{$i} { width: 2em * $i; }
      &:nth-child(1){
        background: darken($color,4%);
      }
    }


  }

}
</style>