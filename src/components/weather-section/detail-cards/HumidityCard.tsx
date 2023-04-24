import * as React from 'react';
import CardContainer from './CardContainer';
import { GaugeMeter } from '@jason1642/react-dashboard-meter';

interface IHumidityCardProps {
    value:number;
    labels: any;
}
// 0 - 100% : good - normal - bad
const HumidityCard: React.FunctionComponent<IHumidityCardProps> = ({value, labels}) => {
  return (
    <CardContainer icon={'waterdroplet'} title={'Humidity'}>

    <div>
           <GaugeMeter 
        value={10}
        titleOptions={{appendedText: 'px'}}
        labelOptions={undefined}
        guageInnerAreaSize={80}
        range={[0, 40]}
    />
    </div>
 

    </CardContainer>
  );
};

export default HumidityCard;
