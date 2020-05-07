import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Weather = () => {
  const [posts, setposts] = useState({
    latitude: "",
    longitude: "",
    timezone: "",
    currently: {},
    hourly: {
      data: [{}],
    },
    offset: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const d = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/20a670afebdb2c6f6b8bd1530c83c144/21.7586,72.1466"
      );
      setposts(d.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <br></br>
      <center>
        <h1>
          <b>
            <i>
              Weather <span className="text-primary">Data</span>
            </i>
          </b>
        </h1>
        <br></br>
        <h3>
          {" "}
          <b> {posts.hourly.summary}</b>
        </h3>
      </center>
      {console.log(posts)}
      {console.log(posts.currently.apparentTemperature)}
      <br></br>
      <br></br>
      <table style={{ fontSize: "20px" }} className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sr.no</th>
            <th scope="col">Weather's Quantity</th>
            <th scope="col">Value</th>
            <th scope="col">Type</th>
            <th scope="col">Normal/High</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Temprature</td>
            {/* {console.log(">>>",posts.data)} */}
            <td> {((posts.currently.apparentTemperature - 32) * 5) / 9}</td>
            <td>
              <img
                style={{ height: "3em" }}
                src="https://cdn1.iconfinder.com/data/icons/weather-filled-two-color/614/429_-_Sunny-512.png"
              ></img>
            </td>
            <td>
              <span className="badge badge-pill badge-success">Normal</span>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Humdity</td>
            <td>{posts.currently.humidity * 100}%</td>
            <td>
              <img
                style={{ height: "3em" }}
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/humidity-21-723796.png"
              ></img>
            </td>
            <td>
              <span className="badge badge-pill badge-danger">Danger</span>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pressure</td>
            <td>{posts.currently.pressure}mb</td>
            <td>
              <img
                style={{ height: "3em" }}
                src="https://www.netclipart.com/pp/m/184-1848412_pressure-svg-png-icon-free-download-pressure-icon.png"
              ></img>
            </td>
            <td>
              <span className="badge badge-pill badge-danger">Danger</span>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Wind Speed</td>
            <td>{posts.currently.windSpeed}mph</td>
            <td>
              <img
                style={{ height: "3em" }}
                src="https://cdn3.iconfinder.com/data/icons/weather-2-12/128/High-Wind-Speeds-Power-Weather-Climate-Forecast-512.png"
              ></img>
            </td>
            <td>
              <span className="badge badge-pill badge-success">Normal</span>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Visibility</td>
            <td>{posts.currently.visibility}km</td>
            <td>
              <img
                style={{ height: "3em" }}
                src="data:image/png;base64,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"
              ></img>
            </td>
            <td>
              <span className="badge badge-pill badge-success">Normal</span>
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>UV Index</td>
            <td>{posts.currently.uvIndex}</td>
            <td>
              <img
                style={{ height: "3em" }}
                src="https://cdn0.iconfinder.com/data/icons/weather-433/24/weather-uv-512.png"
              ></img>
            </td>
            <td>
              <span className="badge badge-pill badge-success">Normal</span>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <br></br>
      <center>
        <Link to="/property">
          <button type="button" className="btn btn-outline-primary btn-lg">
            Properties
          </button>
        </Link>
      </center>
      <br></br>
      <br></br>
    </div>
  );
};

export default Weather;
