import * as React from 'react';
import CardContainer from './CardContainer';

interface IPrecipitationCardProps {

    value: number;
}

const PrecipitationCard: React.FunctionComponent<IPrecipitationCardProps> = ({value}) => {


  return (
    <CardContainer Icon={undefined} title={'Precipitation'}>

        {value}

    </CardContainer>
  );
};

export default PrecipitationCard;
