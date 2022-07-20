import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const Profile = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	// const [currentDoctor, setCurrentDoctor] = useState("");


	const [inputValue, setInputValue] = useState({ full_name: "", email: "", phone: "", specialty: "", sub_specialty: "", years_of_experience: "" });
	const handleChange = e => {
		setInputValue({ ...inputValue, [e.target.name]: e.target.value });
	};


	const [inputValueTwo, setInputValueTwo] = useState({ full_name: "", email: "", phone: "", specialty: "", sub_specialty: "", years_of_experience: "" });
	const handleChangeTwo = e => {
		setInputValueTwo({ ...inputValueTwo, [e.target.name]: e.target.value });
	};
	const doctor = store.userDoctor

	// useEffect(async () => {
	// 	// await actions.getDataDoctors();
	// 	setCurrentDoctor(await actions.getDataDoctorsbyId((params.id)));
	// 	// await actions.updateDoctorsProfile();
	// }, [])
	return (
		<div className="container">
			<div>
				<h2>{doctor.full_name}</h2>
			</div>
			<div className="row">
				<div className="col-md-4 boximage ">

					<div className="">
						<Link to="/uploadImage"><div src="https://501lifemag.com/wp-content/uploads/2020/06/64_0720_WEB.jpg" className="imageprofile ">
							edit your pic here
						</div></Link>
					</div>
					<div className="sectionprofile">
						<h5 className="mb-2">{doctor.full_name} </h5> <i className="fas fa-pencil-alt" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>

						<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">Edit Credentials</h5>
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div className="modal-body ">
										<div>Please add the following credentials:</div>
										<div className="d-grid justify-content-center m-1">
											<label className="labelsingup text-muted">Your Name
												<input name="full_name"
													value={inputValue.full_name}
													onChange={handleChange}></input>
											</label>
											<label className="labelsingup text-muted">Email
												<input name="email"
													value={inputValue.email}
													onChange={handleChange}></input>
											</label>
											<label className="labelsingup text-muted">Phone
												<input name="phone"
													value={inputValue.phone}
													onChange={handleChange}></input>
											</label>
											<label className="labelsingup text-muted">Your Specialty
												<input name="specialty"
													value={inputValue.specialty}
													onChange={handleChange}></input>
											</label>
											<label className="labelsingup text-muted">Sub Specialty
												<input name="sub_specialty"
													value={inputValue.sub_specialty}
													onChange={handleChange}></input>
											</label>
											<label className="labelsingup text-muted">Years of Experience
												<input name="years_of_experience"
													value={inputValue.years_of_experience}
													onChange={handleChange}></input>
											</label>

										</div>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										<button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
											actions.updateDoctorsProfile(inputValue.email, inputValue.full_name, inputValue.phone, inputValue.specialty, inputValue.sub_specialty, inputValue.years_of_experience, doctor.id)

										}}>Save changes</button>
									</div>
								</div>
							</div>
						</div>


						<h6 className="mb-2">email</h6>
						<p>{doctor.email}</p>
						<h6 className="mb-2">practice name</h6>
						<p>{doctor.full_name}</p>
						<h6 className="mb-2">phone</h6>
						<p>{doctor.phone}</p>
						<h6 className="mb-2">Specialty</h6>
						<p>{doctor.specialty}</p>
						<h6 className="mb-2">Sub-Specialties</h6>
						<p>{doctor.sub_specialty}</p>
						<h6 className="mb-2">Years of Experience</h6>
						<p>{doctor.years_of_experience}</p>
						<div className="d-flex mb-2">
							<h6>need a video call?</h6>
							<i class="fas fa-video ms-3"></i>
						</div>

					</div>

				</div>
				<div className="col-md-4">

					<div className="editprofile">
						<h3>About Me</h3>
						<p>{doctor.aboutme}</p>
						<textarea
							name="aboutme"
							value={inputValueTwo.aboutme}
							onChange={handleChangeTwo}

						></textarea>

					</div>
					<br />
					<div className="editprofile">
						<h3>How I can help you?</h3>
						<p>{doctor.howicanhelp}</p>
						<textarea
							name="howicanhelp"
							value={inputValueTwo.howicanhelp}
							onChange={handleChangeTwo}

						></textarea>

					</div>
					<div className="editprofile">
						<h3>Services offered</h3>
						<p>{doctor.services}</p>
						<textarea
							name="services"
							value={inputValueTwo.services}
							onChange={handleChangeTwo}

						></textarea>

					</div>
					<div className="editprofilecertification">
						<h3>Certifications</h3>
						<p>{doctor.certifications}</p>
						<textarea className="special"
							name="certifications"
							value={inputValueTwo.certifications}
							onChange={handleChangeTwo}
						></textarea>

					</div>
					{/* <Link className="" to=""> */}
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => actions.editProfileTwo(inputValueTwo.aboutme, inputValueTwo.howicanhelp, inputValueTwo.services, inputValueTwo.certifications, doctor.id)}>
						save
					</button>
					{/* </Link> */}
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

Profile.propTypes = {
	match: PropTypes.object
};