import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import TheStore from '../views/TheStore.vue';

const routes = [
    {
        path: '/',
        component: HomePage, 
    },{
        path: '/store', 
        component: TheStore, 
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
})

export default router; 