const webpack = require("webpack");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts",".tsx",".js"]
  },
  module: {
    rules: [
      {test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
       new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         options: {
           devTool:"source-map"
         }
       })
     ]
}
