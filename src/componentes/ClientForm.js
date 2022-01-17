import React, {useState} from "react";
import db from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const ClientForm = () => {
    const [name, changeName] = useState('');
    const [table, changeTable] = useState('');

    const onSubmit = async (e) =>{ 
        e.preventDefault();

        try {
            await addDoc(collection(db, 'pedidos'), {
                nombre: name,
                mesa: table
            });
        } catch (error){
            console.log('Error al enviar pedido');
            console.log(error);
        }

        changeName('');
        changeTable('');
    }

    return ( 
        <form action="" onSubmit={onSubmit}>
            <input 
                className="outline outline-offset-2 outline-1 m-5 p-2"
                type="text"
                name="name"
                value={name}
                onChange={(e) => changeName(e.target.value)}
                placeholder="Nombre cliente"
            />
            <input
                className="outline outline-offset-2 outline-1 m-5 p-2" 
                type="number"
                name="table"
                value={table}
                onChange={(e) => changeTable(e.target.value)}
                placeholder="N° Mesa"
            />
            <button className="h-10 px-5 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800" type='submit'>Enviar a cocina</button>
            </form>
    );
};

export default ClientForm;
