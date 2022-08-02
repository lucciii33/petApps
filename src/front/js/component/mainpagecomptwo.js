import React, { useContext } from "react";
import { Context } from "../store/appContext";
import grooming from "../../img/grooming.jpg";
import clinic from "../../img/clinic.jpg";
import traindog from "../../img/traindog.jpg";
import dogwalker from "../../img/dogwalker.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const CompTwo = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="bg-green mt-4">

            <div className="text-center mt-2">
                <h2 className="mt-2">Pelvic issues are way more common than you think</h2>
                <p>Issues or not - finding the right care for your pelvic wellness isn’t always easy.
                    Elana works with you to prevent or help treat pelvic challenges you may be facing</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="squeremainpage-rigth">
                    <img src={grooming} className="grooming "></img>
                </div>
                <div className="squeremainpage">
                    <img src={clinic} className="grooming "></img>
                </div>

            </div>
            <div className="d-flex row justify-content-center">
                <div className="squeremainpage-rigth">
                    <img src={traindog} className="grooming "></img>
                </div>
                <div className="squeremainpage">
                    <img src={dogwalker} className="grooming "></img>
                </div>
            </div>
        </div>
    );
};
