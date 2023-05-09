'use client'
import * as React from 'react';
import CardContainer from './CardContainer';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import styled from 'styled-components';

interface IHumidityCardProps {
    value:number;
}

const ProgressMeter = styled(LinearProgress)`
  
`;
// 0 - 100% : good - normal - bad
const HumidityCard: React.FunctionComponent<IHumidityCardProps> = ({value,}) => {
    const statusText = React.useMemo(()=>{
      if(value < 33){
        return 'Okay'
      } else if(value < 66){
        return 'Moderate'
      } else {
        return 'Bad'
      }
    },[value])
    return (
    <CardContainer Icon={WaterDropIcon} title={'Humidity'}>
      {statusText}

    <LinearProgress variant="determinate" value={value} />

    </CardContainer>
  );
};

export default HumidityCard;
