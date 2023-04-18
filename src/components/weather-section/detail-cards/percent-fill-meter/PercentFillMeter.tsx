import * as React from 'react';
import styled from 'styled-components';
import Meter from './Meter';
import { PercentFillMeterProps } from './types';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  background-color: orange;
  /* align-items: center; */
  justify-content: center;
`;

const Title = styled.div`
  display:flex;
  align-self: center;
  text-align: center;
`;

interface IPercentFillMeterProps  extends PercentFillMeterProps{
    // Range: 0 - 40km
    //      Default: 0 - 100
    // 
    // Value: 68% | 12 | 
    // Labels: spread out evenly
    
}


const PercentFillMeter: React.FunctionComponent<IPercentFillMeterProps> = ({
    range = 100, value = 62, labels = ['0%', '100%'], meterColor, title, type = 'linear'
}) => {

    const [percentFilled, setPercentFilled] = React.useState<number>(value)





    return (
        <Container>
            
        <Title>
            {value}%
        </Title>


        <Meter labels={labels} percentFilled={percentFilled}/>

        </Container>
    );
};

export default PercentFillMeter;
