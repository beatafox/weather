import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [long, setLon] = useState("");
  const [latt, setLat] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLon(position.coords.longitude);
      setLat(position.coords.latitude);
    });

    latt &&
      long &&
      fetch(
        `https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`
      )
        .then((response) => response.json())
        .then((result) => {
          fetch(`https://www.metaweather.com//api/location/${result[0].woeid}/`)
            .then((res) => res.json())
            .then((data) => {
              setWeather(data);
            });
        });
  }, [latt, long]);

  return <div className="App"></div>;
}

export default App;
