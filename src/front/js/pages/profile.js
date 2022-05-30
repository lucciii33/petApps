import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Profile = () => {
	const { store, actions } = useContext(Context);

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
						<h5 className="mb-2">Dr. Susana Horia  <i class="fas fa-pencil-alt"></i> </h5>
						<h6 className="mb-2">practice name</h6>
						<p></p>
						<h6 className="mb-2">Specialty</h6>
						<p>are1</p>
						<h6 className="mb-2">Sub-Specialties</h6>
						<p>area2</p>
						<h6 className="mb-2">Years of Experience</h6>
						<p>area3</p>
						<div className="d-flex mb-2">
							<h6>need a video call?</h6>
							<i class="fas fa-video ms-3"></i>
						</div>

					</div>

				</div>
				<div className="col-md-4">
					<div className="editprofile">
						<h3>About Me</h3>
						<textarea></textarea>
					</div>
					<div className="editprofile">
						<h3>How I can help you?</h3>
						<textarea></textarea>
					</div>
					<div className="editprofile">
						<h3>Services offered</h3>
						<textarea></textarea>
					</div>
					<div className="editprofilecertification">
						<h3>Certifications</h3>
						<textarea className="special"></textarea>
					</div>
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
