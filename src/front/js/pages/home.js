import React, { useContext } from "react";
import { Context } from "../store/appContext";
import image1 from "../../img/image1.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { CompOne } from "../component/mainpagecompone";
import { CompTwo } from "../component/mainpagecomptwo";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<div className="d-flex row mainpagebox">
				<div className="col-md-6">
					<div className="text1">
						<h1>petsaviur is your partner <br /> in pelvic care</h1>
						<p>We connect you to pelvic care, so you feel confident from the inside out.</p>
					</div>
					<button className="btn btn-success greenbutton">LEARN MORE</button>
				</div>
				<div className="col-md-6">
					<img src={image1} className="image1"></img>
				</div>
			</div>
			<Link to="/profile">profile</Link>
		</div>
	);
};
