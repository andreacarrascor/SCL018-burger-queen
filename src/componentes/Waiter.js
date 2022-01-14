import React from "react";
import Food from "./Food";
import Drinks from "./Drinks";
import Client from "./Client";

const Waiter = () => {

    return (
        <>
            <Client />
            <div className='border-bottom: 2px solid #eaeaea'>
                <ul className='flex cursor-pointer'>
                    <li className='py-2 px-6 bg-white rounded-t-lg'>Bebidas</li>
                    <li className='py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200'>Comidas</li>
                </ul>
            </div>  
            <Food />
            <Drinks />

        </>
    );
};


export default Waiter;