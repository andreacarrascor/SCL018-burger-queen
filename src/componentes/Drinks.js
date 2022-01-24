import React, {useContext} from "react";
import {ContextProducts} from "../App.js";


const Drinks = () => {
    const globalContext = useContext(ContextProducts);
    const menuDrinks = globalContext.products.menuArrays.drinks
    return (
        <>
            <h2 className="font-bold m-5 text-gray-600">Calientes y Frías</h2>
            {menuDrinks.map((drink) => {
                return (
                    <button 
                        className="bg-teal-600 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-white hover:bg-teal-800"
                        onClick={() => globalContext.addProducts(drink)}
                        key={drink.id}>
                            <div className="flex justify-around items-center">
                                <div className="item w-52 h-8 order-first">{drink.name}</div>
                                <div className="item w-16 h-8 order-last flex-initial">${drink.price}</div>
                            </div>
                    </button>
                    
                );
            })}
        </>
    );
};

export default Drinks;