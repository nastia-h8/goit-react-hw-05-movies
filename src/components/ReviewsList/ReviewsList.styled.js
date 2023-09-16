import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 12px;

  li {
    padding: 20px;
    width: 650px;
    overflow: hidden;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;
  }
`;

export const Author = styled.h3`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;

  span {
    font-weight: 500;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: all 250ms linear;
`;
