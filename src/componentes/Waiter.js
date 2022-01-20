/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ResumeOrder from "./ResumeOrder";
import ClientForm from "./ClientForm";
import MenuOrder from "./MenuOrder";

const Waiter = () => {

    return (
        <>
            <div className="grid grid-cols-2 container mx-auto">
                <div className="flex flex-col justify-center m-8 border-solid border-2 border-teal-500 rounded-md ">
                    <ClientForm />
                    <MenuOrder />
                </div>
                <div className="m-8 border-solid border-2 border-teal-500 rounded-md ">
                    <ResumeOrder />
                </div>
            </div>
        </>
    )
};

export default Waiter;
