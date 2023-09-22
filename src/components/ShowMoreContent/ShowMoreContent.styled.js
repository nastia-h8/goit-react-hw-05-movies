import styled from 'styled-components';

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
  transition: all all ${p => p.theme.transition};
`;
