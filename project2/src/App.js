import './App.css';
import React, { useState } from 'react'
import Input from './components/Input';
import MainWeather from './components/MainWeather';

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({})

  const api = {
    key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];

    return `${day}`
  }

  return (
    <div className="App">
      <Input query={query} setQuery={setQuery} search={search} />
      <MainWeather weather={weather} setWeather={setWeather} dateBuilder={dateBuilder} />
    </div>
  );
}

export default App;
