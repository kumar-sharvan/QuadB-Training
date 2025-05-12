import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (city === "") {
      alert("Please enter a city name");
      return;
    }

    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d85e13c4bec3d68f30d9f46fa1ef42d9&units=metric`;

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("City not found");
      }
      const data = await res.json();
      console.log(data);
      setWeather(data);
      setCity("");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">🌤️ Weather App</h1>
      <div className="input-group mb-3 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoFocus
        />
        <button className="btn btn-primary" onClick={fetchWeather}>
          Get Weather
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {weather && (
        <div
          className="card mx-auto mt-2   p-4 shadow"
          style={{ maxWidth: "400px" }}
        >
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="img-thumbnail m-auto mb-2"
            height={300}
            width={300}
          />
          <h4>{weather.weather[0].main}</h4>
          <p className="lead">
            {weather.main.temp}°C <br />
            Feels like: {weather.main.feels_like}°C
          </p>
          <p>
            Humidity: {weather.main.humidity}% <br />
            Wind: {weather.wind.speed} m/s <br />
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
