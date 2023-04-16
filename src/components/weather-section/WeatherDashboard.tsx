import * as React from 'react';
import HourlyChart from './HourlyChart';

interface IWeatherDashboardProps {
  weatherData: any;
  location: string;
}

const WeatherDashboard: React.FunctionComponent<IWeatherDashboardProps> = ({weatherData}) => {
  return (
    <div className='border basis-2/3 bg-blue-100 p-4'>


        Heres a chart
        {/* Header */}
        <div className=''>
            Welcome Back User!
        </div>
        {/* Weather line graph */}
        {/* Table of hourly weather information, sectioned by days */}
       <HourlyChart weatherData={weatherData}/>









    </div>
  );
};

export default WeatherDashboard;
