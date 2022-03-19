import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';

function localization () {
  const [lat, setLat] = useState(false);
  const [lon, setLon] = useState(false);
  const activity = useState(false);
  const weather = useState(false); 
  

  onClickGeo = (lat,lon) => {
    setLat(lat)
    setLon(lon)
  }

  const getActivies = async (lat, long) => {
    const response = await
  axios.get("https://raw.githubusercontent.com/probono-digital/DesafioTecnico/main/MOCK_DATA.json",)
  getActivies(response.data)

  }

  const getWeather = async (lat, long) => {
    const response = await
  axios.get("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={a805f9af1b44dfbf238efc5038aa2c2b}",)
  getWeather(response.data)

  }

   useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [lat,lon])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getActivies();
      setActivity(true)
    })
  }, [])

  [weather].map(({lat,lon}) => <Button onClick = {() => onClickGeo(lat,lon)} />)

  activies.filter(() => {}).map(() => {
    'FILTROS'
  })
  
}


export default localization