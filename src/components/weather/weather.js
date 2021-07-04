import { formatNumber } from "./utils";
import weatherIcon from "../weatherIcon/weatherIcon";
import "./weather.scss";

const Weather = ({ weatherData }) => {
  return (
    <>
      <div className="weather-wrapper">
        <div className="weather-location">
          {weatherData.title}, {weatherData.parent.title}
        </div>
        {weatherData.consolidated_weather.map((forecast) => {
          return (
            <div className="weather-card">
              <div>{forecast.applicable_date}</div>
              <div className="weather-temp">
                {weatherIcon(forecast.weather_state_abbr)}
                <div>{formatNumber(forecast.the_temp)}°C</div>
              </div>
              <div className="weather-name">{forecast.weather_state_name}</div>
              <div>Max: {formatNumber(forecast.max_temp)}°C</div>
              <div>Min: {formatNumber(forecast.min_temp)}°C</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Weather;
