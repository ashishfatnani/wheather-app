import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className="nav-item mr-auto">Hello {user && user.name}</li>
      <pre>   </pre>
      <li className="nav-item ml-auto">
        <Link to="/contactus">
          <span className="hide-sm">Contact us</span>
        </Link>
      </li>
      <pre>   </pre>
      <li className="nav-item ml-auto">
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link active" to="/register">
          Register
        </Link>
      </li>

      <li className="nav-item active">
        <Link className="nav-link active" to="/login">
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar navbar-light bg-light">
      <h1>
        <Link to="/">
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul className="nav justify-content-end">
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Anti-Polluto Life",
  icon: "fas fa-globe-asia",
};

export default Navbar;
