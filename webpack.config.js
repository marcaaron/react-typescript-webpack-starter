module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
        ]
    }
};
