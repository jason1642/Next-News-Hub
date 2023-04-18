import * as React from 'react';
import CardContainer from './CardContainer';

interface IHumidityCardProps {
    value:number;
}

const HumidityCard: React.FunctionComponent<IHumidityCardProps> = ({value}) => {
  return (
    <CardContainer icon={'waterdroplet'} title={'Humidity'}>
        {value}
    </CardContainer>
  );
};

export default HumidityCard;
