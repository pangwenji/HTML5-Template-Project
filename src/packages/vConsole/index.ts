/*
 * @Descripttion: vConsole初始化
 */
import VConsole from 'vconsole';

const enable_vConsole = import.meta.env.VITE_APP_ENABLE_VCONSOLE;
enable_vConsole === '1' && new VConsole();
