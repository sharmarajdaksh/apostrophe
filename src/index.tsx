import React from "react";
import ReactDOM from "react-dom";
import "./styles/global/index.scss";
import App from "./components/App.component";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
