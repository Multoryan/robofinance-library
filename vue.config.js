const path = require('path');

module.exports = {
    lintOnSave: false,

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, './src/assets/styles/global.scss'),
            ],
        },
    },

    /*
        Загрузка иконок. В виде вставки svg в html
        Нужно сначала очистить правилка обработки svg по умолчанию
        https://cli.vuejs.org/guide/webpack.html#replacing-loaders-of-a-rule
    */
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .use('html-loader')
            .loader('html-loader')
            .tap(options => {
                return {
                    ...options,
                    minimize: true,
                };
            });
    },
};
