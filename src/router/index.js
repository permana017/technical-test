
import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/Dashboard.vue"
import Home from "../pages/Home.vue";
import Overview from '../pages/Overview.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/overview',
        name: 'overview',
        component: Overview
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

