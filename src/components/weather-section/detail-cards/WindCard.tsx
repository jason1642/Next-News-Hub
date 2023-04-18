import * as React from 'react';
import CardContainer from './CardContainer';
interface IWindCardProps {
    
  
    value: number;
}

const WindCard: React.FunctionComponent<IWindCardProps> = ({value}) => {
  return (
    <CardContainer icon={'windy'} title={'Wind'}>
        {value}
    </CardContainer>
  );
};

export default WindCard;
