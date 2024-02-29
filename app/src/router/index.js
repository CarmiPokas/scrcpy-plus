import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue';
import settings from '../views/settings.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
