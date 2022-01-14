import React from "react";
import menu from "../menu.json";

const Food = () => {
    const menuBreakfast = menu.food;
    console.log(menuBreakfast)
    
    return (
        <>
            <h1>Para comer</h1>
            {menuBreakfast.map((e, index) => {
                return (
                    // {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
                    <li key={index}>{e.name}</li>
                    // <ul key={index}>
                        // <li><p>{e.name}</p></li>
                        // </ul>
                );
            })}
        </>
    );
};

export default Food;
