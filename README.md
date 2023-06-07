# microfrontend-poc

1. Create host app

```bash
mkdir micro-host
cd micro-host
npm init -y
npm install --save react react-dom
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader webpack webpack-cli webpack-dev-server
```

2. Add required dependencies in each app

```bash
npm install --save-dev webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader css-loader
```
