import Button from "@material-tailwind/react/Button";
import { doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import db from "../../firebase";
import { ContextProducts } from "../../context/contextProducts";
// import Swal from 'sweetalert2'

const Orders = ({ name, table, order, time, id }) => {
  const globalContext = useContext(ContextProducts);
  const status = globalContext.status;
  const setStatus = globalContext.setStatus;

  // Swal.fire({
  //   text: '¿Seguro desea enviar a cocina?',
  //   showConfirmButton: true,
  //   showCancelButton: true,
  //   confirmButtonText: '¡Sí!',
  //   cancelButtonText: 'Noo',
  //   confirmButtonColor: '#03989E',
  //   cancelButtonColor: '#AD4848',
  //   allowOutsideClick: false,
  // }).then((result) => {  

  //   if (result.isConfirmed) {
  //     Swal.fire(
  //       'Se ha enviado a cocina'
  //     )
  //   }   
  //   else if (result.dismiss) {
  //     Swal.fire(
  //       'Cancelled',
  //       'Cancelado'
  //     )
  //   }
  // })

  const changeStatus = () => {
    setStatus({
        ...status,
        status: 'Listo'
      })
  }

  const updateStatus = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, 'pedidos', id), {
        status: status.statusReady,
      });

    } catch (error) {
      console.log('Hubo un error al intentar actualizar el pedido')
      console.log(error);
    }
  }

  return (
    <form action="" onSubmit={updateStatus}>
      <section className="flex flex-col justify-between mx-2 my-4 px-2 bg-opacity-50 shadow-lg rounded min-w-75 h-80">
        <div className="flex flex-col md:overflow-y-auto overflow-x-hidden w-73 mr-2 p-3">
          <h2 className="font-extrabold">Mesa {table}</h2>
          <span>Hora: {time}</span>
          <h3>Cliente: {name}</h3>
          <span>{order.map((item) => (
            <ul className="border-2 border-teal-500 rounded-md whitespace-pre my-1 px-4 w-64 font-medium" key={item.id}>
              <li>{item.count}     {item.name}</li>
            </ul>
          ))}</span>
        </div>
        <div className="flex justify-center m-3">
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
      </section>
    </form>
  );
}
export default Orders;