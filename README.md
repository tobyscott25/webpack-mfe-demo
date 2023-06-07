# React Microfrontend

## 1. Start the microfrontend app

This serves the playground for development at `http://localhost:8080/` and makes the JS bundle available for consumption at `http://localhost:8080/remoteEntry.js`.

```sh
cd microfrontend-one
npm install
npm start
```

## 2. Start container app

This serves the container app at `http://localhost:8081/`, which fetches and renders the microfrontend from `http://localhost:8080/remoteEntry.js` at run-time.

```sh
cd container-app
npm install
npm start
```
