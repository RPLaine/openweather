import React, {useState, useEffect} from "react";

/* 
!!! --- APIKEY --- !!!
*/
const apiKey = "INSERT YOUR APIKEY"; /* !!! --- INSERT APIKEY HERE! --- !!! */

/* 
GPS locations for the cities 
0 : Espoo
1 : Jyväskylä
2 : Kuopio
3 : Tampere 
*/
const locations = [
  "lat=60.25&lon=24.6667",
  "lat=62.2415&lon=25.7209",
  "lat=62.8924&lon=27.677",
  "lat=61.4991&lon=23.7871"
]

/* 
API Url to get data from openweathermap.org. Number get a locations from locations array. 
*/
const apiUrl = (number) => {
  return `https://api.openweathermap.org/data/2.5/forecast?${locations[number]}&appid=${apiKey}`;
}

function App() {
  /* 
  Openweathermap.org data storages 
  */
  var [EspooData, setEspooData] = useState({});
  var [JKLData, setJKLData] = useState({});
  var [KuopioData, setKuopioData] = useState({});
  var [TampereData, setTampereData] = useState({});

  /* 
  Indicates whether the app shows data. False: data not shown. True: data shown. 
  */
  var [loading, setLoading] = useState(true);

  /* 
  Creates current time. 
  */
  const d = new Date();

  /* 
  Fetch data from openweathermap.org 
  */
  useEffect(() => {
    const getData = async () => {
      try{
        var res = await fetch(apiUrl(0));
        var data = await res.json();
        setEspooData(data);

        res = await fetch(apiUrl(1));
        data = await res.json();
        setJKLData(data);

        res = await fetch(apiUrl(2));
        data = await res.json();
        setKuopioData(data);

        res = await fetch(apiUrl(3));
        data = await res.json();
        setTampereData(data);

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [])

  /* 
  Boolean variables to signify if a city is shown. Same order as in locations array:
  0 : Espoo
  1 : Jyväskylä
  2 : Kuopio
  3 : Tampere
  True: city is shown. False: City is not shown. 
  */
  var [cityVisibility, setCityVisibility] = useState([
    true,
    true,
    true,
    true
  ]);

  /* Month names array */
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /* 
  Postfix for numbering. 1st, 2nd, 3rd, 4th... 
  Only understands low numbers.
  
  !!! --- FIX FOR NUMBERS UP TO 31 --- !!!
  
  */
  const postfix = (n) => {
    if(n === 1){
      return "st"
    }
    if(n === 2){
      return "nd"
    }
    if(n === 3){
      return "rd"
    }
    else{
      return "th"
    }
  }

  /* 
  Rain or snow volume. Server holds information only if there is precipitation.
  Check if the key exists. If true, get the data.
  Note: data cannot be accessed by snow['3']. Code does not understand a string starting with number. 
  */
  var PrecipitionValue = (data) => {
    var value = "0";
    if ("snow" in data){
      value = Object.values(data.snow)[0];
    }
    else{
      if ("rain" in data){
        value = Object.values(data.rain)[0];
      }
    }
    return Math.round(value);
  }

  /*
  Smaller infobox for 3-hour-segment weather data.
  data: a section of full city weather data form the point of eg. EspooData.list[i]
  addition: how much time is going forward from current time. (3, 6, 9, 12 and 15 hours)

  !!! --- SHOWING ONLY DAY ICONS. SWITCH TO NIGHT ICONS WHEN NIGHT. --- !!!
  https://openweathermap.org/weather-conditions

  */
  const hourlyIncrementBox = (data, addition) => {
    return(
      <div>
        <div className="increment">
          <div className="incrementTime">{d.getHours() + addition > 23 ? d.getHours() + addition - 24 : d.getHours() + addition}:00</div>
          <div><img src={"http://openweathermap.org/img/wn/" + data.weather[0].icon.substring(0,2) + "d.png"} alt="icon" /></div>
          <div className="incrementTemp">{Math.round(-273.15 + EspooData.list[0].main.temp)}<span>&#8451;</span></div>
        </div>
        <div className="incrementExtra">
          <div>{data.wind.speed} m/s</div>
          <div>{data.main.humidity} %</div>
          <div>{PrecipitionValue(data)} mm</div>
        </div>
      </div>
    );
  };

  /*
  Division of 5 small infoboxes for 3-hour weather segments.
  data: Access to city weather data. Eg. EspooData
  */
  const futureWeatherPredictions = (data) => {
    return(
      <div className="cityFuture">
        <div>
          {hourlyIncrementBox(data.list[1], 3)}
        </div>
        <div>
          {hourlyIncrementBox(data.list[2], 6)}
        </div>
        <div>
          {hourlyIncrementBox(data.list[3], 9)}
        </div>
        <div>
          {hourlyIncrementBox(data.list[4], 12)}
        </div>
        <div>
          {hourlyIncrementBox(data.list[5], 15)}
        </div>
      </div>
    );
  };

  /*
  Division for entire information of a city.
  visible: Controls if a city is shown. Should get data from cityVisibility useState.
  data: Weather data for the city. Should get data from EspooData, JKLData, KuopioData or TampereData.
  */
  const City = (visible, data) => {
    if(visible){
      return(
        <div className="city">
          <div className="cityNow">
            <div className="cityInfo">
              <div className="cityName">{data.city.name == "Jyvaskyla" ? "Jyväskylä" : data.city.name}</div>
              <div className="weatherDescription">{data.list[0].weather[0].description}</div>
            </div>
            <div className="cityInfoRight">
              <div className="temperature"><img src={"http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon.substring(0,2) + "d@2x.png"} alt="icon" /> <div>{Math.round(-273.15 + EspooData.list[0].main.temp)}<span>&#8451;</span></div></div>
            </div>
            <div className="cityInfo">
              <div className="date">{months[d.getMonth()]} {d.getDate()}{postfix(d.getDay())}</div>
              <div className="time">{d.getHours()}:{d.getMinutes()}</div>
            </div>
            <div className="cityInfoRight">
              <div className="extraWeatherInfo">
                Wind: {data.list[0].wind.speed} m/s<br></br>
                Humidity: {data.list[0].main.humidity} %<br></br>
                Precipitation (3h): {PrecipitionValue(data.list[0])} mm
              </div>
            </div>
          </div>
          {futureWeatherPredictions(data)}
        </div>
      )
    }
    
    else{
      return null;
    }
  }

  /*
  City selection button configurations. Sets visibilities according to buttons.
  */
  const AllButton = () => setCityVisibility([true, true, true, true]);
  const EspooButton = () => setCityVisibility([true, false, false, false]);
  const JKLButton = () => setCityVisibility([false, true, false, false]);
  const KuopioButton = () => setCityVisibility([false, false, true, false]);
  const TampereButton = () => setCityVisibility([false, false, false, true]);

  /*
  City dropdown menu with functional button that command city information viibility.
  */
  const CityMenu = () => {
    return(
      <div className="cityMenu">
        <div className="dropdownButton">
          <button type="button" className="dropdownButtonHeader" onClick={() => {AllButton()}}>Kaikki kaupungit</button>
          <div className="dropdownButtonArrow">▼</div>
        </div>
        <div className="dropdownContent">
          <button type="button" onClick={() => {EspooButton()}}>Espoo</button>
          <button type="button" onClick={() => {JKLButton()}}> Jyväskylä</button>
          <button type="button" onClick={() => {KuopioButton()}}> Kuopio</button>
          <button type="button" onClick={() => {TampereButton()}}> Tampere</button>
        </div>
      </div>
    )
  }

  /*
  Returns weather information only if the loading of weather data is done.
  */
  function Loading(){
    if(loading){
      return(
        <div>Loading...</div>
      )
    }

    else{
      return(
        <div className="app">
          <div className="header">Säätutka</div>
          <div className="content">
            {CityMenu()}
            {City(cityVisibility[0], EspooData)}
            {City(cityVisibility[1], JKLData)}
            {City(cityVisibility[2], KuopioData)}
            {City(cityVisibility[3], TampereData)}
          </div>
        </div>
      )
    }
  }

  /*
  Return information to index.js.
  */
  return (
    Loading()
  )
}

export default App;
