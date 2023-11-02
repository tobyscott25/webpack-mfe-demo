# Micro-frontend PoC in TypeScript

A simple micro-frontend PoC in TypeScript using Module Federation.

Features in this PoC:

- Lazy-loading of microfrontends
- Each microfrontend has its own isolated development playground
- Routing and sub-routing with React Router in the parent app and microfrontends
- Each microfrontend has its own 404 page
- Authentication and protected routes in parent app
- Shared component library between parent app and microfrontends for UI consistency

Features to add:

- Error Boundaries in parent app incase a microfrontend crashes
- Support for multiple environments (dev, staging, prod)
- Live demo

### Running locally

#### 1. Start the microfrontend apps

This serves the microfrontends on ports `3081`, `3082` and `3083`.

This makes their isolated development playgrounds available at

- `http://localhost:3081/`
- `http://localhost:3082/`
- `http://localhost:3083/`

and their JS bundles (available for consumption by parent app) at

- `http://localhost:3081/remoteEntry.js`
- `http://localhost:3082/remoteEntry.js`
- `http://localhost:3083/remoteEntry.js`

```sh
# First microfrontend (very basic to-do app)
cd microfrontend1
npm install
npm start

# Second microfrontend (shared routing example)
cd microfrontend2
npm install
npm start

# Third microfrontend (shared state example)
cd microfrontend3
npm install
npm start
```

#### 2. Start parent app

This serves the parent app at `http://localhost:3080/`.

The parent app is configured to lazy-load the microfrontends (asyncronously, over the network from `http://localhost:3081/remoteEntry.js`, etc) at run-time.

```sh
cd parent
npm install
npm start
```
