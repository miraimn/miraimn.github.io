import React from "react";

import ReactDOM from "react-dom";
import { Router, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";
import DemoApp from "./DemoApp";
import * as serviceWorker from "./serviceWorker";


import "./assets/scss/style.scss";
import "./App.css";

export default function Render() {
  ReactDOM.render(
    <BrowserRouter>
      <App />,
    </BrowserRouter>,
    document.getElementById("root")
  );
}
Render();

serviceWorker.unregister();
