import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { createGuardSlice } from './guards';

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_ROUTER_BASE),
    routes
});

createGuardSlice(router);
export default router;
