import React, { useContext } from "react";
import { ContextProducts } from "../App.js";
import InputIcon from "@material-tailwind/react/InputIcon";

const ClientForm = () => {
    const globalContext = useContext(ContextProducts);

    return (
        <>
            <div className="w-64 m-3 mt-6">
                <InputIcon
                    // className="border-solid border-2 border-teal-500 rounded-md focus:outline-none m-0 p-2 w-48"
                    type="text"
                    name="name"
                    color="teal"
                    outline={true}
                    value={globalContext.name}
                    onChange={(e) => globalContext.changeName(e.target.value)}
                    placeholder="Nombre cliente"
                    iconFamily="material-icons"
                    iconName="person"
                />
            </div>
            <div className="w-24 m-3 mt-6">
            <InputIcon
                // className="border-solid border-2 border-teal-500 rounded-md focus:outline-none m-5 p-2 w-24"
                type="number"
                min="1"
                max="15"
                name="table"
                color="teal"
                outline={true}
                value={globalContext.table}
                onChange={(e) => globalContext.changeTable(e.target.value)}
                placeholder="N° Mesa"
            />
            </div>

        </>
    );
};

export default ClientForm;