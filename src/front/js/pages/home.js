import React, { useContext } from "react";
import { Context } from "../store/appContext";
import image1 from "../../img/image1.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<div className="d-flex row">
				<div className="col-md-6 mainpagebox">
					<div className="text1">
						<h1>petsaviur is your partner in pelvic care</h1>
						<p>We connect you to pelvic care, so you feel confident from the inside out.</p>
					</div>
					<button className="btn btn-outline-success">LEARN MORE</button>
				</div>
				<div className="col-md-6">
					<img src={image1} className="image1 m-auto"></img>
				</div>
			</div>
			<Link to="/profile">profile</Link>
		</div>
	);
};
