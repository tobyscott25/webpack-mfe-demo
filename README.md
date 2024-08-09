# Micro-frontend demo

A micro-frontend architecture demo in TypeScript using [Module Federation](https://module-federation.io/).

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

### The microfontends and what they demonstrate

| Directory                         | Description              | Build tool | Framework |
| --------------------------------- | ------------------------ | ---------- | --------- |
| [parent](/parent)                 | The parent app           | Webpack    | React 18  |
| [mfe-todo-app](/mfe-todo-app)     | A very basic to-do app   | Webpack    | React 18  |
| [mfe-subrouting](/mfe-subrouting) | A shared routing example | Webpack    | React 18  |

### Running locally

#### 1. Start the microfrontend apps

This serves the microfrontends on ports `3081` and `3082`.

This makes their isolated development playgrounds available at

- `http://localhost:3081/`
- `http://localhost:3082/`

and their JS bundles (available for consumption by parent app) at

- `http://localhost:3081/remoteEntry.js`
- `http://localhost:3082/remoteEntry.js`

````sh
# First microfrontend (very basic to-do app)
cd mfe-todo-app
npm install
npm start

# Second microfrontend (shared routing example)
cd mfe-subrouting
npm install
npm start

#### 2. Start parent app

This serves the parent app at `http://localhost:3080/`.

The parent app is configured to lazy-load the microfrontends (asyncronously, over the network from their `remoteEntry.js` resources) at run-time.

```sh
cd parent
npm install
npm start
````
