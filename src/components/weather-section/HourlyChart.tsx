import * as React from 'react';
import { ApexOptions } from "apexcharts";
import { LineChart,  ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, CartesianAxis } from 'recharts';
import ClearDay from './weather-icons/clear-day.svg'
import _ from 'lodash'

interface IHourlyChartProps {
    weatherData: any;
    
}
const options: ApexOptions = {
    
    chart: {
        toolbar: {
          show: false  
        },
        zoom: {
            enabled: false,
        },
        sparkline: {
            enabled: false
        },
        id: "hourly-weather-data-area-chart",
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 500, 
            animateGradually: {
                enabled: true,
                delay: 100
            },
            dynamicAnimation: {
                enabled: true,
                speed: 300
            }
        },
    
    },

//     subtitle:{
// text: 'qweqweqweqw'
// },
    xaxis: {
        position: 'top',
        tooltip:{
            enabled: true,
            style: {
                fontSize: '.6rem'
            }
        },
      
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        labels:{
            style: {
                colors:'black',
                fontSize: '.5rem',
            },
            hideOverlappingLabels: true,
            rotate: 0,
            showDuplicates: false,
            // Date ontop of x axis
            formatter: val =>val
        }
    },
    dataLabels: {
        enabled: true,
        
        textAnchor: 'end',
        // offsetY: -10,
        style:{ 
            colors: ['black'],
            fontWeight: 'lighter'
        },
        background: {
            enabled: false
        },
        formatter: (val)=>`${val}`
    },
    yaxis: {
        min: (min)=>min - 4,
        max: (max)=>max + 4,
        labels:{
            show: false,
            style:{
                colors: 'black',
            },
        },
        tooltip: {
            enabled: false,
        },
        decimalsInFloat: 0
    },
    stroke: {
        show: true,
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,      
    },
 
    
       markers: {
        size: 0,
        colors: ['#255aee', '#26cb8a'],
        // strokeColors: '#000000',
        strokeWidth: 0,
        strokeOpacity: 0,
        strokeDashArray: 0,
        fillOpacity: 0,
        discrete: [],
        shape: "circle",
        radius: 4,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 2
        }, 
    },
    grid: {
        borderColor: '#bababa3b',
        position: 'back',
        xaxis: {
            lines: {
                show: true
            }
        },   
        yaxis: {
            lines: {
                show: false
            }
        },  
 
        column: {
            colors: undefined,
            opacity: 0.5
        },  

    }


}

const RenderTickIcon = ({ x, y, payload }: any)=>{
    console.log(x, y, payload)
    // return <svg style={{height: 50, width: 50, color:'black', backgroundColor: 'black'}}href={"https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/4th%20Set%20-%20Color/clear-day.svg"}/>
    return <div>{payload.value}</div>
}

// ()=><img height={50} width={50} src='https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/4th%20Set%20-%20Color/rain-snow.png'/>
const HourlyChart: React.FunctionComponent<IHourlyChartProps> = ({weatherData}) => {

    const hourlyWeatherData = React.useMemo(()=>{
        weatherData?.values.splice(0,1, weatherData.currentConditions)
        return weatherData?.values.map((item:any)=>({
            dateTime: Intl.DateTimeFormat('en', {hour: 'numeric', }).format(new Date(item.datetimeStr || item.datetime)),
            temp: item.temp,
            condition: item.conditions || item.icon,
            humidity: item.humidity,
            precipitation: item.precip,
            cloudCover: item.cloudcover,
            visibility: item.visibility
        }))
        },[weatherData])

  React.useEffect(() => {
    console.log(hourlyWeatherData)
  }, [hourlyWeatherData]);

  return (
    <div>
{ hourlyWeatherData && 
    //   <ResponsiveContainer width="100%" height="100%">

<AreaChart width={620} height={500} data={hourlyWeatherData} >



<Area xAxisId={1}  type="natural" dataKey="condition" stroke="#8884d8" />
    <XAxis
    tickCount={10}
      
      allowDuplicatedCategory={true} 
      allowDataOverflow={true} 
      xAxisId={1}
      tickLine={false}  
      type='category' 
      axisLine={false}
      tickFormatter={(val)=>`${val}\u00b0`}
      dataKey={'temp'} 
      orientation='top'
      tick={{fontSize: '1.2rem',}} 
     />
<Area xAxisId={2}  type="natural" dataKey="condition" stroke="#8884d8" />

<XAxis
    tickCount={10}
    // tick={RenderTickIcon }

      allowDuplicatedCategory={true} 
      allowDataOverflow={true} 
      xAxisId={2}
      tickLine={false}  
      type='category' 
      axisLine={false}
    //   tickFormatter={(val)=>`${val}`}
      dataKey={'condition'} 
      orientation='top'
     />






<Area xAxisId={3} label={{fontSize: '15px'}} type="natural" dataKey="temp" stroke="#8884d8" />
    <XAxis
    allowDuplicatedCategory={true} 
    allowDataOverflow={true} 
     xAxisId={3} 
     tickLine={false}
     axisLine={false} 
     dataKey="dateTime"
     orientation='top'  
     tick={{fontSize: '1.2rem',}} 

      />





    <CartesianAxis stroke="#060606"  />




    <YAxis hide={true} allowDecimals={false} tick={{fontSize: '.8rem'}} type='number' domain={['dataMin - 6', 'dataMax + 6']}/>
    <Tooltip />
  </AreaChart>
//   </ResponsiveContainer>
  }
        {/* <Chart
        style={{color: 'black'}}
            options={{
                ...options,
                 series: hourlyWeatherData.series,
                xaxis: {
                    ...options.xaxis,
                    categories: hourlyWeatherData.categories,                    
                },
                tooltip: {
                    enabled: true,
                    shared: false,
                    followCursor: true,
                    // theme: 'dark',
                    x: {
                        show: false
                      },
                      y: {
                        
                      },
                      custom: ({series, seriesIndex, dataPointIndex})=>{
                        console.log(series, seriesIndex, dataPointIndex)
                        return `<div class='p-1 text-xs'>
                            <p class='font-extralight'>Condition: ${_.capitalize(weatherData.values[dataPointIndex].conditions)}</p>
                            <p class='font-extralight'>Humidity: ${weatherData.values[dataPointIndex].humidity}</p>
                            <p class='font-extralight'>Precipitation: ${weatherData.values[dataPointIndex].precip}</p>

                            <p class='font-extralight'>Visibility: ${weatherData.values[dataPointIndex].visibility}</p>

                        </div>`
                      }

                
                },
            }}
            type="area"

            series={hourlyWeatherData.series}
            width="500"
            /> */}
            </div>
  );
};


export default HourlyChart;