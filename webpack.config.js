const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    port: 9000,
    devMiddleware: {
      writeToDisk: true
    }
  }
  ,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader'],
      }, {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Chart js',
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*'],
      cleanStaleWebpackAssets: ['**/*']
    })
  ]
}