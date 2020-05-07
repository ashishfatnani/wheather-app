import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <br></br>
      <br></br>
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <br></br>
      <form onSubmit={onSubmit}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            <b>Name</b>
          </label>
          <div className="col-sm-10">
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            <b>Email Address</b>
          </label>
          <div className="col-sm-10">
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            <b>Password</b>
          </label>
          <div className="col-sm-10">
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              minLength="6"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password2" className="col-sm-2 col-form-label">
           <b> Confirm Password</b>
          </label>
          <div className="col-sm-10">
            <input
              id="password2"
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              required
              minLength="6"
              className="form-control"
            />
          </div>
        </div>
        <center>
          <input type="submit" value="Register" className="btn btn-primary" />
        </center>
      </form>
    </div>
  );
};

export default Register;