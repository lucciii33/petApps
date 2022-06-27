import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const SinginInformation = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="jumbotron">
            <h1>Thank you for being here! {store.user.first_name} {store.user.last_name} we hope to help you</h1>
            <Link to="/singin"><button className="btn btn-success"></button></Link>
        </div>
    );
};

SinginInformation.propTypes = {
    match: PropTypes.object
};
