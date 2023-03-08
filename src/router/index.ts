import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FromNight from '../views/FromNight.vue'
import BrideGroomView from '../views/BrideGroomView.vue'
import WithBrideGroomView from '../views/WithBrideGroomView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/with-bride-groom',
      name: 'with-bride-groom',
      component: WithBrideGroomView
    },
    {
      path: '/bride-groom',
      name: 'bride-groom',
      component: BrideGroomView
    },
    {
      path: '/from-night',
      name: 'from-night',
      component: FromNight
    }
  ]
})

export default router
