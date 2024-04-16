import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Login from "@/views/Login.vue";
import System from "@/views/System.vue";

const routes = [
    {
        path: '/',
        name: 'App',
        component: App,
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/system',
        name: 'System',
        component: System,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if (!token) {
                next('/login'); // Redirect to login page if token is empty
            } else {
                next(); // Proceed to System page if token is available
            }
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
