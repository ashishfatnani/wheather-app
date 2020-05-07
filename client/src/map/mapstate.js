import React from "react";
import SearchBar from "./SearchBar";
import { useLocalStore } from "mobx-react";
import MapBody from "./map";

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    searchText: "",
    mapState: {
      lng: 72.1519,
      lat: 21.7645,
      zoom: 12,
    },
    suggestions: false,
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const MapState = () => {
  return (
    <StoreProvider>
      <div className="container mainWrapper">
        <SearchBar />
        <MapBody />
      </div>
    </StoreProvider>
  );
};

export default MapState;
