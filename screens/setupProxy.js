const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8081",
      changeOrigin: true,
      onProxyRes: (proxyRes) => {
        proxyRes.headers["Cross-Origin-Opener-Policy"] = "same-origin";
        proxyRes.headers["Cross-Origin-Embedder-Policy"] = "require-corp";
      },
    })
  );
};
