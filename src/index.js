import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 h-max">
        {" "}
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
