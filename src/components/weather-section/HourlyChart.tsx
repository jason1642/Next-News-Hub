import * as React from 'react';

import Chart from "react-apexcharts";


interface IHourlyChartProps {
    weatherData: any;
    
}
const options = {
    options: {
    chart: {
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
    // xaxis: {
    //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],

    // }
    
    
    
       tooltip: {
        followCursor: true,
        theme: 'dark',
    
    
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
        mode: 'dark', 
        palette: 'palette1', 
        monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'dark',
            shadeIntensity: 0.65
        },
    },
    
       markers: {
        size: 3,
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
        }
    }

    }








}


const HourlyChart: React.FunctionComponent<IHourlyChartProps> = ({weatherData}) => {

    const hourlyWeatherData = React.useMemo(()=>{
        const hourlyValues = weatherData?.values.map((item: any)=> item.temp) 
        return ([{
            name: 'Temperature',
            data: hourlyValues
        }])
        },[weatherData])

  React.useEffect(() => {
    console.log(hourlyWeatherData)
  }, [hourlyWeatherData]);

  return (
    <div>
        <Chart
            options={{...options, series: hourlyWeatherData}}

            series={hourlyWeatherData}
            type="area"
            width="500"
        />
    </div>
  );
};

export default HourlyChart;
