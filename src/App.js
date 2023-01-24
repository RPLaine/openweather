import React, {useState, useEffect} from "react";

/* !!! insert your API key here !!! */
const apiKey = '';

/* coordinates */
const locations = [
  "lat=60.25&lon=24.6667",
  "lat=62.2415&lon=25.7209",
  "lat=62.8924&lon=27.677",
  "lat=61.4991&lon=23.7871"
]

/* --- HTML STRUCTURE --- */

/* 3-hour increment box */
const hourlyIncrementBox = () => {
  return(
    <div>
      <div className="increment">
        <div className="incrementTime">15:00</div>
        <div>ICON</div>
        <div className="incrementTemp">-1oC</div>
      </div>
      <div className="incrementExtra">
        <div>2.1 m/s</div>
        <div>5 %</div>
        <div>1 mm</div>
      </div>
    </div>
  );
}

/* future weather predictions */
const futureWeatherPredictions = () => {
  return(
    <div className="cityFuture">
      <div>
        {hourlyIncrementBox()}
      </div>
      <div>
        {hourlyIncrementBox()}
      </div>
      <div>
        {hourlyIncrementBox()}
      </div>
      <div>
        {hourlyIncrementBox()}
      </div>
      <div>
        {hourlyIncrementBox()}
      </div>
    </div>
  );
}

/* present weather */
const presentWeather = () => {
  return(
    <div className="cityNow">
      <div className="cityInfo">
        <div className="cityName">Espoo</div>
        <div className="weatherDescription">Scattered clouds</div>
      </div>
      <div className="cityInfoRight">
        <div className="temperature">Cloud 0oC</div>
      </div>
      <div className="cityInfo">
        <div className="date">May 2nd</div>
        <div className="time">11:53</div>
      </div>
      <div className="cityInfoRight">
        <div className="extraWeatherInfo">
          Wind: 5.1 m/s<br></br>
          Humidity: 86%<br></br>
          Precipitation (3h): 5 mm
        </div>
      </div>
    </div>
  );
}

/* city weather block */
const cityWeatherBlock = () => {
  return(
    <div className="city">
          {presentWeather()}
          {futureWeatherPredictions()}
        </div>
  );
}

/* city selection menu */
const citySelectionMenu = () => {
  return(
    <div className="cityMenu">
      <button class="dropdownButton">
        <div className="dropdownButtonHeader">Kaikki kaupungit</div>
        <div className="dropdownButtonArrow">▼</div>
      </button>
      <div class="dropdownContent">
        <a href="www.google.com">Kaikki kaupungit</a>
        <a href="www.google.com">Espoo</a>
        <a href="www.google.com">Jyväskylä</a>
        <a href="www.google.com">Kuopio</a>
        <a href="www.google.com">Tampere</a>
      </div>
    </div>
  );
}


/* MAIN APPLICATION */
function App() {

  const [EspooWeather, setEspooWeather] = useState();
  const [JKLWeather, setJKLWeather] = useState();
  const [KuopioWeather, setKuopioWeather] = useState();
  const [TampereWeather, setTampereWeather] = useState();

  /* --- SERVER BOMBING --- */
  
  useEffect(() => {
    const fetchEspoo = async () => {
      setEspooWeather("Loading...");
      let res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=60.25&lon=24.6667&appid='); /* !!! apiKeys removed for github !!! */
      setEspooWeather(res.data);
    }

    const fetchJKL = async () => {
      setJKLWeather("Loading...");
      let res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=62.2415&lon=25.7209&appid=');
      setJKLWeather(res.data);
    }

    const fetchKuopio = async () => {
      setKuopioWeather("Loading...");
      let res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=62.8924&lon=27.677&appid=');
      setKuopioWeather(res.data);
    }

    const fetchTampere = async () => {
      setTampereWeather("Loading...");
      let res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=61.4991&lon=23.7871&appid=');
      setTampereWeather(res.data);
    }

    fetchEspoo();
    fetchJKL();
    fetchKuopio();
    fetchTampere();
  }, []);

  /* --- FINAL RETURN --- */

  return (
    <div className="app">
      <div className="header">Säätutka</div>
      <div className="content">
        <div>{EspooWeather}{JKLWeather}{KuopioWeather}{TampereWeather}</div>
        {citySelectionMenu()}
        {cityWeatherBlock()}
        {cityWeatherBlock()}
        {cityWeatherBlock()}
        {cityWeatherBlock()}
      </div>
    </div>
  );
}

export default App;
