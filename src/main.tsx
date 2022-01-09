import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import 'antd/dist/antd.css';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
