import React from "react";
import { Link } from "react-router-dom";
import burger_logo from "../assets/img/burger_logo.png";

const Home = () => {
    return (
            <div className="m-20">
                <div className="flex justify-center">
                    <img src={burger_logo} alt="" />
                </div>
                <div className="flex justify-center space-x-10">
                    <Link to="/waiter">
                        <button 
                            className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800"
                        >
                            Mesero
                        </button>
                    </Link>
                    <Link to="/kitchen">
                        <button 
                            className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800"
                            >
                                Cocina
                        </button>
                    </Link>
                </div>
            </div>
    );
};

export default Home;
