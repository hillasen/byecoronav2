const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/korea', {
          target: 'https://api.corona-19.kr',
          changeOrigin: true
      })
  )
  app.use(
    createProxyMiddleware('/korea', {
        target: 'https://api.corona-19.kr',
        changeOrigin: true
    })
)
};
