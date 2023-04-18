import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  border: 1px solid black;
`;



const ProgressMeter = styled.div`
  display:flex;
  height: 100%;
  background-color: 'lightblue';
`;

interface IMeterProps {
  percentFilled: number;
}

const Meter: React.FunctionComponent<IMeterProps> = ({percentFilled}) => {
  return (
     <Container>
    {/* Bar container */}
   
    {/* Meter with length proportioinal to % of range filled  */}
    <ProgressMeter style={{width: `${percentFilled}%`}}>

    </ProgressMeter>

</Container>
  );
};

export default Meter;
