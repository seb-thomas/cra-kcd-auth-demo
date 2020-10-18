import App from "./App";
import { AppProviders } from "./AppProviders";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
