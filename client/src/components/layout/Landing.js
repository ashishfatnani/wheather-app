import React from "react";
import bakimage from "./image.jpg";
import { Link } from "react-router-dom";
import "./landingStyle.css";
const Landing = () => {
  return (
    <div>
      <section>
        <img
          className="img-responsive"
          style={{
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            margin: "auto",
            left: 0,
            zIndex: -1,
          }}
          src={bakimage}
          alt="image"
        ></img>
        <div
          className="buttons customDiv text-center"
          style={{
            position: "absolute",
            top: "110%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Link to="/about" className="btn btn-primary btn-lg ">
            About
          </Link>
          <pre> </pre>
          <Link to="/map" className="btn btn-light btn-lg">
            Map
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
