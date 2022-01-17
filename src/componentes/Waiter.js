import React, { useState } from "react";
import Food from "./Food";
import Drinks from "./Drinks";
import ClientForm from "./ClientForm";
import styles from "./Waiter.module.css";


const Waiter = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
            <ClientForm />
            <div className={styles.container}>
                <div className={styles.blocTabs}>
                    <button 
                        className={toggleState === 1 ? styles.activeTabs : styles.tabs}
                        onClick={() => toggleTab(1)}
                    >
                        Bebidas
                    </button>
                    <button
                        className={toggleState === 2 ? styles.activeTabs : styles.tabs}
                        onClick={() => toggleTab(2)}
                    >
                        Comida
                    </button>
                </div>

                <div className={styles.contentTabs}>
                    <div
                        className={toggleState === 1 ? styles.activeContent : styles.content}
                    >
                        <Drinks />
                    </div>

                    <div
                        className={toggleState === 2 ? styles.activeContent : styles.content}
                    >
                        <Food />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Waiter;
