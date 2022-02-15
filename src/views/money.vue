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
    <div class="exegesis">
      <spasn class="zs">注释</spasn>
      <input type="text" placeholder="请输入内容"/>
    </div>
    <div class="go-money">
      <button class="go">收入</button>
      <button class="out">支出</button>
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
.top-money {
  font-size: 14px;
  margin-bottom: 12px;

  .list {
    display: flex;
    margin-left: 16px;

    > li {
      height: 24px;
      background: #D9D9D9;
      border-radius: (24px/2);
      padding: 0 20px;
      margin-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
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
  display: flex;
  background: #C4C4C4;
  height: 64px;
  > button{
    flex:1;
    background: #C4C4C4;
  }
}
.screen{
  text-align: right;
  line-height: 64px;
  font-size: 36px;
  color:  #333333;
  height: 64px;
  padding: 0 10px;
}
.buts{
 margin-right: -10px;
  >button{
    width: 20vw;
    height: 64px;
    float: left;
    &.ok{
      height: 128px;
      float: right;
    }
  }

}
</style>