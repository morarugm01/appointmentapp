import './bootstrap';
import { createApp } from 'vue' 
import App from '@/Layouts/ceo/Layout.vue';
import router from '@/routes/index.js';

 

createApp(App) 
    .use(router)
    .mount('#app')