import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import vet from "../../img/vet.jpg";

export const Register = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [register, setRegister] = useState({ email: "", password: "", first_name: "", last_name: "", phone: "" });
  const handleChange = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });

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
            value={register.email}
            name="email"
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
            value={register.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleInputPassword1"
            className="form-label"
          >
            First_name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={register.first_name}
            name="first_name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleInputPassword1"
            className="form-label"
          >
            last name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={register.last_name}
            name="last_name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleInputPassword1"
            className="form-label"
          >
            phone
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={register.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        <Link to="/singin"><button
          type="submit"
          className="btn btn-primary"
          onClick={() => actions.registerUser(register.email, register.password, register.first_name, register.last_name, register.phone)}
        >
          Submit
        </button></Link>
      </form>
    </div>
  );
};

Register.propTypes = {
  match: PropTypes.object,
};
