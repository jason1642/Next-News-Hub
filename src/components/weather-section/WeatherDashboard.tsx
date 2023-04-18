import * as React from 'react';
import HourlyChart from './HourlyChart';
import _ from 'lodash'
interface IWeatherDashboardProps {
  weatherData: any;
  location: string;
}

const WeatherDashboard: React.FunctionComponent<IWeatherDashboardProps> = ({weatherData, location}) => {
  return (
    <div className='border rounded-r-xl basis-2/3 bg-blue-100 p-4'>


    
        {/* Header */}
        <div className=''>
            Currently displaying the weather for {_.startCase(location.split(',')[0])}
        </div>
        {/* Weather line graph */}
        {/* Table of hourly weather information, sectioned by days */}
       <HourlyChart weatherData={weatherData}/>









    </div>
  );
};

export default WeatherDashboard;
