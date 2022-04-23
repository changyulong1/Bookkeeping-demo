import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/money.vue'
import Labels from '@/views/labels.vue'
import Statistics from '@/views/statistics.vue'
import onFile from '@/views/noFile.vue'
import SetTag from "@/components/updataComp/SetTag.vue";
import createTag from "@/components/updataComp/CreateTag.vue";
import Count from "@/components/updataComp/Count.vue";
import Modify from "@/components/Modify.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:"/",
    redirect:"/Count"
  },
  {
    path:'/Count',
    component:Count
  },
  {
    path:'/Money',
    component:Money
  },
  {
    path:"/labels",
    component:Labels
  },
  {
    path:"/labels/SetTag/:id",
    component:SetTag
  },
  {
    path:"/labels/Create/:iconName",
    component:createTag
  },
  {
    path:"/statistics",
    component:Statistics
  },
  {
    path:"/Modify/:id",
    component:Modify
  },
  {
    path:"*",
    component: onFile
  }
]

const router = new VueRouter({
  routes
})

export default router
