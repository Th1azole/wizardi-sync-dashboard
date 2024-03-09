import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LogIn from "@/views/LogIn.vue";
import DashBoard from '@/pages/DashBoard.vue';
import Cookies from 'js-cookie'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Login',
    name: 'Login',
    component: LogIn
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: DashBoard,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const access_token = Cookies.get('access_token');
    if (access_token) {
      next();
    } else {
      next('/Login');
    }
  } else {
    next();
  }
});

export default router;
