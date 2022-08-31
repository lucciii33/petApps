import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const AboutUs = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<div className="text-center m-2 px-5">
				<h6 className="text-ro">Our Mission</h6>
				<h5 className='text-title'>making commer for better for everyone</h5>
				<p className="text-ro px-5">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used <br /> to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
				<br />
			</div>
			<div className=" text-center bg-text position-relative mt-5">
				<div className="bg-aboutus text-start ">
					<h6 className="text-ro mt-4 ms-5">Our People</h6>
					<h5 className='text-title mt-4 ms-5'>Creating a comunity for impact</h5>
					<p className="text-ro mt-4 ms-5">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used<br />  to demonstrate the visual form of a document or a typeface without <br /> relying on meaningful content. Lorem ipsum may be used as a placeholder<br />  before final copy is available. It is also used to temporarily replace text<br />  in a process called greeking, which allows designers to consider <br /> the form of a webpage or publication,</p>

					<img src="https://tse2.mm.bing.net/th?id=OIP.zOT895A5xtSaNqED1-9sTAHaEo&pid=Api&P=0" className="about-us-image position-absolute top-50 start-100 translate-middle"></img>

				</div>
			</div >

			<div className=" text-center bg-text position-relative mt-5">
				<div className="bg-aboutus2 text-end ">
					<h6 className="text-ro mt-4 me-5">Our People</h6>
					<h5 className='text-title mt-4 mb-4 me-5'>Creating a comunity for impact</h5>
					<p className="text-ro me-5">All statements regarding absolute positioning are correct.<br /> People failed to mention, however, that you need position:<br /> relative on the parent container.</p>
					<img src="http://www.urbanfarmonline.com/wp-content/uploads/2019/02/CatCuddle1.jpg" className="about-us-image2 position-absolute top-50 start-0 translate-middle"></img>

				</div>
			</div >



		</div >
	);
};

AboutUs.propTypes = {
	match: PropTypes.object
};
