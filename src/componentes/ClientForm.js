import React, { useContext } from "react";
import { ContextProducts } from "../App.js";

const ClientForm = () => {
    const globalContext = useContext(ContextProducts);

    return (
        <>
                <input
                    className="border-solid border-2 border-teal-500 rounded-md focus:outline-none m-5 p-2 w-48"
                    type="text"
                    name="name"
                    value={globalContext.name}
                    onChange={(e) => globalContext.changeName(e.target.value)}
                    placeholder="Nombre cliente"
                />
                <input
                    className="border-solid border-2 border-teal-500 rounded-md focus:outline-none m-5 p-2 w-24"
                    type="number"
                    min="1"
                    max="15"
                    name="table"
                    value={globalContext.table}
                    onChange={(e) => globalContext.changeTable(e.target.value)}
                    placeholder="N° Mesa"
                />
        </>
    );
};

export default ClientForm;
