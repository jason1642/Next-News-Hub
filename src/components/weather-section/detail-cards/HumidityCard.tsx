import * as React from 'react';
import CardContainer from './CardContainer';
import PercentFillMeter from './percent-fill-meter/PercentFillMeter';

interface IHumidityCardProps {
    value:number;
}
// 0 - 100% : good - normal - bad
const HumidityCard: React.FunctionComponent<IHumidityCardProps> = ({value, labels}) => {
  return (
    <CardContainer icon={'waterdroplet'} title={'Humidity'}>



        {value}% 


    <PercentFillMeter 
        value={82}
        title={'Degrees'}
    />

    </CardContainer>
  );
};

export default HumidityCard;
