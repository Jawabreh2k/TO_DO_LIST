import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);