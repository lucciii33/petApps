import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import image1 from "../../img/mainimage.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CardProviders } from "../component/cardproviders";


export const GetDoctors = ({ data }) => {
    const { store, actions } = useContext(Context);
    const [practitioners, setPractitioners] = useState(null)
    const [filterValue, setFilterValue] = useState("")
    console.log(store.allDoctors)

    useEffect(() => {
        setPractitioners(store.allDoctors)
    }, [store.allDoctors])

    useEffect(() => {
        if (filterValue !== "") {
            let newArray = practitioners.filter((item, index) => item.specialty === filterValue)
            setPractitioners(newArray)
        } else {
            setPractitioners(store.allDoctors)
        }

    }, [filterValue])

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
                    <button type="button" class="btn btn-danger dropdown-toggle " onClick={() => setFilterValue("")} data-bs-toggle="dropdown" aria-expanded="false">
                        clear
                    </button>
                    <ul class="dropdown-menu">
                        <li className="dropdown-item" onClick={() => setFilterValue("Groomings")}>Groomers</li>
                        <li className="dropdown-item" onClick={() => setFilterValue("veterinarians")}>Vets</li>
                        <li className="dropdown-item" onClick={() => setFilterValue("Dog trainers")}>Trainers</li>
                        <li className="dropdown-item" onClick={() => setFilterValue("Walker")}>Walkers</li>
                    </ul>
                </div>
            </div>
            <div className="d-flex flex-wrap m-2">

                {practitioners && practitioners.map((info, index) => {
                    return (<CardProviders data={{
                        full_name: info.full_name,
                        howicanhelp: info.howicanhelp,
                        services: info.services,
                    }}
                        key={index}
                    />)
                })}

            </div>
        </div>
    );

};

GetDoctors.propTypes = {
    match: PropTypes.object
};
