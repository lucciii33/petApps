import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import vet from "../../img/vet.jpg";

export const UserView = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<Link to="/singin">
				<h1>login</h1>
			</Link>
		</div>
	);
};

UserView.propTypes = {
	match: PropTypes.object
};
