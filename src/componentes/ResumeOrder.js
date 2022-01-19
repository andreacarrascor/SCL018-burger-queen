/* eslint-disable no-lone-blocks */
import React, { useContext } from "react";
import { ContextProducts } from "../App.js";

const ResumeOrder = () => {
    const globalContext = useContext(ContextProducts);
    // console.log(globalContext)
    const totalCartAmount = globalContext.products.resumeOrder
        .reduce((total, dish) => (total = total + dish.price * dish.count), 0)
        .toFixed(2);

    return (
        <>
            <h2 className="ml-5 mt-5 font-bold">RESUMEN ORDEN</h2>

            <div className="flex row">
                <div>
                    <p className="border-solid border-2 border-teal-500 rounded-md focus:outline-none m-5 p-2 w-48">Nombre: { }</p>
                </div>
                <div>
                    <p className="border-solid border-2 border-teal-500 rounded-md focus:outline-none m-5 p-2 w-24">Mesa: { }</p>
                </div>
            </div>

            <h3>Total ${totalCartAmount}   </h3>
            {globalContext.products.resumeOrder.map((dish) => (
                    <div key={dish.id} className="flex border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none">
                        <h4 className="whitespace-pre">
                            {dish.name}    ${dish.price}
                        </h4>
                        <button className="flex border-solid border-2 border-teal-500 rounded-full space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none" onClick={() => globalContext.decrease(dish.id)}>-</button>
                        <p>{dish.count}</p>
                        <button className="flex border-solid border-2 border-teal-500 rounded-full space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none" onClick={() => globalContext.increase(dish.id)}>+</button>
                        <button className="flex border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none" onClick={() => globalContext.removeFromOrder(dish.id)}>x</button>
                    </div>
            ))}
        </>
    );
};


export default ResumeOrder;

