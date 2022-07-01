import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [inputValue, setInputValue] = useState({ aboutme: "", howicanhelp: "", services: "", certifications: "" });
	const handleChange = e => {
		setInputValue({ ...inputValue, [e.target.name]: e.target.value });
	};
	return (
		<div className="container">
			<div>
				<h2>Welcome, Susana Horia</h2>
			</div>
			<div className="row">
				<div className="col-md-4 boximage ">

					<div className="">
						<img src="https://501lifemag.com/wp-content/uploads/2020/06/64_0720_WEB.jpg" className="imageprofile "></img>
					</div>
					<div className="sectionprofile">
						<h5 className="mb-2">{store.userDoctor.full_name} </h5> <i className="fas fa-pencil-alt" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>

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
												<input></input>
											</label>
											<label className="labelsingup text-muted">Your Practice’s Name
												<input></input>
											</label>
											<label className="labelsingup text-muted">Your Specialty
												<input></input>
											</label>
											<label className="labelsingup text-muted">Sub Specialty
												<input></input>
											</label>
											<label className="labelsingup text-muted">Years of Experience
												<input></input>
											</label>

										</div>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										<button type="button" className="btn btn-primary">Save changes</button>
									</div>
								</div>
							</div>
						</div>


						<h6 className="mb-2">practice name</h6>
						<p>{store.userDoctor.full_name}</p>
						<h6 className="mb-2">Specialty</h6>
						<p>{store.userDoctor.specialty}</p>
						<h6 className="mb-2">Sub-Specialties</h6>
						<p>{store.userDoctor.Sub_specialty}</p>
						<h6 className="mb-2">Years of Experience</h6>
						<p>{store.userDoctor.years_of_experience}</p>
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
							name="aboutme"
							// value={aboutme}
							onChange={handleChange}
						></textarea>
					</div>
					<br />
					<div className="editprofile">
						<h3>How I can help you?</h3>
						<textarea
							name="howicanhelp"
							// value={howicanhelp}
							onChange={handleChange}
						></textarea>
					</div>
					<div className="editprofile">
						<h3>Services offered</h3>
						<textarea
							name="services"
							// value={services}
							onChange={handleChange}
						></textarea>
					</div>
					<div className="editprofilecertification">
						<h3>Certifications</h3>
						<textarea className="special"
							name="certifications"
							// value={certifications}
							onChange={handleChange}
						></textarea>
					</div>
					{/* <Link className="" to=""> */}
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => actions.addprofile(aboutme, howicanhelp, services, certifications,)}>
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
