import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React,{useState} from 'react';
function App() {
  const [data,setData]= useState({});
  const[Location,setLocation]=useState("")
  const url=(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=imperial&appid=dbd0f72e76536d6fe1c8db545acf2b4c`)
  const searchLocation = (event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
    })
    }
  }
  return (
    <div className="app">
      <div className='search'>
        <input type='text'onChange={event=>setLocation(event.target.value)} placeholder='enter the location' 
        onKeyUp = {(event)=>searchLocation(event)}/>
      </div>
   <div className='container'>
    <div className='top'>
      <div className='location'>
        <p>{data.name}</p>
      </div>
      <div className='temp'>
        {data.main?<h1>{data.main.temp.toFixed()}°F</h1>:null}
      </div>
      <div className='description'>
       {data.weather?<p>{data.weather[0].main}</p>:null}
      </div>
    </div>
    {data.name != undefined &&
    <div className='bottom'>
    <div className='feels'>
      {data.main?<p className='bold'>{data.main.feels_like.toFixed()}°</p>:null}
      <p>feels Like</p>
    </div>
    <div className='humidity'>
      {data.main?<p className='bold'>{data.main.humidity}%</p>:null}
      <p>humidity</p>
    </div>
    <div className='wind'>
      {data.wind?<p>{data.wind.speed.toFixed()} mph</p>:null}
      <p>wind speed</p>
    </div>
  </div>}
   </div>
    </div>
  );
}

export default App;
