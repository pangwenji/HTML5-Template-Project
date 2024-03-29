const routes = [
    {
        path: '/404',
        name: 'err404',
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (errPage.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/errPage/err404/index.vue')
    }
];
export default routes;
