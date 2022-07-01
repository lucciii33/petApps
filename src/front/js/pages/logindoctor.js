import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import vet from "../../img/vet.jpg";

export const LoginDoctor = (props) => {

  const { store, actions } = useContext(Context);
  const params = useParams();
  const [singInDoctor, setSingInDoctor] = useState({ password: "", email: "", });
  const handleChange = e => {
    setSingInDoctor({ ...singInDoctor, [e.target.name]: e.target.value });
  };
  // console.log(singIn);
  // console.log(singIn.email)
  // console.log(singIn.password)


  return (
    <div className="jumbotron">

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={singInDoctor.email}
          onChange={handleChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          value={singInDoctor.password}
          onChange={handleChange}
        />
      </div>
      <Link to="/singinInformation"><button
        className="btn btn-primary"
        onClick={() => actions.loginTokenDoctor(singInDoctor.email, singInDoctor.password)}
      >
        Submit
      </button></Link>
    </div>
  );
};

LoginDoctor.propTypes = {
  match: PropTypes.object,
};
