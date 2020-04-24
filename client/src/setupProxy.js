const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(
        ["/api/**", "/auth/google"],
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true
        })
        //        createProxyMiddleware("/auth/google", { target: "http://localhost:5000" }));
        //    app.use(createProxyMiddleware("/api/**", { target: "http://localhost:5000" }));
    );
};
