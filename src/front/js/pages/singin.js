import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import vet from "../../img/vet.jpg";

export const SingIn = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [singIn, setSingIn] = useState({ password: "", email: "", });
  const handleChange = e => {
    setSingIn({ ...singIn, [e.target.name]: e.target.value });
    console.log(singIn);
  };

  return (
    <div className="jumbotron">
      <form>
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
            value={singIn.email}
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
            value={singIn.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => actions.loginToken(singIn.email, singIn.password)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

SingIn.propTypes = {
  match: PropTypes.object,
};
