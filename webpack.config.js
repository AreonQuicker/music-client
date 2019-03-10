// const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    // new HtmlWebPackPlugin({
    //   template: "./public/index.html",
    //   filename: "./index.html"
    // })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/dist/'
  }
};