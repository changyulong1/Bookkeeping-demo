<template>
  <div class="top-money">
    <div>
      <button class="newBtn">新增标签</button>
    </div>
    <ul class="list">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Top"
}
</script>

<style lang="scss" scoped>
.top-money {
  font-size: 14px;
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  .list {
    display: flex;
    flex-wrap: wrap;
    > li {
      height: 24px;
      background: #D9D9D9;
      border-radius: 12px;
      margin-bottom: 12px;
      padding: 0 15px;
      margin-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;

      &
      .selected {
        background: red;
      }

    }
  }

  > div {

    > .newBtn {
      width: 56px;
      font-size: 12px;
      padding: 4px 0;
      position: relative;
      margin-top: 10px;
      background: white;
      border: none;
      color: #999999;
      border-bottom: 1px solid #666666;
    }

  }

}
</style>