import React from "react";
import Clear from "../../assets/icons/clear.svg";
import Hail from "../../assets/icons/hail.svg";
import HeavyCloud from "../../assets/icons/heavy-cloud.svg";
import HeavyRain from "../../assets/icons/heavy-rain.svg";
import LightCloud from "../../assets/icons/light-cloud.svg";
import LightRain from "../../assets/icons/light-rain.svg";
import Showers from "../../assets/icons/showers.svg";
import Sleet from "../../assets/icons/sleet.svg";
import Snow from "../../assets/icons/snow.svg";
import Thunderstorm from "../../assets/icons/thunderstorm.svg";

function weatherIcon(weatherState) {
  const key = weatherState?.toUpperCase();
  // display weather icon based on weather_state_abbr from data
  let icon = (
    <>
      {
        {
          C: <img alt="" src={Clear}></img>,
          H: <img alt="" src={Hail}></img>,
          HC: <img alt="" src={HeavyCloud}></img>,
          HR: <img alt="" src={HeavyRain}></img>,
          LC: <img alt="" src={LightCloud}></img>,
          LR: <img alt="" src={LightRain}></img>,
          S: <img alt="" src={Showers}></img>,
          SL: <img alt="" src={Sleet}></img>,
          SN: <img alt="" src={Snow}></img>,
          T: <img alt="" src={Thunderstorm}></img>,
        }[key]
      }
    </>
  );
  return <> {icon}</>;
}

export default weatherIcon;
