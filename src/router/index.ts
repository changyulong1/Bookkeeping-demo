import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/money.vue'
import Labels from '@/views/labels.vue'
import Statistics from '@/views/statistics.vue'
import onFile from '@/views/noFile.vue'
import TagLable from "@/views/TagLable.vue";


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:"/",
    redirect:"/money"

  },
  {
    path:'/money',
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
