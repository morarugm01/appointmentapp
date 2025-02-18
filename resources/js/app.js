import './bootstrap';

import { createApp } from 'vue' 
import OrganizationIndex from './pages/Organization/Index.vue' 
import { createRouter, createWebHistory } from 'vue-router';
 

const routes = [
    {path: '/', component: OrganizationIndex },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp({}) 
    .use(router)
    .mount('#app')