import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import GlobalStyle from '../GlobalStyle';
import Loader from '../Loader';

import {
  HeaderContainer,
  Header,
  Logo,
  Nav,
  StyledLink,
  Section,
  LogoTitle,
} from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo />
          <LogoTitle>
            <span>Cine</span>
            City
          </LogoTitle>

          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </HeaderContainer>
      </Header>
      <main>
        <Section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Section>
      </main>
      <Toaster toastOptions={{ duration: 2000 }} />
      <GlobalStyle />
    </>
  );
}
