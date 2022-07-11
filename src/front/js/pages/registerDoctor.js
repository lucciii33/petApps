import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import vet from "../../img/vet.jpg";

export const RegisterDoctor = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [registerDoctor, setRegisterDoctor] = useState({ email: "", full_name: "", phone: "", password: "", specialty: "", sub_specialty: "", years_of_experience: "", aboutme: "", howicanhelp: "", services: "", certifications: "" });
  const handleChange = e => {
    setRegisterDoctor({ ...registerDoctor, [e.target.name]: e.target.value });

  };

  return (
    <div className="jumbotron">
      <h1>Register doctor</h1>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={registerDoctor.email}
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
          full_name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={registerDoctor.full_name}
          name="full_name"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label"
        >
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={registerDoctor.phone}
          name="phone"
          onChange={handleChange}
        />
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
          value={registerDoctor.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label"
        >
          specialty
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={registerDoctor.specialty}
          name="specialty"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label"
        >
          Sub specialty
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={registerDoctor.sub_specialty}
          name="sub_specialty"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label"
        >
          years_of_experience
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={registerDoctor.years_of_experience}
          name="years_of_experience"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label"
        >
          aboutme
        </label>
        <textarea
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={registerDoctor.aboutme}
          name="aboutme"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label"
        >
          howicanhelp
        </label>
        <textarea
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={registerDoctor.howicanhelp}
          name="howicanhelp"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label"
        >
          services
        </label>
        <textarea
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={registerDoctor.services}
          name="services"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label"
        >
          certifications
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={registerDoctor.certifications}
          name="certifications"
          onChange={handleChange}
        />
      </div>
      <Link to="/logindoctor"><button
        type="submit"
        className="btn btn-primary"
        onClick={() => actions.registerUserDoctor(registerDoctor.email, registerDoctor.full_name, registerDoctor.phone, registerDoctor.password, registerDoctor.specialty, registerDoctor.sub_specialty, registerDoctor.years_of_experience, registerDoctor.aboutme, registerDoctor.howicanhelp, registerDoctor.services, registerDoctor.certifications)}
      >
        Submit
      </button></Link>
    </div>
  );
};

RegisterDoctor.propTypes = {
  match: PropTypes.object,
};
