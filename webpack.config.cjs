module.exports = {
    name: "webworker-mre",
    mode: "development",
    entry: "./src/main.js",
    experiments: {
        outputModule: true,
    },
    optimization: {
        splitChunks: {
            minSize: 1,
            maxSize: 1
        }
    }
}