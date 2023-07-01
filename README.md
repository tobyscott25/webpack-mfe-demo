# Micro-frontend PoC in TypeScript

A simple micro-frontend PoC in TypeScript using Module Federation.

Features in this PoC:

- Lazy-loading of microfrontends
- Each microfrontend has its own isolated development playground
- Routing and sub-routing with React Router in the parent app and microfrontends
- Each microfrontend has its own 404 page
- Authentication and protected routes in parent app

### Running locally

#### 1. Start the microfrontend apps

This serves the microfrontends on ports `8081` and `8082`.

This makes their isolated development playgrounds available at

- `http://localhost:8081/`
- `http://localhost:8082/`

and their JS bundles (available for consumption by parent app) at

- `http://localhost:8081/remoteEntry.js`
- `http://localhost:8082/remoteEntry.js`

```sh
# First microfrontend
cd microfrontend1
npm install
npm start

# Second microfrontend
cd microfrontend2
npm install
npm start
```

#### 2. Start parent app

This serves the parent app at `http://localhost:8081/`.

The parent app is configured to lazy-load the microfrontends from the location their JS bundles are served from (`http://localhost:8081/remoteEntry.js` and `http://localhost:8082/remoteEntry.js`) at run-time.

```sh
cd container
npm install
npm start
```
