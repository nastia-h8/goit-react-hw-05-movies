import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  margin-bottom: 12px;
`;

export const StyledBackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-decoration: none;
  color: inherit;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: rgba(0, 209, 255, 1);
  }
  svg {
    fill: currentColor;
  }
`;

export const AddInfoWrapper = styled.div`
  padding: 16px 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  text-align: left;

  h3 {
    margin-bottom: 12px;
  }
`;

export const List = styled.ul`
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  color: inherit;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  color: #423e3e;
  border: 1px solid rgba(0, 209, 255, 1);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: white;
    background-color: rgba(0, 209, 255, 1);
  }
`;
