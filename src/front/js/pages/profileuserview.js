import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const ProfileView = () => {
	const params = useParams();
	const [idDoctor, setIdDoctor] = useState(params.id)
	const { store, actions } = useContext(Context);
	const [doctors, setDoctors] = useState('');



	// useEffect(() => {
	// 	setDoctors(store.allDoctors)
	// }, [store.allDoctors])

	// useEffect(() => {
	// 	if (params.id !== "") {
	// 		let newArray = doctors.find((item, index) => item.id === params.id)
	// 		setDoctors(newArray)
	// 	} else {
	// 		setDoctors(store.allDoctors)
	// 	}

	// }, [doctors])
	// const doctor = store.allDoctors
	console.log("doctor", doctors)
	return (
		<div className="container">
			<div>
				<h2>{doctors.full_name}</h2>
			</div>
			<div className="row">
				{/* <div className="col-md-6 boximage2 ">

					<div className="sectionprofile">
						<h5 className="mb-2">{doctors.full_name} </h5>


						<h6 className="mb-2">email</h6>
						<p>{doctors.email}</p>
						<h6 className="mb-2">practice name</h6>
						<p>{doctors.full_name}</p>
						<h6 className="mb-2">phone</h6>
						<p>{doctors.phone}</p>
						<h6 className="mb-2">Specialty</h6>
						<p>{doctors.specialty}</p>
						<h6 className="mb-2">Sub-Specialties</h6>
						<p>{doctors.sub_specialty}</p>
						<h6 className="mb-2">Years of Experience</h6>
						<p>{doctors.years_of_experience}</p>
						<div className="d-flex mb-2">
							<h6>need a video call?</h6>
							<i class="fas fa-video ms-3"></i>
						</div>

					</div>

				</div> */}
				<div className="col-md-6 newbg">
					<div>
						<div className="d-flex">

							<div className="pt-3 ms-2 me-5">
								<img src="https://501lifemag.com/wp-content/uploads/2020/06/64_0720_WEB.jpg" className="imageprofile1 "></img>
							</div>
							<div className="editprofile1 pt-3">
								<div className="d-flex justify-content-center">
									<div>
										<h6 className="mb-2 me-2">email</h6>
										<p className="me-2">jsjdjfffffffdj</p>
									</div>
									<div>
										<h6 className="mb-2 me-2">Full name</h6>
										<p className="ms-3">jsjdjfffffffdj  ffff</p>
									</div>
									<div>
										<h6 className="mb-2 me-2">phone</h6>
										<p className="me-2">jfffsjdjdj</p>
									</div>
									<div>

										<h6 className="mb-2 me-2">Specialty</h6>
										<p className="ms-3">{doctors.specialty}jdjdffffffjd</p>
									</div>
									<div>

										<h6 className="mb-2 me-2">Sub-Specialties</h6>
										<p className="ms-3">{doctors.sub_specialty}dffffffffff</p>
									</div>
									<div>

										<h6 className="mb-2 me-2">Years of Experience</h6>
										<p className="ms-3">{doctors.years_of_experience}dddffffffffd</p>
									</div>


								</div>
							</div>

						</div>
						<div className="editprofile1 me-5 "></div>
					</div>


					<br />
					<div>

					</div>
				</div>
			</div>
		</div>
	);
};

ProfileView.propTypes = {
	match: PropTypes.object
};