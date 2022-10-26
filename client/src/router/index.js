import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const routes = [
    {
        path: '/',
        component: HomePage, 
    },{
        path: '/shop', 
        component: HomePage, 
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
})

export default router; 