import "./weather.scss";
import { formatNumber } from "./utils";
import weatherIcon from "../weatherIcon/weatherIcon";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  const city = weatherData.parent.title;
  const forecast = weatherData.consolidated_weather[0];
  return (
    <>
      <div className="weather-wrapper">
        <div> {city}</div>
        {weatherIcon(forecast.weather_state_abbr)}
        <div> {forecast.weather_state_name}</div>
        <div>{formatNumber(forecast.the_temp)}</div>
        <div> Max: {formatNumber(forecast.max_temp)}</div>
        <div>Min:{formatNumber(forecast.min_temp)}</div>
      </div>
    </>
  );
};

export default Weather;
