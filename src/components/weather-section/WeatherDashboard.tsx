import * as React from 'react';

interface IWeatherDashboardProps {
}

const WeatherDashboard: React.FunctionComponent<IWeatherDashboardProps> = (props) => {
  return (
    <div className='border basis-2/3 bg-blue-100 p-4'>
        Heres a chart
        {/* Header */}
        <div className=''>
            Welcome Back User!
        </div>
        {/* Weather line graph */}
        {/* Table of hourly weather information, sectioned by days */}
        <div>Second section with more chars and graphs</div>
    </div>
  );
};

export default WeatherDashboard;
