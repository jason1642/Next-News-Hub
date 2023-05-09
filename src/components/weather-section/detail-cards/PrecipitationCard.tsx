import * as React from 'react';
import CardContainer from './CardContainer';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import styled from 'styled-components';
import GrainIcon from '@mui/icons-material/Grain';
interface IPrecipitationCardProps {

    value: number;
}
const ProgressMeter = styled(LinearProgress)`
  height: .6rem;
  margin: 10px auto;
  border-radius:12px;
`;
const ValueWrapper = styled.div`
  display:flex;
  justify-content: center;
`;
const PrecipitationCard: React.FunctionComponent<IPrecipitationCardProps> = ({value}) => {
    console.log(value)

  return (
    <CardContainer Icon={GrainIcon} title={'Precipitation'}>
      <ValueWrapper>

        {value} cm
      </ValueWrapper>
        <ProgressMeter variant="determinate" value={value} />

    </CardContainer>
  );
};

export default PrecipitationCard;
