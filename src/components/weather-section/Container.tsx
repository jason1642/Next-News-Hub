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
            const tempLocation = res.config.params.location
            // console.log(res)
            res.data.locations[tempLocation].values.splice(9)
            setWeatherData(res.data.locations[tempLocation])
            setLocation(tempLocation)
          }).catch((err: any)=> {
            console.log(err)
          })  

    },[])

    return (
    <div className='flex w-full max-w-screen-lg	 min-w-[700px] bg-blue-400 rounded-xl'>
        {weatherData && location && <>
            <BasicDataPanel location={location} weatherData={weatherData}/>
            <WeatherDashboard location={location} weatherData={weatherData}/>
            </>
        }

    </div>
  );
};

export default WeatherDashboardContainer;
