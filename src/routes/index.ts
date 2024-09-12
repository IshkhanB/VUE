import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import MyPage from '#root/pages/MyPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/my', component: MyPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}