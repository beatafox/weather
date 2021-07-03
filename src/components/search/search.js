import React, { useState, useEffect } from "react";
import "./search.scss";

const Search = ({ setWeatherData }) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      await fetch(
        `https://www.metaweather.com/api/location/search/?query=${term}`
      )
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
        });
    };
    // condition for not searching empty string
    if (term) {
      search();
    }
  }, [term]);

  const handleClick = (woeid) => {
    fetch(`https://www.metaweather.com//api/location/${woeid}/`)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      });
  };

  const searchResultsMap = results.map((result) => {
    return (
      <div className="search-item" key={result.title}>
        <button onClick={(e) => handleClick(result.woeid)}>
          {result.title}
        </button>
      </div>
    );
  });

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
      <div className="search-results">{searchResultsMap}</div>
    </div>
  );
};

export default Search;
