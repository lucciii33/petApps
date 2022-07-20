import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import vet from "../../img/vet.jpg";

export const RegisterDoctor = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [registerDoctor, setRegisterDoctor] = useState({ email: "", full_name: "", phone: "", password: "", specialty: "", sub_specialty: "", years_of_experience: "", aboutme: "", howicanhelp: "", services: "", certifications: "", image_profile: "" });
  const handleChange = e => {
    setRegisterDoctor({ ...registerDoctor, [e.target.name]: e.target.value });

  };

  const specialtyDoctor = [
    "Groomings",
    "Dog trainers",
    "veterinarians",
    "Walker",
  ]

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
        <div class="input-group">
          <select
            class="form-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
            value={registerDoctor.specialty}
            name="specialty"
            onChange={handleChange}
          >
            <option value="0" className="text-muted">
              -select one-
            </option>
            {specialtyDoctor.map((type, index) => {
              return <option key={index} value={type} className="text-muted">
                {type}
              </option>
            })}
          </select>
        </div>
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
        <input
          type="text"
          className="form-control"
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
        <input
          type="text"
          className="form-control"
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
        <input
          type="text"
          className="form-control"
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
          value={registerDoctor.certifications}
          name="certifications"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label"
        >
          write yes if you will use and image
        </label>
        <input
          type="text"
          className="form-control"
          value={registerDoctor.image_profile}
          name="image_profile"
          onChange={handleChange}
        />
      </div>
      <Link to="/logindoctor"><button
        type="submit"
        className="btn btn-primary"
        onClick={() => actions.registerUserDoctor(registerDoctor.email, registerDoctor.full_name, registerDoctor.phone, registerDoctor.password, registerDoctor.specialty, registerDoctor.sub_specialty, registerDoctor.years_of_experience, registerDoctor.aboutme, registerDoctor.howicanhelp, registerDoctor.services, registerDoctor.certifications, registerDoctor.image_profile)}
      >
        Submit
      </button></Link>
    </div>
  );
};

RegisterDoctor.propTypes = {
  match: PropTypes.object,
};
