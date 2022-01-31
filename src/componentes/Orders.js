import Button from "@material-tailwind/react/Button";

const Orders = ({ name, table, order, time }) => {

  return (
    <div className="flex flex-col justify-between mx-4 p-4 bg-opacity-50 shadow-lg rounded w-72">
      <div className="flex flex-col">
        <h2 className="font-extrabold">Mesa {table}</h2>
        <span>Hora: {time}</span>
        <h3>Cliente: {name}</h3>
        <span>{order.map((item) => (
          <ul className="border-2 border-teal-500 rounded-md whitespace-pre my-1 px-4 w-66 font-medium" key={item.id}>
            <li>{item.count}     {item.name}</li>
          </ul>
        ))}</span>
      </div>
      <div className="flex justify-center p-2">
        <Button
          className="text-gray-800"
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
  );
}

export default Orders;