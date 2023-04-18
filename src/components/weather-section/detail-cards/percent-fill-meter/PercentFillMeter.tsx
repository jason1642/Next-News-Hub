import * as React from 'react';
import styled from 'styled-components';
import Meter from './Meter';

const Container = styled.div`
  display:flex;

`;

const Title = styled.div`
  display:flex;
`;

interface IPercentFillMeterProps {
    // Range: 0 - 40km
    //      Default: 0 - 100
    // 
    // Value: 68% | 12 | 
    // Labels: spread out evenly
    value: number;

    type?: 'linear' | 'arched';
    title: [string, string, string?] | string;
    range?: [number, number] | number;
    labels?: Array<string>;
    meterColor?: string;
}


const PercentFillMeter: React.FunctionComponent<IPercentFillMeterProps> = ({
    range = 100, value, labels = ['0%', '100%'], meterColor, title, type = 'linear'
}) => {

    const [percentFilled, setPercentFilled] = React.useState<number>(62)





    return (
        <Container>
            
        <Title>

        </Title>
        <Meter percentFilled={percentFilled}/>

        </Container>
    );
};

export default PercentFillMeter;
