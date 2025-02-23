
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/pages/Ceo/Dashboard/Dashboard.vue';
import OrganizationIndex from '@/pages/Ceo/Organization/Index.vue' 
import OrganizationShow from '@/pages/Ceo/Organization/Show.vue';
import PlanIndex from '@/pages/Ceo/Plan/Index.vue';
import PlanShow from '@/pages/Ceo/Plan/Show.vue';
import Settings from '@/pages/Ceo/Settings.vue';


const routes = [
    {path: '/ceo/dashboard', name: 'ceo.dashboard', component: Dashboard },
    {path: '/ceo/organizations/index', name: 'ceo.organizations.index', component: OrganizationIndex},
    {path: '/ceo/organizations/show', name: 'ceo.organizations.show', component: OrganizationShow},
    {path: '/ceo/plans/index', name: 'ceo.plans.index', component: PlanIndex},
    {path: '/ceo/plans/show', name: 'ceo.plans.show', component: PlanShow},
    {path: '/ceo/settings', name: 'ceo.settings', component: Settings}
]

export default createRouter({
    history: createWebHistory(),
    routes
})