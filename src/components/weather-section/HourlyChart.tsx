import * as React from 'react';
import Chart from "react-apexcharts";


interface IHourlyChartProps {
    weatherData: any;
    
}



const HourlyChart: React.FunctionComponent<IHourlyChartProps> = ({weatherData}) => {

    const [hourlyWeatherData, setHourlyWeatherData] = React.useState({
    options: {
      chart: {
        id: "hourly-weather-data-area-chart"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })
  return (
    <div>
    <Chart
              options={hourlyWeatherData}
              series={hourlyWeatherData.series}
              type="area"
              width="500"
            />
    </div>
  );
};

export default HourlyChart;
