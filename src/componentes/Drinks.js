import React, {useContext} from "react";
import {ContextProducts} from "../App.js";


const Drinks = (props) => {
    const globalContext = useContext(ContextProducts);
    const menuDrinks = globalContext.products.menuArrays.drinks
    return (
        <>
            <h2 className="font-bold m-5">Calientes y Frías</h2>
            {menuDrinks.map((drink) => {
                return (
                    <button 
                        className="flex border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none"
                        onClick={() => globalContext.addProducts(drink)}
                        key={drink.id}>
                            <p className="whitespace-pre">{drink.name}    ${drink.price}</p>
                    </button>
                    
                );
            })}
        </>
    );
};

export default Drinks;