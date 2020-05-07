import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "./mapstate";
import { useObserver } from "mobx-react";
import api from "./api";

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState([]);
  const store = useContext(StoreContext);
  // const [latlng,setlatlng] = useState([store.mapState.lat,store.mapState.lng]);

  useEffect(() => {
    const fetchData = async () => {
      const SearchResult = await api.get("", {
        params: {
          near: "bhavnagar",
          limit: 5,
          query: store.searchText,
        },
      });
      setSearchResult(SearchResult.data.response.venues);
    };
    fetchData();
  }, [store.searchText]);

  const setMapCoords = (lat, lng) => {
    store.mapState.lat = lat;
    store.mapState.lng = lng;
    store.suggestions = false;
  };

  const resultArray = searchResult;
  const resultList = useObserver(() => {
    // i know this is cheating 😂
    console.log(store.searchText);
    return resultArray.map((venue) => {
      return (
        <div
          key={venue.id}
          className="card-body btn-light"
          onClick={() => setMapCoords(venue.location.lat, venue.location.lng)}
        >
          {venue.name + " " + venue.location.lat + " " + venue.location.lng}
        </div>
      );
    });
  });
  return (
    <div className="card shadow-sm p-3 mb-5 bg-white rounded">{resultList}</div>
  );
};
export default SearchResult;
