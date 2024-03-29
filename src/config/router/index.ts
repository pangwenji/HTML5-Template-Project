const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        meta: {
            title: '首页',
            keepAlive: true
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/index/index.vue')
    }
];
export default routes;
