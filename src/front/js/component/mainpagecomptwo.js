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
            <div className="text-center">
                <h2>What we offer</h2>
            </div>
            <br /><br /><br />
            <div row className="d-flex row justify-content-center align-items-center" >
                <div className="  squeremainpage col-md-3 ">
                    <img src={grooming} className="grooming col-sm-12"></img>
                </div>
                <div className=" squeremainpage  col-md-3">
                    <img src={clinic} className="grooming col-sm-12"></img>
                </div>

                <div className="squeremainpage  col-md-3 col-sm-12">
                    <img src={traindog} className="grooming "></img>
                </div>
                <div className="squeremainpage  col-md-3">
                    <img src={dogwalker} className="grooming "></img>
                </div>

            </div>
            <br /><br /><br />
        </div>
    );
};
