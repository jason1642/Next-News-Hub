import * as React from 'react';
import CardContainer from './CardContainer';
import styled from 'styled-components';
import { GaugeMeter } from '@jason1642/react-dashboard-meter';
import AirIcon from '@mui/icons-material/Air';


interface IWindCardProps {
    
    value: number;
}

const WindCard: React.FunctionComponent<IWindCardProps> = ({value}) => {
    console.log(value)
    return (
    <CardContainer Icon={AirIcon} title={'Wind'}>

        <GaugeMeter 
        value={value}
        titleOptions={{
            appendedText: 'km/h',
            toFixedAmount: 2      
        }}
        progressBarOptions={{
            // fillerTriColors: ['white', 'blue']
        }}
        range={[0, 40]}
    />
        
    </CardContainer>
  );
};

export default WindCard;
