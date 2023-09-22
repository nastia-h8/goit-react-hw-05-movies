import styled from 'styled-components';

export const Container = styled.span`
  width: 50px;
`;

export const Filler = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  transform: translate(-50%, -50%);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }
`;

export const Label = styled.span`
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
