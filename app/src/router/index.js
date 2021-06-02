import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/items',
    component: () => import('../components/Items.vue'),
   
  },
  // {
  //   path: '/cart',
  //   component: () => import('../views/Cart.vue'),
  // },
  {
    path: '/tablets',
    component: () => import('../views/Tablets.vue'),
    
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
