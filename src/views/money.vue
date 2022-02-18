<template>
  <Layout class-parfir="layout">
    <Buts/>
    <Gomoney/>
    <Exegesis/>
    <Top :nmver-datas.sync="gets"/>
  </Layout>
</template>

<script>
import Top from "@/components/morney/Top";
import Exegesis from "@/components/morney/Exegesis";
import Gomoney from "@/components/morney/Gomoney";
import Buts from "@/components/morney/Buts";

export default {
  name: "money",
  components: {Buts, Gomoney, Exegesis, Top},
  data(){
    return {
      gets: ['衣', '食', '住', '行']
    }
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>