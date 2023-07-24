const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: {
                filter: (url) => {
                  if (url.startsWith("data:")) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        microfrontend1: "microfrontend1@http://localhost:8081/remoteEntry.js",
        microfrontend2: "microfrontend2@http://localhost:8082/remoteEntry.js",
      },
      shared: {
        ...deps,
        'react': {
          singleton: true,
          // eager: true,
          requiredVersion: deps['react']
        },
        'react-dom': {
          singleton: true,
          // eager: true,
          requiredVersion: deps['react-dom'],
        },
        "react-router-dom": {
          singleton: true,
          // eager: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};