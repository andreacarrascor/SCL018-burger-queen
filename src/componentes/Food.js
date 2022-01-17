import React from "react";
import menu from "../menu.json";

const Food = () => {
    const menuFood = menu.food;
    const menuSideDish = menu.sideDish;
    const menuExtras = menu.extra;
    
    return (
        <>
            <h2 className="font-bold m-5">Sandwiches</h2>
            {menuFood.map((e, index) => {
                return (
                    <button 
                        className="flex-wrap border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none"
                        // onClick={} 
                        key={index}>
                            <p className="whitespace-pre">{e.name}    ${e.price}</p>
                    </button>
                ); 
            })}
            <h2 className="font-bold mt-5 ml-5">Acompañamientos</h2>
            {menuSideDish.map((e, index) => {
                return (
                    <button 
                        className="flex-wrap border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none"
                        // onClick={} 
                        key={index}>
                            <p className="whitespace-pre">{e.name}    ${e.price}</p>
                    </button>
                );
            })}
            <h2 className="font-bold mt-5 ml-5">Extras</h2>
            {menuExtras.map((e, index) => {
                return (
                    <button 
                        className="flex-wrap border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none"
                        // onClick={} 
                        key={index}>
                            <p className="whitespace-pre">{e.name}    ${e.price}</p>
                    </button>
                );
            })}
        </>
    );
};

export default Food;