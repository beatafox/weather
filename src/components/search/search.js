import React, { useState } from "react";
import "./search.scss";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <div className="search-wrapper">
      <div className="search-field">
        <label>Search for city: </label>
        <input
          className="search-input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
