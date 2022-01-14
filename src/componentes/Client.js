import React, {useState} from "react";

const Client = () => {
    const [name, changeName] = useState('');
    const [table, changeTable] = useState('');

    return ( 
        <>
            <input 
                type="text"
                name="name"
                value={name}
                onChange={(e) => changeName(e.target.value)}
                placeholder="Nombre cliente"
            />
            <input 
                type="number"
                name="table"
                value={table}
                onChange={(e) => changeTable(e.target.value)}
                placeholder="N° Mesa"
            />
    
        </>
    );
};

export default Client;
