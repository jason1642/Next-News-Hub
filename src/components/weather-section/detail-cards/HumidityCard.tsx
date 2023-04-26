import * as React from 'react';
import CardContainer from './CardContainer';

interface IHumidityCardProps {
    value:number;
    labels: any;
}
// 0 - 100% : good - normal - bad
const HumidityCard: React.FunctionComponent<IHumidityCardProps> = ({value, labels}) => {
  return (
    <CardContainer icon={'waterdroplet'} title={'Humidity'}>

  
    
   
 

    </CardContainer>
  );
};

export default HumidityCard;
