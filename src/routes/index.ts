import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import MyPage from '#root/pages/MyPage.vue'
import MyProject from '#root/pages/MyProject.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/my', component: MyPage },
  { path: '/my_project', component: MyProject },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}