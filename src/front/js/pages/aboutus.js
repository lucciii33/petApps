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
			<div className="text-center m-2">
				<h1>Our Mission</h1>
				<h5>Elana was launched to support, and be part of, a generational change <br /> in women’s health, transforming the conversation around pelvic care <br /> through empowerment, accessibility, and education.</h5>
				<br />
			</div>
			<div className="bg-aboutus text-center">
				<h1>Our Mission</h1>
				<br />
				<h6>Here at Elana, pelvic care isn’t just business, it’s personal.​​</h6>
				<p>Managing our own health at various chapters in our lives, we have seen and experienced first-hand some of the <br /> challenges when it comes to talking about intimate issues. Finding answers and feeling comfortable to talk openly<br />about health problems can be hard even with people you trust.<br />
					<br />
					Our journey started as two women, different countries, different ages, sharing our experiences of c-sections,<br /> postpartum complications, to the signs of perimenopause. From battling with extreme pelvic pain and complications,<br /> to feeling unprepared for the changes in a woman's health as we age, much of which, down to the lack of easily<br /> accessible information and knowing where to go for the right support.<br />
					<br />
					Our journeys shouldn’t have been so hard,  but it was, and is for so many women globally - on average it takes 7 years <br />for pelvic issues to be properly diagnosed. Having experienced first hand how life changing issues with the pelvic<br /> region can have on you, your mental health and relationships, we knew we had to be part of a lasting change.<br /></p>
				<br />
			</div>
			<div>
				<h1 className="text-center">Meet the Team</h1>
				<div className="d-flex row justify-content-center">
					<div className="squereaboutus col-md-4"></div>
					<div className="squereaboutus col-md-4"></div>
					<div className="squereaboutus col-md-4"></div>
				</div>
			</div>
		</div>
	);
};

AboutUs.propTypes = {
	match: PropTypes.object
};
