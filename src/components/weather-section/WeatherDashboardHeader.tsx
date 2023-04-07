import * as React from 'react';

interface IWeatherDashboardHeaderProps {
}

const WeatherDashboardHeader: React.FunctionComponent<IWeatherDashboardHeaderProps> = (props) => {
  return (
    <div className=''>
        Hourly Weather - Brooklyn, NY
        As of 9:14 pm EDT
        
    </div>
  );
};

export default WeatherDashboardHeader;
