// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('js')
            .test(/\.js$/)
            .exclude
            .add(/node_modules/)
            .end()
            .use('babel-loader')
            .loader('babel-loader')
            .tap(options => {
                return {
                    presets: ['@babel/preset-env'],
                };
            });

        // Add rule for ffmpeg.js
        config.module
            .rule('ffmpeg')
            .test(/ffmpeg\.js$/)
            .use('babel-loader')
            .loader('babel-loader')
            .tap(options => {
                return {
                    presets: ['@babel/preset-env'],
                };
            });
    },
    // devServer: {
    //     // port: 8085, // Change this to the desired port number
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:8085',
    //             changeOrigin: true,
    //             pathRewrite: { '^/api': '' }
    //         }
    //     }`
    // }
};

