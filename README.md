# microfrontend-poc

1. Create host and remote apps

```bash
npx create-react-app host-app --template @chakra-ui/typescript
npx create-react-app remote-app --template @chakra-ui/typescript
```

2. Add required dependencies in each app

```bash
npm install --save-dev webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader css-loader
```
