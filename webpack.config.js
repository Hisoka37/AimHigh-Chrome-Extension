const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/popup.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
},

  plugins: [
    new HtmlWebpackPlugin(
        { 
            template: "./src/popup.html",
            filename: 'popup.html',
         }),
     new CopyPlugin({
      patterns: [
        { from: "public" },
      ],
    }),
        ],

  resolve: {
    extensions: [".jsx", "js"],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};
