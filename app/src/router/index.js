import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/phones',
    component: () => import('../views/Phones.vue'),
    children: [
      {
        path: 'registration',
        component: () => import('../views/lists/Registration.vue'),
      }
    ]
    
  },
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
