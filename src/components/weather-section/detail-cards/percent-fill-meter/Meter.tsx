import * as React from 'react';
import styled from 'styled-components';
import type {labels, value} from './types'
const Container = styled.div`
  display:flex;
  background-color: green;
  height: 85px;
  /* border-radius: 50%; */
  position: relative;
  overflow: hidden;

`;



const ProgressMeter = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 80px;
  background: lightblue;
  position: relative;
  border: 1px solid black;
  display:flex;
  /* justify-content: center;
  align-items: center; */
  overflow: hidden;
  z-index: 1;

  &:before{
    background: #f33ded;
  position: absolute;
  border: 10px dashed transparent;
  border-bottom: none;
  /* border-left: none; */
  /* border-rightt: none; */
  content: "";
  z-index: 3;
  left:0;
  top: 0;
  right:0;
  bottom: -25px;
  /* height: 80%; */
  border-radius: 100% 100% 0 0;



  }

  &:after{
    background: #99ff00;
  position: relative;
  width: 42%;
  height: 100%;
  /* border: 10px dashed black; */
  border-bottom: none;
  /* border-left: none; */
  /* border-rightt: none; */
  content: "";
  z-index: 2;
  left:0;
  top: 0;
  right:0;
  bottom: -25px;
  /* height: 80%; */
  border-radius: 100% 100% 0 0;


  }
 
`;

const Title = styled.div`
  display:flex;
  text-align: center;
  position: absolute;
  top: 50%;
  font-size: 1rem;
  margin: 0 auto;
  /* If title font size changes, change calc to 100% - fontsize */
  left: calc(50% - 1rem);
`;

interface IMeterProps {
  percentFilled: number;
  labels: labels;
}

const Meter: React.FunctionComponent<IMeterProps> = ({percentFilled, labels}) => {
  return (
     <Container>
     

    {/* Bar container */}
   
    {/* Meter with length proportioinal to % of range filled  */}
    <ProgressMeter style={{width: `${percentFilled}%`}}>

    </ProgressMeter>
<Title>
 80%
</Title>
</Container>
  );
};

export default Meter;
