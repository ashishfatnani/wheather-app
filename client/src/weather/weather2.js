import React from "react";
import DarkSkyApi from "dark-sky-api";
DarkSkyApi.apiKey = "20a670afebdb2c6f6b8bd1530c83c144";

// DarkSkyApi.loadForecast().then((result) => console.log(result));

const position = {
  latitude: 21.7645,
  longitude: 72.1519,
};
// DarkSkyApi.loadCurrent(position).then((result) => console.log(result));

const weather2 = () => {
  return <div></div>;
};

export default weather2;
