import ReactDOM from "react-dom/client";
import "./index.css";
import DB from "./dashboard";
import React from "react";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DB />
  </React.StrictMode>
);
