import React from "react";
import { Link } from "react-router-dom";
import image2 from "../../img/petsafe.png";
export const Navbar = () => {
	return (
		<div >
			<nav className="navbar navbar-expand-lg navbar-white bg-white">
				<div className="container-fluid">
					<img src={image2} className="logo"></img>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<Link to="/" className="text-decoration-none">
							<li className="">
								<h5 className="linknav" href="#">Home</h5>
							</li>
						</Link>
						<Link to="/aboutus" className="text-decoration-none">
							<li className="">
								<h5 className="linknav" href="#">About us</h5>
							</li>
						</Link>
						<Link to="/practitionerhomepage" className="text-decoration-none">
							<li className="">
								<h5 className="linknav" href="#">Providers</h5>
							</li>
						</Link>
						<Link to="/aboutus" className="text-decoration-none">
							<li className="">
								<h5 className="linknav" href="#">Contact us</h5>
							</li>
						</Link>
						<Link to="/aboutus" className="text-decoration-none">
							<li className="">
								<h5 className="linknav" href="#">Users</h5>
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		</div>
	);
};
