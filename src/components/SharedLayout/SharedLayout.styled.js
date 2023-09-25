import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

export const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
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
  /* gap: ${p => p.theme.spacing(6)}; */
  padding: 0 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

export const LogoTitle = styled.div`
  margin-right: 20px;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.19;
  letter-spacing: 0.03em;

  span {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${p => p.theme.spacing(3)};
`;

export const Logo = styled.span`
  margin-right: 20px;
  width: 60px;
  height: 60px;
  background-image: url(${logo});
  background-size: cover;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  padding: 24px 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;
  border-radius: ${p => p.theme.spacing(1)};
  color: inherit;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  &.active {
    /* color: white; */
    color: ${p => p.theme.colors.accent};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: ${p => p.theme.colors.accent};
      border-radius: 2px;
    }
  }
`;
