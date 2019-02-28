export default {
    head: {
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"}
        ]
    },
    build: {
        splitChunks: {
            layouts: true
        },
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                });
            }
        }
    }
};
