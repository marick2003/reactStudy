import React, { useState, useEffect } from 'react';

const Weather=()=>{
    // STEP 2：定義會使用到的資料狀態
  const [currentWeather, setCurrentWeather] = useState({
    observationTime: '2019-10-02 22:10:00',
    locationName: '臺北市',
    description: '多雲時晴',
    temperature: 27.5,
    windSpeed: 0.3,
    humid: 0.88,
  });
    useEffect(()=>{
        console.log('execute function in useEffect');


    },[]);
    return (
      <div className="container">
        <div className="weather-card">
          <h1>Weather</h1>
        </div>
      </div>
    );

}

export default Weather;