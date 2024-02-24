import { createRouter, createWebHistory } from 'vue-router'
import LogIn from "@/views/LogIn.vue"
import DashBoard from '@/pages/DashBoard.vue'
import OverviewField from "@/pages/components/OverviewField.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/OverviewField',
      name: 'OverviewField',
      component: OverviewField
    },
    {
      path: '/Login',
      name: 'Login',
      component: LogIn
    },
    {
      path: '/DashBoard',
      name: 'DashBoard',
      component: DashBoard
    },
  ]

})
export default router
