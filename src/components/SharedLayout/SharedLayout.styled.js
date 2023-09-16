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
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
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
  gap: 12px;
`;

export const Logo = styled.span`
  margin-right: 40px;
  width: 60px;
  height: 60px;
  background-image: url(${logo});
  background-size: cover;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  color: inherit;
  font-size: 18px;
  line-height: 1.14;
  letter-spacing: 0.02em;

  &:hover,
  &:focus {
    color: #423e3e;
  }

  &.active {
    color: white;
    background-color: rgba(0, 209, 255, 1);
  }
`;
