import React, { useContext } from "react";
import { Context } from "../store/appContext";
import image1 from "../../img/image1.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const CompTwo = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="bg-green">
            <div className="text-center mt-2">
                <h2>Pelvic issues are way more common than you think</h2>
                <p>Issues or not - finding the right care for your pelvic wellness isn’t always easy.
                    Elana works with you to prevent or help treat pelvic challenges you may be facing</p>
            </div>
            <div className="d-flex row justify-content-center">
                <div className="squeremainpage col-md-4"></div>
                <div className="squeremainpage col-md-4"></div>
                <div className="squeremainpage col-md-4"></div>
            </div>
            <div className="d-flex row justify-content-center">

                <div className="squeremainpage col-md-4"></div>
                <div className="squeremainpage col-md-4"></div>
                <div className="squeremainpage col-md-4"></div>
            </div>


        </div>
    );
};
