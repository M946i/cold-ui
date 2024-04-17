import { createRouter, createWebHistory } from 'vue-router';
import Login from "@/views/user/login/Login.vue";
import System from "@/views/system/System.vue";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,

    },
    {
        path: '/system',
        name: 'System',
        component: System,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if (!token) {
                next('/'); // Redirect to login page if token is empty
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
