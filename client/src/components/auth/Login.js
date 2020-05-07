import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
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
        Account <span className="text-primary">Login</span>
      </h1>
      <br></br>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            <b>Email Address</b>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" value="Login" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
