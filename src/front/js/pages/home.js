import React, { useContext } from "react";
import { Context } from "../store/appContext";
import image1 from "../../img/mainimage.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { CompOne } from "../component/mainpagecompone";
import { CompTwo } from "../component/mainpagecomptwo";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<div className="d-flex row mainpagebox">
				<div className="col-md-6 col-sm-12">
					<div className="text1 text-center">
						<h1>Connect with thousands<br /> of professionals for your pet</h1>
						<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
					</div>
					<button className="btn btn-success greenbutton">LEARN MORE</button>
				</div>
				<div className="col-md-6 imagebox col-sm-12" >
					<img src={image1} className="image1"></img>
				</div>
			</div>
			<Link to="/profile">profile</Link>
		</div>
	);
};
