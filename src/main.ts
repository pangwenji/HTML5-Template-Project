import App from './App.vue';
// 导入router配置
import router from './packages/router';

// 全局基础样式
import 'tailwindcss/tailwind.css';
import './assets/css/index.scss';
// 导入全局插件
import '@/resources/plugin';
// 导入 vconsoel
import '@/packages/vConsole';

import { createPinia } from 'pinia';

import { createApp } from 'vue';

const app = createApp(App);

//创建一个 pinia 实例(根 store)并将其传递给应用
app.use(createPinia());
// router初始化
app.use(router);

app.mount('#app');
