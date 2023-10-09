import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import ComponentsFirst from '@/components/ComponentsFirst.vue'
import ComponentsSecond from '@/components/ComponentsSecond.vue'
import PricingLayout from '@/components/PricingLayout.vue'
import ComponentsFouth from '@/components/ComponentsFouth.vue'

// import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

const routes = [
    { path: '/one', component: ComponentsFirst },
    { path: '/two', component: ComponentsSecond },
    { path: '/three', component: PricingLayout },
    { path: '/four', component: ComponentsFouth }
  ]

import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

const app = createApp(App)
import axios from 'axios'
import VueAxios from 'vue-axios'


app.use(VueAxios,axios)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

