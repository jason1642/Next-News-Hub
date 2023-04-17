import * as React from 'react';
import { LineChart,  ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, CartesianAxis } from 'recharts';
import _ from 'lodash'

interface IHourlyChartProps {
    weatherData: any;
    
}


const RenderTickIcon = ({ x, y, payload }: any)=>{
    console.log(payload)
    return <g transform={`translate(${x},${y - 40})`}>
        <image
            xlinkHref={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${payload.value}.png`}
            height="23px"
            width="44px"
        />
    </g>
}

const HourlyChart: React.FunctionComponent<IHourlyChartProps> = ({weatherData}) => {

    const hourlyWeatherData = React.useMemo(() => {
        weatherData?.values.splice(0, 1)
        return weatherData?.values.map((item: any) => ({
            dateTime: Intl.DateTimeFormat('en', { hour: 'numeric', }).format(new Date(item.datetimeStr || item.datetime)),
            temp: item.temp,
            condition: item.conditions || item.icon,
            humidity: item.humidity,
            precipitation: item.precip,
            cloudCover: item.cloudcover,
            visibility: item.visibility,
            icon: item.icon
        }))
    }, [weatherData])

  React.useEffect(() => {
    console.log(hourlyWeatherData)
  }, [hourlyWeatherData]);

  return (
    <div>
        { hourlyWeatherData && 

        <AreaChart 
        width={700} 
        height={250}
        data={hourlyWeatherData}
         >

            <CartesianGrid stroke={'#666'} horizontal={false}/>

            <Area xAxisId={1}  type="natural" dataKey="tempo" stroke="#8884d8" />
            <XAxis
                tickCount={9}
                interval={0}
                // allowDuplicatedCategory={true} 
                allowDataOverflow={true} 
                xAxisId={1}
                tickLine={false}  
                type='category' 
                axisLine={false}
                tickFormatter={(val)=>`${val}\u00b0`}
                dataKey={'temp'} 
                orientation='top'
                tick={{fontSize: '1.1rem',}} 
                />

            <Area xAxisId={2} type="natural" dataKey="temp" stroke="#8884d8" />
                <XAxis
                interval={0}
                tickCount={9}
                tick={<RenderTickIcon/>}
                height={60}
                // width={10}
                allowDuplicatedCategory={true} 
                allowDataOverflow={true} 
                xAxisId={2}
                tickLine={false}  
                // type='category' 
                axisLine={false}
            //   tickFormatter={(val)=>`${val}`}
                dataKey={'icon'} 
                orientation='top'
                />






        <Area xAxisId={3} type="natural" dataKey="condition" stroke="#8884d8" />
            <XAxis
            allowDuplicatedCategory={true} 
            allowDataOverflow={true} 
            type="category"
            xAxisId={3} 
            tickLine={false}
            axisLine={false} 
            dataKey="dateTime"
            orientation='top'  
            tick={{fontSize: '1.2rem',}} 
            interval={0}
            />





            <CartesianAxis stroke="#060606"  />




            <YAxis hide={true} allowDecimals={false} tick={{fontSize: '.8rem'}} type='number' domain={['dataMin - 6', 'dataMax + 6']}/>
            <Tooltip />
        </AreaChart>
        }
    </div>
  );
};


export default HourlyChart;