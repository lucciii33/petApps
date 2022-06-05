import React, { useContext } from "react";
import { Context } from "../store/appContext";
import image1 from "../../img/image1.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const CompOne = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="">
            <div className="text-center mt-2">
                <br />
                <h2>connect with thousands of professionals <br /> for your pet </h2>
            </div>
            <div className="d-flex justify-content-center p-4">
                <div className="circlemainpage position-relative">
                    <div className="position-absolute top-50 start-50 translate-middle">

                        <h1>Lorem</h1>
                        <p>Lorem iosuo another time</p>
                    </div>
                </div>
                <div className="circlemainpage position-relative ">
                    <div className="position-absolute top-50 start-50 translate-middle">

                        <h1>Lorem</h1>
                        <p>Lorem iosuo another time</p>
                    </div>
                </div>
                <div className="circlemainpage position-relative ">
                    <div className="position-absolute top-50 start-50 translate-middle">

                        <h1>Lorem</h1>
                        <p>Lorem iosuo another time</p>
                    </div>
                </div>
                <div className="circlemainpage position-relative ">
                    <div className="position-absolute top-50 start-50 translate-middle">

                        <h1>Lorem</h1>
                        <p>Lorem iosuo another time</p>
                    </div>
                </div>


            </div>
            <div className="text-center">
                <h4>Pelvic issues are way more common than you think</h4>
            </div>
            <br />
        </div>
    );
};
