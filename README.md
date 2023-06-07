# React Microfrontend

## 1. Start host microfrontend

The host contains the microfrontend app and client integrates the microfrontend. Run below commands to install dependencies and start host microfrontend.

```sh
npm install
npm start
```

The host server will start at port `8080`. Visiting http://localhost:8080/ will display the microfrontend app.

## 2. Start client microfrontend

The client integrates the microfrontend app built in React. Run below commands to install dependencies and start client microfrontend.

```sh
npm install
npm start
```

The client server will start at port `8081`. Visiting http://localhost:8081/ will display the React app with microfrontend integrated inside it.
