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
  height: .6rem;
  margin: 10px auto;
  border-radius:12px;
`;

const StatusValue = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
`;
const Span = styled.span`
  font-weight:bold;
  margin-right: 4px;
`;
// 0 - 100% : good - normal - bad
const HumidityCard: React.FunctionComponent<IHumidityCardProps> = ({value,}) => {
    const statusText = React.useMemo(()=>{
      if(value < 33){
        return 'Good'
      } else if(value < 66){
        return 'Normal'
      } else {
        return 'Bad'
      }
    },[value])
    return (
    <CardContainer Icon={WaterDropIcon} title={'Humidity'}>
      <StatusValue> <Span>{value.toFixed(0)}%</Span>
       {statusText}
        </StatusValue> 
       

    <ProgressMeter variant="determinate" value={value} />

    </CardContainer>
  );
};

export default HumidityCard;
