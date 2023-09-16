import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0.03em;
  color: inherit;
  transition: all ${p => p.theme.transition};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  svg {
    fill: ${p => p.theme.colors.accent};
  }
`;
