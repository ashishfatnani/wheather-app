import React from "react";
import ashish from "./ashish.jpg";
import parth from "./parth.JPG";
import falgun from "./falgun.JPG";
import paras from "./paras.png";

const About = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">
            <b>About Us!</b>
          </h1>
          <p className="lead">
            We are team of students of Shantilal Shah Engg College studying in
            final year. Our team consists of passionate as well as committed
            team-members who are always supportive as well as happy to solve
            your problem. This is our final-year project in which we have taken
            the initiative to make awareness about the climatic wheather in
            which people are living. Below is our team, feel free to contact us.
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <div className="card card h-100">
            <img src={ashish} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><b>Ashish Fatnani</b></h5>
              <p className="card-text">
                <b>Fullstack Developer :</b> Contributed in this project with
                Nodejs,Expressjs and Reactjs. It also includes System designing
                as well as communication with the server.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card card h-100">
            <img src={parth} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><b>Parth Gondaliya</b></h5>
              <p className="card-text">
                <b>Backend Developer :</b> Contributed in this project with my
                knowledge in REST Api's as well as GraphQL
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card card h-100">
            <img src={falgun} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><b>Falgun Makadiya</b></h5>
              <p className="card-text">
                <b>Fronted developer:</b> Contributed in this project in
                designing the app with Reactjs and basic HTML,CSS and JS.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card card h-100">
            <img src={paras} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><b>Paras Khambhaliya</b></h5>
              <p className="card-text">
                <b> DBA (Database Admin):</b> Contributed in this project by
                handling the complete data with the help of Mongodb as our
                database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
