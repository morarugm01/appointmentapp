import './bootstrap';

import { createApp } from 'vue' 
import { createRouter, createWebHistory } from 'vue-router';
import App from './Layouts/ceo/Layout.vue';
import Dashboard from './pages/Ceo/Dashboard/Dashboard.vue';
import OrganizationIndex from './pages/Ceo/Organization/Index.vue' 
import OrganizationShow from './pages/Ceo/Organization/Show.vue';
import PlanIndex from './pages/Ceo/Plan/Index.vue';
import PlanShow from './pages/Ceo/Plan/Show.vue';
import Settings from './pages/Ceo/Settings.vue';
 

const routes = [
    {path: '/ceo/dashboard', component: Dashboard },
    {path: '/ceo/organizations/index', component: OrganizationIndex},
    {path: '/ceo/organizations/show', component: OrganizationShow},
    {path: '/ceo/plans/index', component: PlanIndex},
    {path: '/ceo/plans/show', component: PlanShow},
    {path: '/ceo/settings', component: Settings}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App) 
    .use(router)
    .mount('#app')