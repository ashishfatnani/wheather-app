import React, { useContext, useState } from "react";
import { StoreContext } from "./mapstate";
import SearchResult from "./SearchResults";
import { useObserver } from "mobx-react";
import "./site.css";

const SearchBar = () => {
  const store = useContext(StoreContext);
  const [searchText, setSearchText] = useState("");

  const getResults = (e) => {
    setSearchText(e.target.value);
  };

  const showSuggestions = () => {
    store.suggestions = true;
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          store.searchText = searchText;
        }}
      >
        <div className="form-group mt-5">
          <input
            type="text"
            className="searchBar form-control"
            placeholder="Search here"
            onChange={getResults}
            onFocus={showSuggestions}
          ></input>
        </div>
      </form>
      {useObserver(() => store.suggestions && <SearchResult />)}
    </div>
  );
};
export default SearchBar;
