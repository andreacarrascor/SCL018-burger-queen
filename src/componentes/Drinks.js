import React from "react";
import menu from "../menu.json";

const Drinks = () => {
    const menuDrinks = menu.drinks;
    return (
        <>
            {menuDrinks.map((e, index) => {
                return (
                    <li key={index}>{e.name}</li>
                );
            })}
        </>
    );
};

export default Drinks;