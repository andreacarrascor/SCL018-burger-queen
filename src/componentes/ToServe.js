import Header from "./Header";

const ToServe = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col m-10">
        <h2 className="font-bold text-gray-600">LISTAS PARA SERVIR</h2>
        <div className="relative m-2 min-w-0 p-4 break-words bg-opacity-50 w-full shadow-lg rounded">
        </div>
      </div>
    </div>
  );
}

export default ToServe;