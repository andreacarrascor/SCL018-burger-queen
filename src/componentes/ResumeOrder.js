/* eslint-disable no-lone-blocks */
import React, { useContext } from "react";
import { ContextProducts } from "../App.js";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const ResumeOrder = () => {
    const globalContext = useContext(ContextProducts);
    const totalOrder = globalContext.totalOrderAmount;

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "pedidos"), {
                clientName: globalContext.name,
                clientTable: globalContext.table,
                clientOrder: globalContext.products.resumeOrder,
                totalAmount: globalContext.totalOrderAmount
            });
        } catch (error) {
            console.log("Error al enviar pedido");
            console.log(error);
        }
    }

    return (
        <>
            <h2 className="ml-5 mt-5 font-bold">RESUMEN ORDEN</h2>

            <form action="" onSubmit={onSubmit}>
                <div className="flex row">
                    <div>
                        <p className="border-solid border-2 border-teal-500 rounded-md focus:outline-none m-5 p-2 w-48">
                            Nombre: {globalContext.name}
                        </p>
                    </div>
                    <div>
                        <p className="border-solid border-2 border-teal-500 rounded-md focus:outline-none m-5 p-2 w-24">
                            Mesa: {globalContext.table}
                        </p>
                    </div>
                </div>
                <h3>Total ${totalOrder}   </h3>
                <div className="flex justify-center">
                    <button className="m-5 h-10 px-5 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800" 
                        type='submit'>
                            Enviar a cocina
                    </button>
                </div>
            </form>
            {globalContext.products.resumeOrder.map((dish) => (
                <div key={dish.id} className="flex border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none">
                    <h4 className="whitespace-pre">
                        {dish.name}    ${dish.price}
                    </h4>
                    <button className="flex border-solid border-2 border-teal-500 rounded-full space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none" 
                        onClick={() => globalContext.decrease(dish.id)}>
                            -
                    </button>
                        <p>{dish.count}</p>
                    <button className="flex border-solid border-2 border-teal-500 rounded-full space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none" 
                        onClick={() => globalContext.increase(dish.id)}>
                            +
                    </button>
                    <button className="flex border-solid border-2 border-teal-500 rounded-md space-x-4 m-2 ml-5 p-2 font-semibold text-gray-500 bg-none" 
                        onClick={() => globalContext.removeFromOrder(dish.id)}>
                            x
                    </button>
                </div>
            ))}
        </>
    );
};


export default ResumeOrder;

