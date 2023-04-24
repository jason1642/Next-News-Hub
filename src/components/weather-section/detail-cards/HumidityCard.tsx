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


    <GaugeMeter 
        value={10}
        titleOptions={{appendedText: 'px'}}
        labelOptions={{}}
        guageInnerAreaSize={80}
        range={[0, 40]}
    />

    </CardContainer>
  );
};

export default HumidityCard;
