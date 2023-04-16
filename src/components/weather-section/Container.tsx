import * as React from 'react';
import { getVisualCrossingWeatherApiData } from '@/api-helpers/weather-api-requests'
import BasicDataPanel from './BasicDataPanel';
import WeatherDashboard from './WeatherDashboard';

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
    <div className='flex w-full min-w-[700px] bg-blue-400 rounded-xl'>
        {weatherData && location &&<>
            <BasicDataPanel location={location} weatherData={weatherData}/>
            <WeatherDashboard />
            </>
        }

    </div>
  );
};

export default WeatherDashboardContainer;
