import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${p => p.theme.spacing(4)};
  margin: 0 auto;
`;

export const Item = styled.li`
  position: relative;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.shadow};
  overflow: hidden;
  transition: transform ${p => p.theme.transition};

  &:hover,
  :focus {
    transform: scale(0.98);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ImgWrapper = styled.div`
  height: 320px;
`;

export const Img = styled.img`
  object-fit: fill;
  height: 100%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: 16px 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 1.14;
  letter-spacing: 0.02em;
`;
