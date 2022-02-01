import "@material-tailwind/react/tailwind.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import menu from "./menu.json";
import Home from "./componentes/Home";
import Waiter from "./componentes/waiter/Waiter";
import Kitchen from "./componentes/kitchen/Kitchen";
import ToDelivery from "./componentes/delivery/ToDelivery";


const dataMenu = menu;
export const ContextProducts = React.createContext();

const App = () => {
  //estado data del cliente para pasar a resumeOrder y a clientForm. El input comienza vacío
  const [name, changeName] = useState("");
  const [table, changeTable] = useState("");
  //estado data de menu para pasar a drinks, food y resumeOrder
  const [products, setProducts] = useState({
    menuArrays: dataMenu,
    resumeOrder: []
  });

  const [statusReady, setStatusReady] = useState({
    status: "Pendiente"
  });

  const [statusDelivered, setStatusDelivered] = useState({
    status: "Listo"
  });

  const addProducts = (dish) => {
    return setProducts({
      ...products,
      resumeOrder: products.resumeOrder.find((item) => item.id === dish.id)
        ? products.resumeOrder.map((item) =>
          item.id === dish.id
            ? { ...item, count: item.count + 1 }
            : item
        )
        : [...products.resumeOrder, { ...dish, count: 1 }]
    });
  }

  const removeFromOrder = (id) => {
    setProducts({
      ...products,
      resumeOrder: products.resumeOrder.filter((item) => item.id !== id)
    });
  };

  const clearProductsFromOrder = () => {
    setProducts({
      ...products,
      resumeOrder: []
    })
  }

  const increase = (id) => {
    setProducts({
      ...products,
      resumeOrder: products.resumeOrder.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    });
  };

  const decrease = (id) => {
    setProducts({
      ...products,
      resumeOrder: products.resumeOrder.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
          : item
      )
    });
  };

  const totalOrderAmount = products.resumeOrder
    .reduce((total, dish) => (total = total + dish.price * dish.count), 0)
    .toFixed(2);

  const resumeProps = {
    name,
    table,
    changeName,
    changeTable,
    products,
    addProducts,
    removeFromOrder,
    clearProductsFromOrder,
    increase,
    decrease,
    totalOrderAmount,
    statusReady,
    setStatusReady,
    statusDelivered,
    setStatusDelivered
  };

  return (
    <ContextProducts.Provider value={resumeProps}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/toDelivery" element={<ToDelivery />} />
      </Routes>
    </ContextProducts.Provider>
  );
}

export default App;
