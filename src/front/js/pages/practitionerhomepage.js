import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import vet from "../../img/vet.jpg";

export const PractitionerHomePage = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="">
			<div className="d-flex  conta-doctors bg-green-doctors">
				<div className="ms-5 center-doctors bg-green-doctors">
					<div className="children">


						<h2 className="text-center p-3 pt-4">Grow your Practice with Elana</h2>
						<p className="text-center pb-3">Together we can transform women's health</p>
						<div className="d-flex children">
							<Link to='/registerDoctor'><button className="btn btn-success d-block m-auto">REGISTER NOW</button></Link>
							<Link to='/registerDoctor'><button className="btn btn-success d-block m-auto">REGISTER NOW</button></Link>
						</div>

					</div>
				</div>
				<div>
					<div>
						<img src="https://images.pexels.com/photos/7470754/pexels-photo-7470754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="new-image"></img>
					</div>
				</div>

			</div>
			<div className="mb-2">
				<h4 className="text-center p-1 pt-3">Elana can help you build a thriving practice</h4>
				<p className="text-center pt-1">We are on a mission to make it easier for practitioners to reach women who want <br /> to take control of their pelvic health.  We are actively building our network.</p>
				<div className="d-flex PHboxcontainer">
					<div className="PHbox">
						<div className="center-text-container">
							<h4>Reach more patients</h4>
							<p>Fill up your patient load on your terms with telehealth and in-person appointments.</p>
						</div>
					</div>
					<div className="PHbox">
						<div className="center-text-container">

							<h4>Connect with Practitioners</h4>
							<p>Collaborate with the other practitioners and the Elana team to help us improve women’s health. </p>
						</div>
					</div>
					<div className="PHbox">
						<div className="center-text-container">
							<h4>Generate Awareness</h4>
							<p>Reach more patients by offering courses and content through Elana’s platform..</p>
						</div>

					</div>
				</div>
			</div>
			<div>
				{/* <div className="d-flex mt-5">
					<div className="bggreenflex">
						<h2 className="text-center h2ph">Are you a practitioner passionate about women's pelvic health and wellness?</h2>
						<h4 className="text-center mt-3">Joining Elana is simple and free.</h4>

						<p className="text-center mt-2"> ​Fill out the online application </p>
						<p className="text-center mt-2">Provide us with your basic information </p>
						<p className="text-center mt-2">We will be in touch! </p>
					</div>
					<div>
						<img src="https://images.pexels.com/photos/7470754/pexels-photo-7470754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="PHimage"></img>
					</div>
				</div> */}
				<div className="PHbg-green mt-5 ">
					<div>
						<h2 className="text-center p-3 pt-4">Grow your Practice with Elana</h2>
						<p className="text-center pb-3">Together we can transform women's health</p>
						<Link to='/registerDoctor'><button className="btn btn-success d-block m-auto">REGISTER NOW</button></Link>
					</div>

				</div>
			</div>
		</div>
	);
};

PractitionerHomePage.propTypes = {
	match: PropTypes.object
};
