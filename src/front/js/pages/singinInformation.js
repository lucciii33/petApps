import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const SinginInformation = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="m-auto">
            <div className="text-center bg-newuser ">

                <h1>Thank you for being here! {store.user.first_name} {store.user.last_name} we hope to help you</h1>
                <h4>we are glad that you are here</h4>
                <p>So dont lose any more time and click here to find what you need</p>
                <Link to="/getdoctors"><button className="btn btn-success">find me!</button></Link>
            </div>

        </div>
    );
};

SinginInformation.propTypes = {
    match: PropTypes.object
};
