import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CalculateAnswer } from './CalculateAnswer';

export const CalculateAnswers = () => {
  const calculator = useSelector((store) => store.calculator);
  return (
    <Container>
      {calculator.calculats.map((el, index) => {
        return <CalculateAnswer answer={el} index={index} />;
      })}
    </Container>
  );
};
const Container = styled.ul`
    margin: 0;
    width: 100%;
    border-top: white 3px solid;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
`