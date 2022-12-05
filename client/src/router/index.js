import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import TheStore from '../views/TheStore.vue';
import TheArticle from '../views/TheArticle.vue';

const routes = [
    {
        path: '/',
        component: HomePage, 
    },{
        path: '/store', 
        component: TheStore, 
    }, {
        path: '/store/:id', 
        component: TheArticle,
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
})

export default router; 