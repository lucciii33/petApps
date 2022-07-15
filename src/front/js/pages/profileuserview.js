import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const ProfileView = () => {
	const params = useParams();
	const [idDoctor, setIdDoctor] = useState(params.id)
	const { store, actions } = useContext(Context);
	const [doctors, setDoctors] = useState('');



	useEffect(() => {
		setDoctors(store.allDoctors)
	}, [store.allDoctors])

	useEffect(() => {
		if (params.id !== "") {
			let newArray = doctors.find((item, index) => item.id === params.id)
			setDoctors(newArray)
		} else {
			setDoctors(store.allDoctors)
		}

	}, [doctors])
	// const doctor = store.allDoctors
	console.log("doctor", doctors)
	return (
		<div className="container">
			<div>
				<h2>{doctors.full_name}</h2>
			</div>
			<div className="row">
				<div className="col-md-4 boximage ">

					<div className="">
						<img src="https://501lifemag.com/wp-content/uploads/2020/06/64_0720_WEB.jpg" className="imageprofile "></img>
					</div>
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

				</div>
				<div className="col-md-4">
					<div className="editprofile">
						<h3>About Me</h3>
						<textarea
						// name="aboutme"
						// // value={aboutme}
						// onChange={handleChange}
						// {...store.userDoctor.aboutme}
						></textarea>
						<p>{doctors.aboutme}</p>
					</div>
					<br />
					<div className="editprofile">
						<h3>How I can help you?</h3>
						{/* <textarea
							name="howicanhelp"
							// value={howicanhelp}
							onChange={handleChange}
						></textarea> */}
						<p>{doctors.howicanhelp}</p>
					</div>
					<div className="editprofile">
						<h3>Services offered</h3>
						{/* <textarea
							name="services"
							// value={services}
							onChange={handleChange}
						></textarea> */}
						<p>{doctors.services}</p>
					</div>
					<div className="editprofilecertification">
						<h3>Certifications</h3>
						{/* <textarea className="special"
							name="certifications"
							// value={certifications}
							onChange={handleChange}
						></textarea> */}
						<p>{doctors.certifications}</p>
					</div>
					<Link className="" to="">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => actions.addprofile(aboutme, howicanhelp, services, certifications,)}>
							save
						</button>
					</Link>
				</div>
				<div className="col-md-4">
					<div className="availability"></div>
					<div className="cancelation"></div>
					<div className="payment"></div>
				</div>
			</div>
		</div>
	);
};

ProfileView.propTypes = {
	match: PropTypes.object
};