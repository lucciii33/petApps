import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const ProfileView = () => {

	// const [idDoctor, setIdDoctor] = useState(params.id)
	const { store, actions } = useContext(Context);
	const [doctor, setDoctor] = useState(null);
	const params = useParams();


	useEffect(() => {
		let individual = store.allDoctors.find((item) => {
			console.log(item)
			if (item.id == params.id) {
				return item;
			}
		}
		)
		setDoctor(individual)
		// const result = store.userDoctor == {} ? arr.find((item) => item.id === params.id) : doctor;
		// setDoctor(result)
	}, [store.allDoctors])

	// useEffect(async () => {
	// 	setDoctor(await actions.getDataDoctorsbyId(params.id))
	// }, [])

	// useEffect(() => {
	// 	if (params.id !== "") {
	// 		let newArray = doctors.find((item, index) => item.id === params.id)
	// 		setDoctors(newArray)
	// 	} else {
	// 		setDoctors(store.allDoctors)
	// 	}

	// }, [doctors])
	// const doctor = store.allDoctors
	console.log("doctor", doctor)
	return (
		<div className="container">
			<div>
				<h2>{doctor && doctor.full_name}</h2>
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
								<img src={doctor && doctor.image_profile} className="imageprofile1 "></img>
							</div>
							<div className="editprofile1 pt-3">
								<div className="d-flex justify-content-center">
									<div>
										<h6 className="mb-2 me-2">email</h6>
										<p>{doctor && doctor.email}</p>
									</div>
									<div>
										<h6 className="mb-2 me-2">Full name</h6>
										<p>{doctor && doctor.full_name}</p>
									</div>
									<div>
										<h6 className="mb-2 me-2">phone</h6>
										<p>{doctor && doctor.phone}</p>
									</div>
									{/* <div>

										<h6 className="mb-2 me-2">Specialty</h6>
										<p className="ms-3">{doctor.specialty}jdjdffffffjd</p>
									</div>
									<div>

										<h6 className="mb-2 me-2">Sub-Specialties</h6>
										<p className="ms-3">{doctor.sub_specialty}dffffffffff</p>
									</div>
									<div>

										<h6 className="mb-2 me-2">Years of Experience</h6>
										<p className="ms-3">{doctor.years_of_experience}dddffffffffd</p>
									</div> */}


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