import React, {useState} from "react";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import MenuOrder from "./MenuOrder";

const ClientForm = () => {
    const [name, changeName] = useState("");
    const [table, changeTable] = useState("");

    const onSubmit = async (e) =>{ 
        e.preventDefault();

        try {
            await addDoc(collection(db, "pedidos"), {
                nombre: name,
                mesa: table,
            });
        } catch (error){
            console.log("Error al enviar pedido");
            console.log(error);
        }

        changeName("");
        changeTable("");
    }

    return ( 
        <form action="" onSubmit={onSubmit}>
            <input 
                className="border-solid border-2 border-teal-500 rounded-md focus:outline-none m-5 p-2 w-48"
                type="text"
                name="name"
                value={name}
                onChange={(e) => changeName(e.target.value)}
                placeholder="Nombre cliente"
            />
            <input
                className="border-solid border-2 border-teal-500 rounded-md focus:outline-none m-5 p-2 w-24" 
                type="number"
                min="1"
                max="15"
                name="table"
                value={table}
                onChange={(e) => changeTable(e.target.value)}
                placeholder="N° Mesa"
            />
            <MenuOrder />
            <div className="flex justify-center">
            <button className="m-5 h-10 px-5 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800" type='submit'>Enviar a cocina</button>
            </div>
            </form>
    );
};

export default ClientForm;
