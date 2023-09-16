import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;

  border: 1px solid gray;
  border-radius: 4px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 4px 8px;

  font: inherit;
  font-size: 20px;
  color: #423e3e;
  border: none;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  transition: all 250ms linear;
  cursor: pointer;
  outline: none;
  color: #757575;

  &:hover,
  &:focus {
    color: #fff;
    background-color: rgba(0, 209, 255, 1);
  }
`;
