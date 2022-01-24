import React, {useContext} from "react";
import {ContextProducts} from "../App.js";

const Food = () => {
    const globalContext = useContext(ContextProducts);
    const menuFood = globalContext.products.menuArrays.food
    const menuSideDish = globalContext.products.menuArrays.sideDish
    const menuExtras = globalContext.products.menuArrays.extra
    
    return (
        <>
            <h2 className="font-bold m-5 text-gray-600">Sandwich y Hamburguesas</h2>
            {menuFood.map((dish) => {
                return (
                    <button 
                        className="bg-teal-600 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-white hover:bg-teal-800"
                        onClick={() => globalContext.addProducts(dish)} 
                        key={dish.id}>
                            <div className="flex justify-around items-center ">
                                <div className="item w-52 h-8 order-first">{dish.name}</div>
                                <div className="item w-16 h-8 order-last flex-initial">${dish.price}</div>
                            </div>
                    </button>
                );
            })}
            <h2 className="font-bold m-5 text-gray-600">Acompañamientos</h2>
            {menuSideDish.map((sideDish) => {
                return (
                    <button 
                        className="bg-teal-600 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-white hover:bg-teal-800"
                        onClick={() => globalContext.addProducts(sideDish)}  
                        key={sideDish.id}>
                            <div className="flex justify-around items-center ">
                                <div className="item w-32 h-8 order-first">{sideDish.name}</div>
                                <div className="item w-8 h-8 order-last flex-initial">${sideDish.price}</div>
                            </div>
                    </button>
                );
            })}
            <h2 className="font-bold m-5 text-gray-600">Extras</h2>
            {menuExtras.map((extra) => {
                return (
                    <button 
                        className="bg-teal-600 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-white hover:bg-teal-800 focus:shadow-outline"
                        onClick={() => globalContext.addProducts(extra)} 
                        key={extra.id}>
                            <div className="flex justify-around items-center ">
                                <div className="item w-24 h-8 order-first">{extra.name}</div>
                                <div className="item w-16 h-8 order-last flex-initial">${extra.price}</div>
                            </div>
                    </button>
                );
            })}
        </>
    );
};

export default Food;