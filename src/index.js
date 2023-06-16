import React from "react";
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import StateContextProvider from "./stateContext";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
