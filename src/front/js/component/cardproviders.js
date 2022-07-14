import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardProviders = ({ data }) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div className="d-flex flex-wrap justify-content-center m-3">
            <div clasNames="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://images.pexels.com/photos/7474574/pexels-photo-7474574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.full_name}</h5>
                            <p className="card-text">{data.howicanhelp}</p>
                            <p className="card-text">{data.services}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
CardProviders.propTypes = {
    match: PropTypes.object
};