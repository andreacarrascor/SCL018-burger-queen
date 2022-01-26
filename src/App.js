import "@material-tailwind/react/tailwind.css";
import React, {useState} from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import menu from "./menu.json";
import Home from './componentes/Home';
import Waiter from './componentes/Waiter';
import Kitchen from './componentes/Kitchen';


const dataMenu = menu;
export const ContextProducts = React.createContext();

const App = () => {
  //estado data del cliente para pasar a resumeOrder y a clientForm
  const [name, changeName] = useState("");
  const [table, changeTable] = useState("");
  //estado data de menu para pasar a drinks, food y resumeOrder
  const [products, setProducts] = useState({
    menuArrays: dataMenu,
    resumeOrder: []
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

  const resumeProps = { name, table, changeName, changeTable, products, addProducts, removeFromOrder, increase, decrease, totalOrderAmount };

  return (
      <ContextProducts.Provider value={resumeProps}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
      </ContextProducts.Provider>  
  );
}

export default App;
