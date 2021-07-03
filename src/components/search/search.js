import React, { useState, useEffect } from "react";
import configData from "../../config.json";
import "./search.scss";

const Search = ({ setWeatherData }) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      // get cities from api based on search term
      await fetch(`${configData.apiUrl}search/?query=${term}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    // condition for not searching empty string
    if (term) {
      search();
    }
  }, [term]);

  const handleClick = (woeid) => {
    // fetch weather data when use clicks on one of the search results
    fetch(`${configData.apiUrl}${woeid}/`)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // map the results form api fetch
  const searchResultsMap = results.map((result) => {
    return (
      <div className="search-item" key={result.woeid}>
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
