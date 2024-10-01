import { createApp } from 'vue'
import './style.css'
import App from '#root/App.vue'
import HeaderComp from './components/HeaderComponent.vue'
import {router} from './routes'
import {createPinia} from 'pinia'

const pinia =createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.component('HeaderComp', HeaderComp)
app.mount('#app')