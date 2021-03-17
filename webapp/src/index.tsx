import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { initAxiosInterceptors } from "./initAxiosInterceptors";

import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/index.css";
import { FdmStore } from "./shared/store/FdmStore";

initAxiosInterceptors();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FdmStore>
        <App />
      </FdmStore>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
