import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  background-color: green;
  height: 20px;
  border-radius: 12px;
`;



const ProgressMeter = styled.div`
  display:flex;
  height: 100%;
  background-color: red;
  border-radius: 12px 0px 0px 12px;
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
