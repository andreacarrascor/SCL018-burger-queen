import Button from "@material-tailwind/react/Button";
import { doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import db from "../firebase";
import { ContextProducts } from "../App.jsx";

const Orders = ({ name, table, order, time, id }) => {
  const globalContext = useContext(ContextProducts);
  const statusReady = globalContext.statusReady;
  const setStatusReady = globalContext.setStatusReady;
  console.log(statusReady)

  const changeStatus = () => {
    setStatusReady({
        ...statusReady,
        status: 'Listo'
      })
  }

  const updateStatus = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, 'pedidos', id), {
        status: statusReady,
      });

    } catch (error) {
      console.log('Hubo un error al intentar actualizar el pedido')
      console.log(error);
    }
  }

  return (
    <form action="" onSubmit={updateStatus}>
      <div className="flex flex-col justify-between mx-4 my-4 p-4 bg-opacity-50 shadow-lg rounded w-72 h-80">
        <div className="overflow-y-auto flex flex-col">
          <h2 className="font-extrabold">Mesa {table}</h2>
          <span>Hora: {time}</span>
          <h3>Cliente: {name}</h3>
          <span>{order.map((item) => (
            <ul className="border-2 border-teal-500 rounded-md whitespace-pre my-1 px-4 w-64 font-medium" key={item.id}>
              <li>{item.count}     {item.name}</li>
            </ul>
          ))}</span>
        </div>
        <div className="flex justify-center p-2">
          <Button
            className="text-gray-800"
            onClick={changeStatus}
            type='submit'
            color="amber"
            buttonType="filled"
            size="md"
            rounded={false}
            block={false}
            ripple="light">
            Marcar Listo
          </Button>
        </div>
      </div>
    </form>
  );
}
export default Orders;