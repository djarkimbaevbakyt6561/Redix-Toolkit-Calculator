import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  getValueInputOneAction,
  getValueInputTwoAction,
  getSelectValueAction,
  calculatorActions,
} from '../store/calculator';
import { CalculateAnswers } from './calculator/CalculateAnswers';

export const Calculator = () => {
  const calculator = useSelector((store) => store.calculator);
  const dispatch = useDispatch();
  console.log(calculator);
  function getSelectValue(e) {
    dispatch(calculatorActions.getSelect(e.target.value));
  }
  function getInputOneValue(e) {
    dispatch(calculatorActions.getValueOfInputOne(Number(e.target.value)));
  }
  function getInputTwoValue(e) {
    dispatch(calculatorActions.getValueOfInputTwo(Number(e.target.value)));
  }
  function resultHandler(e) {
    e.preventDefault();
    if (calculator.inputOne === '' || calculator.inputTwo === '') {
      alert('Заполните значение!');
    } else {
      switch (calculator.operator) {
        case 'PLUS':
          dispatch(calculatorActions.plusHandler());
          break;
        case 'MINUS':
          dispatch(calculatorActions.minusHandler());
          break;
        case 'MULTIPLICATION':
          dispatch(calculatorActions.multiplicationHandler());
          break;
        case 'DIVISION':
          dispatch(calculatorActions.divisionHandler());
          break;
        default:
          break;
      }
      dispatch(calculatorActions.addCalculate());
      dispatch(calculatorActions.resetHandler());
    }
  }

  console.log(calculator.calculats);
  useEffect(() => {
    localStorage.setItem('Calculats', JSON.stringify(calculator.calculats));
  }, [calculator.calculats]);
  return (
      <Form>
        <h1>Calculator</h1>
        <OperatorContainer>
          <Input
            value={calculator.inputOne}
            type="number"
            onChange={getInputOneValue}
          />
          <select onChange={getSelectValue} name="Arifmetic action" id="">
            <option value="PLUS">+</option>
            <option value="MINUS">-</option>
            <option value="MULTIPLICATION">x</option>
            <option value="DIVISION">/</option>
          </select>
          <Input
            value={calculator.inputTwo}
            type="number"
            onChange={getInputTwoValue}
          />
          <button onClick={resultHandler}>=</button>
        </OperatorContainer>
        <CalculateAnswers />
      </Form>
  );
};

const CalcultsContainer = styled.div``;
const Form = styled.form`
  margin-top: 30px;
  border-radius: 10px;
  background-color: #ffc83d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
const OperatorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  select {
    height: 40px;
    width: 50px;
    text-align: center;
    background-color: #504f4f;
    color: white;
    font-size: 24px;
    border-radius: 10px;
    border: none;
    :focus {
      background-color: #bbebeb;
      color: black;
    }
  }
  button {
    height: 40px;
    width: 50px;
    text-align: center;
    background-color: #504f4f;
    color: white;
    font-size: 24px;
    border-radius: 10px;
    border: none;
    :active {
      background-color: #bbebeb;
      color: black;
    }
  }
  p {
    margin: 0;
    font-size: 20px;
  }
`;
const Input = styled.input`
  width: 150px;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  text-align: center;
  :focus {
    background-color: #bbebeb;
  }
`;
