import * as React from 'react';
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";


interface IHourlyChartProps {
    weatherData: any;
    
}
const options: ApexOptions = {
    
    chart: {
        toolbar: {
          show: false  
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
    xaxis: {
        position: 'top',
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        labels:{
            style: {
                colors:'black'
            },
            hideOverlappingLabels: true,
            rotate: 0,
            showDuplicates: false,
        }
    },
    yaxis: {
        labels:{
            style:{
                colors: 'black',
            },
            
        },
        decimalsInFloat: 0
    },
    
    
       tooltip: {
        followCursor: true,
        // theme: 'dark',
    
    
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
        size: 1,
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
        // xaxis: {
        //     lines: {
        //         show: true
        //     }
        // },   
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
        console.log(weatherData?.values[0].datetimeStr.split('-04:00')[0])
        const seriesTemp = weatherData?.values.map((item: any)=> item.temp) 
        const dateCategories = weatherData?.values.map((itemx:any)=>Intl.DateTimeFormat('en', {hour: '2-digit', }).format(itemx.datetime))
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
                    categories: hourlyWeatherData.categories
                }
            }}

            series={hourlyWeatherData.series}
            type="area"
            width="500"
        />
    </div>
  );
};

export default HourlyChart;
