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
    navigator.geolocation.getCurrentPosition(function (position) {
      setLon(position.coords.longitude);
      setLat(position.coords.latitude);
    });

    latt &&
      long &&
      fetch(`${configData.apiUrl}search/?lattlong=${latt},${long}`)
        .then((response) => response.json())
        .then((result) => {
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
