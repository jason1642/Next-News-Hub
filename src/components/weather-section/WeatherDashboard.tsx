import * as React from 'react';

interface IWeatherDashboardProps {
}

const WeatherDashboard: React.FunctionComponent<IWeatherDashboardProps> = (props) => {
  return (
    <div className='border basis-2/3'>
        Heres a chart

        {/* Weather line graph */}
        {/* Table of hourly weather information, sectioned by days */}
        <div>Second section with more chars and graphs</div>
    </div>
  );
};

export default WeatherDashboard;
