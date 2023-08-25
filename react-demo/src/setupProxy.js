// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware') // 18.2代理最新方式

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      // 遇见 /api 前缀的请求，就会触发该代理配置
      target: 'http://localhost:7777', // 请求转发给谁
      changeOrigin: true, // 控制服务器收到的请求头中HOST的值
      pathRewrite: {
        '^/api': '', // 重写请求路径
      },
    }),
    createProxyMiddleware('/v1', {
      target: 'https://api.github.com',
      changeOrigin: true,
      pathRewrite: {
        '^/v1': '', // 重写请求路径
      },
    })
  )
}
