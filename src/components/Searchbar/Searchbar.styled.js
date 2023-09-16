import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
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
  outline: none;
  color: ${p => p.theme.colors.secondary};
  cursor: pointer;
  transition: all ${p => p.theme.transition};

  &:hover,
  &:focus {
    color: #fff;
    background-color: ${p => p.theme.colors.accent};
  }
`;
