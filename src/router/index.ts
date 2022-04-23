import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/money.vue'
import Labels from '@/views/labels.vue'
import Statistics from '@/views/statistics.vue'
import onFile from '@/views/noFile.vue'
import TagLable from "@/views/TagLable.vue";
import SetTag from "@/components/updataComp/SetTag.vue";
import createTag from "@/components/updataComp/CreateTag.vue";
import Count from "@/components/updataComp/Count.vue";

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
    path:"/labels/tag/:id",
    component: TagLable
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
    path:"*",
    component: onFile
  }
]

const router = new VueRouter({
  routes
})

export default router
