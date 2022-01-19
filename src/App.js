/* eslint-disable no-unused-vars */
import React, {useContext, useState} from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import menu from "./menu.json";
import Home from './componentes/Home';
import Waiter from './componentes/Waiter';
import Kitchen from './componentes/Kitchen';

const dataMenu = menu;
console.log(dataMenu);
export const ContextProducts = React.createContext();

const App = () => {
  const [products, setproducts] = useState({
    menuArrays: dataMenu,
    resumeOrder: []
  });


  const addProducts = (dish) => {
    return setproducts({
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
    setproducts({
      ...products,
      resumeOrder: products.resumeOrder.filter((item) => item.id !== id)
    });
  };
  
  const increase = (id) => {
    setproducts({
      ...products,
      resumeOrder: products.resumeOrder.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    });
  };

  const decrease = (id) => {
    setproducts({
      ...products,
      resumeOrder: products.resumeOrder.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
          : item
      )
    });
  };

  const resumeProps = { products, addProducts, removeFromOrder, increase, decrease };

  return (
    <>
      <ContextProducts.Provider value={resumeProps}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
      </ContextProducts.Provider>
    </>

  );
}

export default App;
