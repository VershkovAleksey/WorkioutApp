import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Exercices from '@/components/layouts/ExercicesLayout.vue'
import Community from '@/components/layouts/CommunityLayout.vue'
import Pricing from '@/components/layouts/PricingLayout.vue'
import AboutUs from '@/components/layouts/AboutUsLayout.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import { createStore } from 'vuex'

import App from './App.vue'

const routes = [
    { path: '/exercices', component: Exercices, alias: "/" },
    { path: '/community', component: Community },
    { path: '/pricing', component: Pricing },
    { path: '/about', component: AboutUs },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const store = createStore({
    state() {
        return {
            count: 0,
            prices: [
                { id: 1, price: 1000, coach: "Ivanov Ivan" },
                { id: 2, price: 2000, coach: "Petrov Petr" },
                { id: 3, price: 3000, coach: "Semenov Semen" },
                { id: 4, price: 4000, coach: "Vasiliev Valisiy" },
                { id: 5, price: 5000, coach: "Maksimov Maksim" },
            ]
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        addNewPrice(state, item) {
            state.prices.push(item);
        },
        deleteItem(state, item) {
            state.prices.slice(state.prices.indexOf(item), 1);
        },
        updateItem(state, item) {
            state.prices.splice(state.prices.indexOf(state.prices.find(x => x.id === item.id)), item);
        }
    },
    getters: {

    },
    actions: {

    }
})

const app = createApp(App)

app.use(ElementPlus);
app.use(router);
app.use(VueAxios, axios);
app.use(store);
app.mount('#app');





