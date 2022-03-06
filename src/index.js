import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { OrderProvider } from "./context/contextProducts";

//método render recibe dos parámetros. Primero va lo que queremos insertar y el segundo es dónde lo insertaremos (montar).
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <OrderProvider>
        <App />
      </OrderProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

