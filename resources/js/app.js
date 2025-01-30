import './bootstrap';

import { createApp } from 'vue' 
import OrganizationsIndex from './pages/Organizations/Index.vue' 
 
createApp({}) 
    .component('OrganizationsIndex', OrganizationsIndex)
    .mount('#app')