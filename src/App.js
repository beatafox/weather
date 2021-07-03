import React, { useEffect, useState } from "react";
import configData from "./config.json";
import Search from "./components/search/search";
import Loader from "./components/loader/loader";
import Weather from "./components/weather/weather";

function App() {
  const [long, setLon] = useState("");
  const [latt, setLat] = useState("");
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    // set longitude and lattitude when user accepts locating his position in browser
    navigator.geolocation.getCurrentPosition(function (position) {
      setLon(position.coords.longitude);
      setLat(position.coords.latitude);
    });

    latt &&
      long &&
      // get city code from api
      fetch(`${configData.apiUrl}search/?lattlong=${latt},${long}`)
        .then((response) => response.json())
        .then((result) => {
          // get weather data based on city code
          fetch(`${configData.apiUrl}${result[0].woeid}/`)
            .then((res) => res.json())
            .then((data) => {
              setWeatherData(data);
            })
            .catch((e) => {
              console.log(e);
            });
        });
  }, [latt, long]);

  return (
    <div className="App">
      {weatherData ? (
        <>
          <Weather weatherData={weatherData} />
          <Search setWeatherData={setWeatherData} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
