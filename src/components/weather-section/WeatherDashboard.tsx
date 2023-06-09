import * as React from 'react';
import HourlyChart from './HourlyChart';
import _ from 'lodash'
import HumidityCard from './detail-cards/HumidityCard';
import WindCard from './detail-cards/WindCard';
import PrecipitationCard from './detail-cards/PrecipitationCard';
interface IWeatherDashboardProps {
  weatherData: any;
  location: string;
}

const WeatherDashboard: React.FunctionComponent<IWeatherDashboardProps> = ({weatherData, location}) => {
  console.log(weatherData.currentConditions.wspd)
  const {humidity, precip, wspd}  = weatherData.currentConditions
  return (
    <div className='border grow rounded-r-xl basis-2/3 bg-blue-100 p-4'>


    
        {/* Header */}
        <div className='py-2 text-xl font-light'>
            Currently displaying the weather for {_.startCase(location.split(',')[0])}
        </div>
        {/* Weather line graph */}
        {/* Table of hourly weather information, sectioned by days */}
       <HourlyChart weatherData={weatherData}/>

    <div className='mt-5 text-lg font-light'>
      More details of today's weather
    </div>
  <div className='p-4 w-full flex justify-between'>
          {/* Bento Card Details Section*/}

      <HumidityCard value={humidity}/>
      <WindCard value={wspd}/>
      <PrecipitationCard value={precip}/>
    </div>
    
    </div>
  );
};

export default WeatherDashboard;
