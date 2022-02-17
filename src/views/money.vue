<template>
  <Layout class-parfir="layout">
   <Buts/>
    <Screen/>
   <Gomoney :propA="555"/>
    <Exegesis/>
    <Top/>
  </Layout>
</template>

<script>
import Top from "@/components/morney/Top";
import Exegesis from "@/components/morney/Exegesis";
import Gomoney from "@/components/morney/Gomoney";
import Screen from "@/components/morney/Screen";
import Buts from "@/components/morney/Buts";
export default {
  name: "money",
  components: {Buts, Screen, Gomoney, Exegesis, Top},
}
</script>
<style lang="scss" >
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>