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
              datetime, temp
            }
          }
        }
      } = weatherData;  
      console.log(weatherData)
      return (
        <div className='rounded-xl basis-1/3 p-4 font-light text-white bg-blue-400'>
           {/* Location + sunrise */}
            {/* <div className='flex justify-between'>
                <span className='text-md'>{address.split(',')[0]}</span>
                <span className='text-sm'>7:19 am</span>
                </div>

        <div className='flex text-sm justify-between'>
            <span className='text-md font-extralight'>Today {Intl.DateTimeFormat('en', { hour: "numeric", minute: "numeric", hour12: true }).format(new Date(datetime))} EST</span>
            <span className='text-xsm'>8:06 pm</span>
       </div> */}
            <h3 className='font-extralight text-4xl text-center'>{address.split(',')[0]}</h3>
            <p className='font-extralight text-6xl text-center'>{Math.round(temp)}&deg;</p>

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
