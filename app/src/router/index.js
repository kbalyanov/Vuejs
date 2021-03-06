import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/items',
    component: () => import('../views/Items.vue'),
   
  },
  
  {
    path: '/tablets',
    component: () => import('../views/Tablets.vue'),
    
  },

  {
    path: '/cart',
    component: () => import('../views/Cart.vue'),
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
