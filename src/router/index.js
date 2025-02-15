import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('../views/home/HomePage.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/HomePage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/AboutPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/ContactPage.vue')
    },
    {
      path: '/pages',
      name: 'pages',
      component: () => import('../views/pages/PagesPage.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('../views/book-table/BookPage.vue')
    },
  ],
})

export default router
