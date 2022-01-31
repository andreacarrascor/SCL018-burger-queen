import { useEffect, useState } from "react";
import Orders from "./Orders";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const OrdersList = () => {
  const [orders, showOrders] = useState([])
  
  useEffect(() => {
    onSnapshot(
      collection(db, "pedidos"),
      (snapshot) => {
        const arrayOrders = snapshot.docs.map((order) => {
          return { ...order.data(), id: order.id };
        })
        showOrders(arrayOrders);
      }
    )
  }, [])

  return (
    // si existen órdenes, entonces muestra el contenido (div)
    orders.length > 0 &&
    <div className="flex flex-wrap justify-start mx-5">
      {orders.map((order) => {
        return <Orders
          key={order.id}
          time={order.orderTime}
          table={order.clientTable}
          name={order.clientName}
          order={order.clientOrder}
        />
      })}
    </div>
  );
}

export default OrdersList;