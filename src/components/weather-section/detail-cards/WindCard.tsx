import * as React from 'react';
import CardContainer from './CardContainer';
import styled from 'styled-components';
import { GaugeMeter } from '@jason1642/react-dashboard-meter';

interface IWindCardProps {
    
    value: number;
}

const WindCard: React.FunctionComponent<IWindCardProps> = ({value}) => {
    console.log(value)
    return (
    <CardContainer icon={'windy'} title={'Wind'}>
        {value}

        <GaugeMeter 
        value={40}
        range={[0, 40]}
    />
        
    </CardContainer>
  );
};

export default WindCard;
