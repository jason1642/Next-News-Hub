import * as React from 'react';
import { Rain } from 'react-rainfall';
import _ from 'lodash'

interface IBasicDataPanelProps {
    weatherData: any;
    location: string;
}

const BasicDataPanel: React.FunctionComponent<IBasicDataPanelProps> = ({weatherData, location}) => {
    const { address, currentConditions: { datetime, temp, icon } } = weatherData;  
      // console.log(weatherData)

      return (
        <div
          style={
            {
              backgroundImage: 'linear-gradient(#85adde, #3c96fd)',
              // backgroundColor: '#5c9ce7'
              
            }
          }
        className='rounded-l-xl basis-2/12 relative p-4 font-light text-white'>
          <Rain
          dropletOpacity={1}
            dropletColor='rgb(255, 255, 255)'
          />
           {/* Location + sunrise */}
            <div className='flex justify-between'>
                <span className='text-sm'>{address.split(',')[0]}</span>
                <span className='text-xs'>7:19 am</span>
                </div>

        <div className='flex text-sm justify-between'>
            <span className='text-xs font-extralight'>Today {Intl.DateTimeFormat('en', { hour: "numeric", minute: "numeric", hour12: true }).format(new Date(datetime))} EST</span>
            <span className='text-xs'>8:06 pm</span>
       </div>



          <div className='mt-6'>
                   <h3 className='font-extralight text-4xl text-center'>{address.split(',')[0]}</h3>
            <p className='font-extralight text-7xl text-center'>{Math.round(temp)}&deg;</p>
            <p className={'text-center font-extralight text-xl'}>{_.capitalize(icon.split('-').join(' '))}</p>
          </div>
     
            {/* <canvas id="canvas" style={{position : 'absolute', top: '0px', left : '0px'}}></canvas>
<script type="text/javascript" src="http://sheepeuh.com/rain/dat.gui.js"></script>
<div style={{position : 'absolute', bottom : '0px', left : '0px', margin : '20px', padding : '5px', backgroundColor:'#ce3635'}}>
</div> */}
            {/* Location, sunrise/sunset times w/icons */}
            {/* 'As of' Date */}
            {/* Temperature with condition(ex:Sunny w/icon) */}
            
        </div>
      );
};

export default BasicDataPanel;
