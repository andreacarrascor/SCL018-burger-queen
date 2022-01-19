import React, {useContext} from "react";
import {ContextProducts} from "../App.js";

const Food = () => {
    const globalContext = useContext(ContextProducts);
    const menuFood = globalContext.products.menuArrays.food
    const menuSideDish = globalContext.products.menuArrays.sideDish
    const menuExtras = globalContext.products.menuArrays.extra
    
    return (
        <>
            <h2 className="font-bold m-5">Sandwich y Hamburguesas</h2>
            {menuFood.map((dish) => {
                return (
                    <button 
                        className="flex-wrap border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none"
                        onClick={() => globalContext.addProducts(dish)} 
                        key={dish.id}>
                            <p className="whitespace-pre">{dish.name}    ${dish.price}</p>
                    </button>
                );
            })}
            <h2 className="font-bold mt-5 ml-5">Acompañamientos</h2>
            {menuSideDish.map((sideDish) => {
                return (
                    <button 
                        className="flex-wrap border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none"
                        onClick={() => globalContext.addProducts(sideDish)}  
                        key={sideDish.id}>
                            <p className="whitespace-pre">{sideDish.name}    ${sideDish.price}</p>
                    </button>
                );
            })}
            <h2 className="font-bold mt-5 ml-5">Extras</h2>
            {menuExtras.map((extra) => {
                return (
                    <button 
                        className="flex-wrap border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none"
                        onClick={() => globalContext.addProducts(extra)} 
                        key={extra.id}>
                            <p className="whitespace-pre">{extra.name}    ${extra.price}</p>
                    </button>
                );
            })}
        </>
    );
};

export default Food;