import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

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
  gap: ${p => p.theme.spacing(1)};
  width: 100px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-decoration: none;
  color: inherit;
  transition: color ${p => p.theme.transition};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};

    svg {
      fill: currentColor;
    }
  }
`;

export const AddInfoWrapper = styled.div`
  padding: 16px 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  text-align: left;

  h3 {
    font-size: 22px;
    margin-bottom: 12px;
  }
`;

export const List = styled.ul`
  margin-bottom: 20px;
  display: flex;
  gap: ${p => p.theme.spacing(3)};
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px 16px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  font-weight: 700;
  color: inherit;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  border: 1px solid ${p => p.theme.colors.accent};
  transition: all ${p => p.theme.transition};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.light};
    background-color: ${p => p.theme.colors.accent};
  }

  &.active {
    color: ${p => p.theme.colors.light};
    background-color: ${p => p.theme.colors.accent};
  }
`;
