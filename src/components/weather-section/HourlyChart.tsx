import * as React from 'react';
import { LineChart,  ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, CartesianAxis } from 'recharts';
import _ from 'lodash'

interface IHourlyChartProps {
    weatherData: any;
    
}


const RenderTickIcon = ({ x, y, payload }: any)=>{
    // console.log(payload)
    return <g 
    style={{margin: '0 auto'}}
    transform={`translate(${x - 20},${y - 40})`}
    >
        <image
            xlinkHref={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${payload.value}.png`}
            height="30px"
            // width="44px"
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
    // console.log(hourlyWeatherData)
  }, [hourlyWeatherData]);

  return (
      <div className='rounded-xl bg-blue-400' style={{ margin: '0 auto', marginLeft:'1rem', display:'flex', padding: '20px',color:'white'}}>
          {hourlyWeatherData &&

              <AreaChart
                  width={700}
                  height={250}
                  data={hourlyWeatherData}
                  margin={{
                    right: 30
                  }}
              >

                  <CartesianGrid stroke={'#666'} horizontal={false} />

                  <Area hide={true} xAxisId={1} type="natural" dataKey="temp" stroke="#8884d8" />
                  <XAxis
                      interval={0}
                      // allowDuplicatedCategory={true} 
                    //   allowDataOverflow={true}
                      xAxisId={1}
                      tickLine={false}
                      type='category'
                      axisLine={false}
                      tickFormatter={(val) => `${val}\u00b0`}
                      dataKey={'temp'}
                      orientation='top'
                      tick={{ fontSize: '1.1rem', fill:'white'}}
                  />

                  <Area xAxisId={2} type="natural" dataKey="temp" stroke="#8884d8" />
                  <XAxis
                      interval={0}
                      tick={<RenderTickIcon />}
                      height={50}
                      // width={10}
                    //   allowDuplicatedCategory={true}
                    //   allowDataOverflow={true}
                      xAxisId={2}
                      tickLine={false}
                      // type='category' 

                      axisLine={false}
                      //   tickFormatter={(val)=>`${val}`}
                      dataKey={'icon'}
                      orientation='top'
                  />






                  <Area hide={true} xAxisId={3} type="natural" dataKey="condition"  stroke="#8884d8" />
                  <XAxis
                    //   allowDuplicatedCategory={true}
                    //   allowDataOverflow={true}
                    // hide
              
                      type="category"
                      xAxisId={3}
                      tickLine={false}
                      axisLine={false}
                      dataKey="dateTime"
                      orientation='top'
                      tick={{ fontSize: '.9rem', fill:'white'}}
                      style={{color:'white'}}
                      interval={0}
                  />





                  <CartesianAxis stroke="#060606" />




                  <YAxis
                      axisLine={false}
                      allowDecimals={false}
                      tick={false}
                    //   width={30}
                    //   hide
                    //   type='number'
                      domain={['dataMin - 6', 'dataMax + 6']}
                  />
                  <Tooltip />
              </AreaChart>
          }
      </div>
  );
};


export default HourlyChart;