import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import image1 from "../../img/mainimage.jpg";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { CardProviders } from "../component/cardproviders";
import ReactPaginate from 'react-paginate';


export const GetDoctors = ({ data }) => {
    const { store, actions } = useContext(Context);
    const [practitioners, setPractitioners] = useState(store.allDoctors.slice(0, 2))
    const [filterValue, setFilterValue] = useState("")
    const [pageNumber, setPageNumber] = useState(0)
    const userPerPage = 2
    const pageVisited = pageNumber * userPerPage;
    const params = useParams();
    console.log(store.allDoctors)


    useEffect(() => {
        setPractitioners(store.allDoctors.slice(0, 5))
    }, [store.allDoctors])

    useEffect(() => {
        if (filterValue !== "") {
            let newArray = practitioners.filter((item, index) => item.specialty === filterValue)
            setPractitioners(newArray)
        } else {
            setPractitioners(store.allDoctors)
        }

    }, [filterValue])

    const displayUsers = practitioners.slice(pageVisited, pageVisited + userPerPage)
        .map((info, index) => {
            return (<Link to={`/profileuserview/${info.id}`}><CardProviders data={{
                full_name: info.full_name,
                howicanhelp: info.howicanhelp,
                services: info.services,
            }}
                key={index}
            /></Link>)
        })

    const pageCount = Math.ceil(practitioners.length / userPerPage)
    const handlePageClick = ({ selected }) => {
        setPageNumber(selected)
    }

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
                <div>
                    {/* {practitioners && practitioners.map((info, index) => {
                        return (<Link to={`/profileuserview/${info.id}`}><CardProviders data={{
                            full_name: info.full_name,
                            howicanhelp: info.howicanhelp,
                            services: info.services,
                        }}
                            key={index}
                        /></Link>)
                    })} */}
                    {displayUsers}
                    <ReactPaginate
                        nextLabel={"next"}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={""}
                        pageCount={pageCount}
                        previousLabel={"previus"}
                        renderOnZeroPageCount={null}
                        containerClassName={'paginationButtns'}
                        previousLinkClassName={"previousButtn"}
                        nextLinkClassName={"nextButtn"}
                    // disabledClassName={"disabledButtn"}
                    // activeClassName={"activeButtn"}
                    />
                </div>

            </div>
        </div>
    );

};

GetDoctors.propTypes = {
    match: PropTypes.object
};
