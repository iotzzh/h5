import { createRouter, createWebHistory } from 'vue-router'
import HorizontalExample from '../views/horizontalExample.vue'
import HorizontalExampleMain from '../views/horizontalExampleMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'horizontal-example',
    },
    {
      path: '/horizontal-example',
      name: 'horizontal-example',
      component: HorizontalExample
    },
    {
      path: '/horizontal-example-main',
      name: 'horizontal-example-main',
      component: HorizontalExampleMain
    },
  ]
})

export default router
