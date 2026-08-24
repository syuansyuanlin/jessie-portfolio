import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import GraphicWorkDetailView from '@/views/GraphicWorkDetailView.vue'
import BrandAdvertisingView from '@/views/BrandAdvertisingView.vue'
import ProductDmView from '@/views/ProductDmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to) => {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/graphic-design/booking-system-dm',
      name: 'booking-system-dm',
      component: GraphicWorkDetailView,
    },
    {
      path: '/graphic-design/brand-advertising',
      name: 'brand-advertising',
      component: BrandAdvertisingView,
    },
    {
      path: '/graphic-design/product-dm',
      name: 'product-dm',
      component: ProductDmView,
    },
  ],
})

export default router
