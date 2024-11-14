import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createMemoryHistory, createRouter} from "vue-router";
import MainView from './views/MainView.vue';
import ServicesView from './views/ServicesView.vue';
import PlantsView from './views/PlantsView.vue';
import ToolsView from './views/ToolsView.vue';
import ContactView from './views/ContactView.vue';


const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', name: 'home', component: MainView },
        { path: '/services', name: 'services', component: ServicesView },
        { path: '/plants', name: 'plants', component: PlantsView },
        { path: '/tools', name: 'tools', component: ToolsView },
        { path: '/contact', name: 'contact', component: ContactView },
    ],
})

createApp(App)
    .use(router)
    .mount('#app')