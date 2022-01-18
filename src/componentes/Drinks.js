import React from "react";
import menu from "../menu.json";

const Drinks = () => {
    const menuDrinks = menu.drinks;
    return (
        <>
            <h2 className="font-bold m-5">Calientes y Frías</h2>
            {menuDrinks.map((e, index) => {
                return (
                    <button 
                        className="flex border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none"
                        // onClick={} 
                        key={index}>
                            <p className="whitespace-pre">{e.name}    ${e.price}</p>
                    </button>
                    
                );
            })}
        </>
    );
};

export default Drinks;