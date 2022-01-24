import React from "react";
import ResumeOrder from "./ResumeOrder";
import ClientForm from "./ClientForm";
import MenuOrder from "./MenuOrder";
import Header from "./Header";


const Waiter = () => {

    return (
        <> <Header />
        <div className="flex justify-center"> 
            <div className="grid grid-cols-2 container max-width: 768px">
                <div className="flex flex-col justify-center m-8">
                    <div className="flex justify-center">
                        <ClientForm />
                    </div>
                    <div className="w-full p-5">
                        <MenuOrder />
                    </div>
                </div>
                <div className="m-8 border-solid">
                    <ResumeOrder />
                </div>
            </div>
            </div>
            </>
    )
};

export default Waiter;
