<template>
  <layout>
    <ol class="tagsList">
      <li>
        <span>衣</span>
        <Icon iconName="jian"/>
      </li>
      <li>
        <span>食</span>

        <Icon iconName="jian"/>
      </li>
      <li>
        <span>住</span>

        <Icon iconName="jian"/>
      </li>
      <li>
        <span>行</span>

        <Icon iconName="jian"/>
      </li>
    </ol>
    <div class="creatTag-parent">
      <button class="creatTag">添加标签</button>
    </div>
  </layout>
</template>

<script>
export default {
  name: "statistics",
}
</script>

<style lang="scss" scoped>
.tagsList {
  background: #FFFFFF;
  font-size: 16px;
  padding-left: 16px;
  > li {
    min-height:40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #BCBBC1;;
    svg{
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 22px;
    }
  }
}
.creatTag{
  background: #767676;
  color: #FFFFFF;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-parent{
    text-align: center;
    padding: 16px;
    margin: 44-16px;
  }
}

</style>