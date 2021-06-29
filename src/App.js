import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLon(position.coords.longitude);
      setLat(position.coords.latitude);
    });
  }, []);

  return (
    <div className="App">
      <span>Longitude is: {lon}</span>
      <span>Latitude is: {lat}</span>
    </div>
  );
}

export default App;
