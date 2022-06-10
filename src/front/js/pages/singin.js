import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import vet from "../../img/vet.jpg";

export const SingIn = props => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState = ("")
	const [password, setPassword] = useState = ("")
	const params = useParams();

	return (
		<div className="jumbotron">
			<form>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={() => setEmail(e.target.value)} />
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label" value={password} onChange={() => setPassword(e.target.value)}>Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" for="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

SingIn.propTypes = {
	match: PropTypes.object
};
