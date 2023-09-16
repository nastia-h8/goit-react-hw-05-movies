import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0.03em;

  &:hover,
  &:focus {
    color: rgba(0, 209, 255, 1);
  }

  svg {
    fill: rgba(0, 209, 255, 1);
  }

  transition: all 250ms linear;

  /* padding-left: 28px; */
  /* &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    color: tomato;
    background-color: tomato;
  } */
`;
