import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};

  li {
    padding: 20px;
    width: 650px;
    overflow: hidden;
    box-shadow: ${p => p.theme.shadow};
    border-radius: ${p => p.theme.radii.sm};
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
  transition: all all ${p => p.theme.transition};
`;
