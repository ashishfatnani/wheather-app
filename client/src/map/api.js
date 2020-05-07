import axios from "axios";

export default axios.create({
  baseURL: `https://api.foursquare.com/v2/venues/search?client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}&client_secret=${process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET}&v=20200315&radius=30000&&intent=browse`,
});
