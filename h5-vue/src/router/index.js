import { createRouter, createWebHistory } from 'vue-router'
import HorizontalExample from '../views/horizontalExample.vue'
import HorizontalExampleMain from '../views/horizontalExampleMain.vue'
import HorizontalExampleMainE from '../views/horizontalExampleMainE.vue'
import HorizontalExampleMainF from '../views/horizontalExampleMainF.vue'
import Modal from '../views/modal.vue'

// import FiveHorizontalExample from '../views/five/horizontalExample.vue'
// import FiveHorizontalExampleMain from '../views/five/horizontalExampleMain.vue'
// import FiveHorizontalExampleMainE from '../views/five/horizontalExampleMainE.vue'
// import FiveHorizontalExampleMainF from '../views/five/horizontalExampleMainF.vue'
// import FiveModal from '../views/five/modal.vue'

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
    {
      path: '/horizontal-example-maine',
      name: 'horizontal-example-maine',
      component: HorizontalExampleMainE
    },
    {
      path: '/horizontal-example-mainf',
      name: 'horizontal-example-mainf',
      component: HorizontalExampleMainF
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
    // {
    //   path: '/fivehorizontal-example',
    //   name: 'fivehorizontal-example',
    //   component: FiveHorizontalExample
    // },
    // {
    //   path: '/fivehorizontal-example-main',
    //   name: 'fivehorizontal-example-main',
    //   component: FiveHorizontalExampleMain
    // },
    // {
    //   path: '/fivehorizontal-example-maine',
    //   name: 'fivehorizontal-example-maine',
    //   component: FiveHorizontalExampleMainE
    // },
    // {
    //   path: '/fivehorizontal-example-mainf',
    //   name: 'fivehorizontal-example-mainf',
    //   component: FiveHorizontalExampleMainF
    // },
    // {
    //   path: '/fivemodal',
    //   name: 'fivemodal',
    //   component: FiveModal
    // },
  ]
})

export default router
