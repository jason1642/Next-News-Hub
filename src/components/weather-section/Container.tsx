import * as React from 'react';
import Header from './WeatherDashboardHeader';
import { getVisualCrossingWeatherApiData } from '@/api-helpers/weather-api-requests'

interface IWeatherDashboardContainerProps {
}

const WeatherDashboardContainer: React.FunctionComponent<IWeatherDashboardContainerProps> = () => {
    
    const [weatherData, setWeatherData] = React.useState<any>()
    const [location, setLocation ] = React.useState<string>()
    React.useEffect(()=>{
        getVisualCrossingWeatherApiData().then((res: any)=> {
            console.log(res)
            setWeatherData(res.data)
            setLocation(res.config.params.location)
          }).catch((err: any)=> {
            console.log(err)
          })  
    },[])
    return (
    <div className='flex flex-col border w-full'>
        {weatherData && location &&
            <Header location={location} weatherData={weatherData}/>
        }
        Container
        {/* Weather line graph */}
        {/* Table of hourly weather information, sectioned by days */}
    </div>
  );
};

export default WeatherDashboardContainer;
