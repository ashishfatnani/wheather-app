import React from "react";
import { Link } from "react-router-dom";

const property = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-3">
          <div className="col">
            <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://apollo-singapore.akamaized.net/v1/files/udy3afr36ppi1-IN/image;s=1080x1080"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Ghogha circle,Bhvanagar,Gujarat</h5>
                <p className="card-text">₹ 35,00,000</p>
                <a
                  href="https://www.olx.in/item/selling-house-iid-1568794173"
                  className="btn btn-primary"
                  target="_blank"
                >
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://apollo-singapore.akamaized.net/v1/files/jp5jdz5n86qj1-IN/image;s=1080x1080"
                className="card-img-top"
                alt="..."
                style={{ height: "24em" }}
              />
              <div className="card-body">
                <h5 className="card-title">Bharat Nagar, Bhavnagar, Gujarat</h5>
                <p className="card-text">₹ 3,00,000</p>
                <a
                  href="https://www.olx.in/item/housing-bod-iid-1569326677"
                  className="btn btn-primary"
                  target="_blank"
                >
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://apollo-singapore.akamaized.net/v1/files/ykvwzr3p6mmg2-IN/image;s=1080x1080"
                className="card-img-top"
                alt="..."
                style={{ height: "24em" }}
              />
              <div className="card-body">
                <h5 className="card-title">Madhavnagar, Bhavnagar,Gujarat</h5>
                <p className="card-text">₹ 27,65,000</p>
                <a
                  href="https://www.olx.in/item/good-loketion-iid-1568997644"
                  className="btn btn-primary"
                  target="_blank"
                >
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <br></br>
            <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://apollo-singapore.akamaized.net/v1/files/teaja6osesnm3-IN/image;s=1080x1080"
                className="card-img-top"
                alt="..."
                style={{ height: "24em" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  Kaminiya Nagar, Bhavnagar, Gujarat
                </h5>
                <p className="card-text">₹ 25,00,000</p>
                <a
                  href="https://www.olx.in/item/tenament-opp-tramakeshvar-mander-iid-1569012115"
                  className="btn btn-primary"
                  target="_blank"
                >
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <br></br>
            <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://apollo-singapore.akamaized.net/v1/files/rz9cmg3kr0g82-IN/image;s=1080x1080"
                className="card-img-top"
                alt="..."
                style={{ height: "24em" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  Vijay Raj Nagar, Bhavnagar, Gujarat
                </h5>
                <p className="card-text">₹ 23,00,000</p>
                <a
                  href="https://www.olx.in/item/vijayrajnagar-street1-iid-1568993539"
                  className="btn btn-primary"
                  target="_blank"
                >
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <br></br>
            <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://apollo-singapore.akamaized.net/v1/files/q0pf6j5oy3xw2-IN/image;s=1080x1080"
                className="card-img-top"
                alt="..."
                style={{ height: "24em" }}
              />
              <div className="card-body">
                <h5 className="card-title">Tarsimiya, Bhavnagar, Gujarat</h5>
                <p className="card-text">₹ 24,11,000</p>
                <a
                  href="https://www.olx.in/item/3mkan-che-agav-30mkan-ni-site-puri-krel-che-ghogha-road-iid-1568617671"
                  className="btn btn-primary"
                  target="_blank"
                >
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <center>
          <h3>
            <b>Check out the different areas?</b>
          </h3>
          <Link to="/map">
            <button
              type="button"
              className="btn btn-primary btn-lg active"
              onClick={() => {}}
            >
              Map
            </button>
          </Link>
        </center>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default property;
