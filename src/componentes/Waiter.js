import React, { useState } from "react";
import ResumeOrder from "./ResumeOrder";
import ClientForm from "./ClientForm";


const Waiter = () => {
    return (
        <>
            <div className="grid grid-cols-2 container mx-auto">
                <div className="m-8 border-solid border-2 border-teal-500 rounded-md flex justify-center"><ClientForm /></div>
                <div className=" m-8 border-solid border-2 border-teal-500 rounded-md flex"><ResumeOrder /></div>
            </div>
        </>
    )
};

export default Waiter;
