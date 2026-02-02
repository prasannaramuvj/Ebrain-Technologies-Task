
import './App.css'
import React, { useEffect } from 'react'
import searchs from './assets/download.png'
import { useState } from 'react'
import sunny from './assets/icon-sunny.webp'
import rainy from './assets/rainy.webp'
import humiditys from './assets/humidity.jpg'
import winds from './assets/wind.png'
import snow from './assets/snows.jpg'
import drizzle from './assets/drizzle.jpg'
 




const Weatherdetail = ({icon,temp,city,country,lat,log,humidity,wind})=>{
  return(
    <>
    <div className='image'>
      <img src={icon} alt="img" />
    </div>
    <div className='temp'> {temp} Celsius</div>
    <div className="city">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
      <div>
        <span className="lat">Latitude </span>
        <span>{lat}</span>
      </div>
      <div>
        <span className="log">Longitude </span>
        <span>{log}</span>
      </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humiditys} className="img" alt="humidity" />
          <div className="data">
            <div className="humitidy-percent">{humidity} %</div>
            <div className="text">humidity</div>
          </div>
        </div>
          <div className="element">
          <img src={winds}  className="img" alt="wind" />
          <div className="wind-percent">{wind} km/h</div>
          <div className="text">wind speed</div>
        </div>
      </div>
    </>
  )
}

function App() {
  const API_Key ="858832b267fb4d83783cc85b3a71871a";
  const[text,setText] = useState("chennai")

  const[icon,setIcon] = useState(sunny);
  const[temp,setTemp] = useState(0);
  const[city,setCity] = useState("");
  const[country,setCountry] = useState("");
  const[lat,setLat] = useState(0);
  const[log,setLog] = useState(0);
  const[humidity,setHumidity]=useState(0);
  const[wind,setWind]=useState(0);
  const[citynotfound,setCitynotfound] = useState(false);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState(null);

  const weatherIconMap = {
    "01d":sunny,
    "01n":sunny,
    "02d":drizzle,
    "02n":drizzle,
    "03d":drizzle,
    "03n":drizzle,
    "04d":rainy,
    "04n":rainy,
    "05d":rainy,
    "05n":rainy,
    "06d":snow,
    "06n":snow,
    "07d":snow,
    "10d":snow,
  }



  const search = async ()=>{
  setLoading(true);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_Key}&units=Metric`;

  try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    if(data.cod === "404"){
      console.log("city not found");
      setCitynotfound(true);
      setLoading(false);
      return;
    }

    setTemp(Math.floor(data.main.temp));
    setCity(data.name);
    setCountry(data.sys.country);
    setLat(data.coord.lat);
    setLog(data.coord.lon);
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    const weatherIconCode = data.weather[0].icon;
    setIcon(weatherIconMap[weatherIconCode] || sunny);
    setCitynotfound(false);
  }
  catch(error){
    console.log("error is",error.message);
    setError("Error occur while fetching data")

  }
  finally{
    setLoading(false)

  }
}
  

const handleText = (e)=>{
  setText(e.target.value)
}

const handlekeydown = (e)=>{
  if(e.key === "Enter"){
    search();
  }
}
  

useEffect(function(){
  search()
},[])

  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type="text" className='search' placeholder='search city' onChange={handleText} value={text}  onKeyDown={handlekeydown}/>
        <div className='search-icon' onClick={()=>search()}>
            <img src={searchs} alt="search-img" />
        </div>
        </div>
        {!loading && !citynotfound && <Weatherdetail icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind}/>}
       {loading && <div className="loading-message">...Loading</div> }
        {error && <div className="error-message">{error}</div>}
        {citynotfound && <div className="city-not-message">City not Found</div>}
        <div className="copyright">
        <p>Designed By <span>R.Prasanna</span></p>
      </div>
      </div>
    
    </>
  )
}

export default App
