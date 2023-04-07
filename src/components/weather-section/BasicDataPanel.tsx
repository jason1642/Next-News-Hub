import * as React from 'react';

interface IBasicDataPanelProps {
    weatherData: any;
    location: string;
}

const BasicDataPanel: React.FunctionComponent<IBasicDataPanelProps> = ({weatherData, location}) => {
    const {
        locations:{
          [location]:{ 
            address,
            currentConditions:{
              datetime
            }
          }
        }
      } = weatherData;  
      console.log(weatherData)
      return (
        <div className='border basis-1/3'>
            Hourly Weather - {address.split(',')[0]} As of  {Intl.DateTimeFormat('en', { hour: "numeric", minute: "numeric", hour12: true }).format(new Date(datetime))} EST
            
        </div>
      );
};

export default BasicDataPanel;
