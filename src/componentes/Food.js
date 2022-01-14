import React from "react";
import menu from "../menu.json";

const Food = () => {
    const menuFood = menu.food;
    const menuSideDish = menu.sideDish;
    const menuExtras = menu.extra;
    
    return (
        <>
            <p>Sandwiches</p>
            {menuFood.map((e, index) => {
                return (
                    <li key={index}>{e.name}</li>
                );
            })}
            <p>Acompañamientos</p>
            {menuSideDish.map((e, index) => {
                return (
                    <li key={index}>{e.name}</li>
                );
            })}
            <p>Extras</p>
            {menuExtras.map((e, index) => {
                return (
                    <li key={index}>{e.name}</li>
                );
            })}
        </>
    );
};

export default Food;