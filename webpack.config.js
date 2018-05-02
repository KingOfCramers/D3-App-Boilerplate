const path = require("path");
const pubPath = path.join(__dirname, "public");
// Get the public path for our output bundle file.

module.exports = {
  entry: "./src/app.js",
  output: {
    path: pubPath,
    filename: "bundle.js"
  },
  module: {
    rules: [{
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: pubPath
  }
};

// A loader lets you customize the way a file is loaded. We're going to run it through babel. We can also use a loader to convert an SCSS file into CSS.