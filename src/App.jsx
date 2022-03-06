import "@material-tailwind/react/tailwind.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componentes/Home";
import Waiter from "./componentes/waiter/Waiter";
import Kitchen from "./componentes/kitchen/Kitchen";
import ToDelivery from "./componentes/delivery/ToDelivery";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/toDelivery" element={<ToDelivery />} />
      </Routes>
  );
}

export default App;
