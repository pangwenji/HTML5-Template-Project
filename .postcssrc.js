
// TODO:如果设计稿的尺寸不是 375，而是 750 或其他大小，可以将 rootValue 配置调整为:
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
        },
        // postcss-pxtorem 插件的版本需要 >= 5.0.0
        'postcss-pxtorem': {
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            propList: ['*']
        },
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
};
