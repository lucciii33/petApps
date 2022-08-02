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
				<div className="col-md-6 col-sm-12 center">
					<div className="text1 text-center">
						<h2>Connect with thousands<br /> of professionals for your pet</h2>
						<p>One click away from the best <strong className="strongtext">veterinarians, hospitals, grooming, trainings, daycares, stores and more.</strong> You can have access to any pet related service in your area. Book it here!.</p>
						<button className="btn btn-success greenbutton">LEARN MORE</button>
					</div>
				</div>
				<div className="col-md-6 imagebox col-sm-12" >
					<img src={image1} className="image1"></img>
				</div>
			</div>
		</div>
	);
};
