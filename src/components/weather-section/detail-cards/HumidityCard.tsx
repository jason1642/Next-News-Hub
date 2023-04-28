import * as React from 'react';
import CardContainer from './CardContainer';

interface IHumidityCardProps {
    value:number;
}
// 0 - 100% : good - normal - bad
const HumidityCard: React.FunctionComponent<IHumidityCardProps> = ({value,}) => {
    
    return (
    <CardContainer Icon={undefined} title={'Humidity'}>

    {value}
    
    </CardContainer>
  );
};

export default HumidityCard;
