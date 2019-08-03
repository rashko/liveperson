import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/payment.store";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App store={store} />
  </Router>,
  document.getElementById("root")
);
