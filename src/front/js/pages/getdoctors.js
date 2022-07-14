import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import image1 from "../../img/mainimage.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CardProviders } from "../component/cardproviders";


export const GetDoctors = ({ data }) => {
    const { store, actions } = useContext(Context);
    const [practitioners, setPractitioners] = useState([])


    return (
        <div className="">
            <div className="text-center">
                <h2>Here you can find all the doctors</h2>
                <h5>you can filter to find whatever you need</h5>
            </div>
            <div>
                <div class="btn-group">
                    <button type="button" class="btn btn-danger dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                        Action
                    </button>
                    <ul class="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Groomers</a></li>
                        <li><a className="dropdown-item" href="#">Vets</a></li>
                        <li><a className="dropdown-item" href="#">Trainers</a></li>
                        <li><a className="dropdown-item" href="#">Walkers</a></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex flex-wrap m-2">
                {store.allDoctors.map((info, index) => <CardProviders data={{
                    full_name: info.full_name,
                    howicanhelp: info.howicanhelp,
                    services: info.services,
                }}
                    key={index}
                />)}

            </div>
        </div>
    );

};

GetDoctors.propTypes = {
    match: PropTypes.object
};
