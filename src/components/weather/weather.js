//import "./weather.scss";
import { formatNumber } from "./utils";
const Weather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <>
      {weatherData.parent.title}
      {weatherData.consolidated_weather[0].weather_state_name}
      {formatNumber(weatherData.consolidated_weather[0].max_temp)}
      {formatNumber(weatherData.consolidated_weather[0].min_temp)}
      {formatNumber(weatherData.consolidated_weather[0].the_temp)}
    </>
  );
};

export default Weather;
