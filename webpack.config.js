const sharedJS = require('@sendgft/shared.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, './public/card'),
    filename: "index.js"
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      urlToSharedJs: sharedJS.url,
    })
  ]  
}