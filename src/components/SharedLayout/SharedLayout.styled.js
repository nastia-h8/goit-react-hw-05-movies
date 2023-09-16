import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

export const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 36px;
    line-height: 1.17;
  }
`;

export const Header = styled.header`
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  box-shadow: ${p => p.theme.shadow};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${p => p.theme.spacing(3)};
`;

export const Logo = styled.span`
  margin-right: 40px;
  width: 60px;
  height: 60px;
  background-image: url(${logo});
  background-size: cover;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: ${p => p.theme.spacing(1)};
  color: inherit;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.accent};
  }

  &.active {
    color: white;
    background-color: ${p => p.theme.colors.accent};
  }
`;
