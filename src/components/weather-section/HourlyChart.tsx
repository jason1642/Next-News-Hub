import * as React from 'react';
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
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
            formatter: val => val
        }
    },
    yaxis: {
        min: (min)=>min - 4,
        max: (max)=>max + 4,
        labels:{
            style:{
                colors: 'black',
            },
            
        },
        tooltip: {
            enabled: true,
           
        },
        decimalsInFloat: 0
    },
    
    
  
    stroke: {
        show: true,
        // curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,      
    },
    theme: {
        // mode: 'dark', 
        // palette: 'palette1', 
        // monochrome: {
        //     enabled: false,
        //     color: '#255aee',
        //     shadeTo: 'dark',
        //     shadeIntensity: 0.65
        // },
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
        // show: true,
        borderColor: '#bababa3b',
        // strokeDashArray: 0,
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
        // row: {
        //     colors: undefined,
        //     opacity: 0.5
        // },  
        column: {
            colors: undefined,
            opacity: 0.5
        },  
        // padding: {
        //     top: 0,
        //     right: 0,
        //     bottom: 0,
        //     left: 0
        // },  
    }






}


const HourlyChart: React.FunctionComponent<IHourlyChartProps> = ({weatherData}) => {

    const hourlyWeatherData = React.useMemo(()=>{
        const seriesTemp = weatherData?.values.map((item: any)=> item.temp) 
        const dateCategories = weatherData?.values.map((itemx:any)=>Intl.DateTimeFormat('en', {hour: 'numeric', }).format(itemx.datetime))
        return ({
            categories: dateCategories,
            series: [{
            name: 'Temperature',
            data: seriesTemp
        }]})
        },[weatherData])

  React.useEffect(() => {
    console.log(hourlyWeatherData)
  }, [hourlyWeatherData]);

  return (
    <div>
        <Chart
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
            />
            </div>
  );
};


export default HourlyChart;