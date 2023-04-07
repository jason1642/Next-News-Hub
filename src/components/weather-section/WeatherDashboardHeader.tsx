import * as React from 'react';

interface IWeatherDashboardHeaderProps {
  weatherData: any;
  location: string;
}

const WeatherDashboardHeader: React.FunctionComponent<IWeatherDashboardHeaderProps> = ({weatherData, location}) => {
  const {
    locations:{
      [location]:{ 
        address
      }
    }
  } = weatherData;  
  console.log(weatherData)
  return (
    <div className=''>
        Hourly Weather - {address.split(',')[0]} As of 9:14 pm EDT
        
    </div>
  );
};

export default WeatherDashboardHeader;
