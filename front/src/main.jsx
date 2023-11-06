import React from "react";
import ReactDOM from "react-dom";
import { BrowerRouter } from "react-router-dom"
import App from "./App.jsx";
//import "bootstrap/dist/css/boostrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowerRouter>
      <App />
    </BrowerRouter>
  </React.StrictMode>,
  document.getElementById("root")

);
