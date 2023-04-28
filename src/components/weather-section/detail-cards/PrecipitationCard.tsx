import * as React from 'react';
import CardContainer from './CardContainer';

interface IPrecipitationCardProps {

    value: number;
}

const PrecipitationCard: React.FunctionComponent<IPrecipitationCardProps> = ({value}) => {
    console.log(value)

  return (
    <CardContainer Icon={undefined} title={'Precipitation'}>

        {value + 12452}qweqw

    </CardContainer>
  );
};

export default PrecipitationCard;
