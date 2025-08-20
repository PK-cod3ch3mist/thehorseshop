import React from "react";
import ReactDOM from "react-dom/client";
// Note: In a real environment, you would install bootstrap: npm install bootstrap
// and import it like this:
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
