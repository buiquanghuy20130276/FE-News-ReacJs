const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/rss',
        createProxyMiddleware({
            target: 'https://danviet.vn',
            changeOrigin: true,
            pathRewrite: {
                '^/api/rss': '/rss'
            }
        })
    );
    app.use('/api', createProxyMiddleware({
        target: 'https://danviet.vn',
        changeOrigin: true,
        pathRewrite: {
            '^/api/': '/'
        }
    }));
};