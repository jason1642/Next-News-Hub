import * as React from 'react';
import CardContainer from './CardContainer';
import styled from 'styled-components';


const Triangle = styled.div`

  /* background-color: red; */
  width: 8px;
  height: 25px;
  background-image:
    linear-gradient(to bottom right, transparent 50%, red 0),
    linear-gradient(to top right, red 50%, transparent 0);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: left, right;

`;

const Circle = styled.div`
    width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: blue;

`;

const Wrapper = styled.div`
  display: flex;
  
  width: 12px;
  border: 1px solid white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
interface IWindCardProps {
    
  
    value: number;
}

const WindCard: React.FunctionComponent<IWindCardProps> = ({value}) => {
  return (
    <CardContainer icon={'windy'} title={'Wind'}>
        {value}

        <Wrapper>

            <Triangle 
        
        />

        <Circle/>
        </Wrapper>
        
    </CardContainer>
  );
};

export default WindCard;
