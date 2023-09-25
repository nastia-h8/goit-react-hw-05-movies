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
  min-height: 400px;
  position: relative;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.shadow};
  overflow: hidden;
  transition: all ${p => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(0.98);
  }
`;

export const StyledLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0.03em;
  color: inherit;
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;

  svg {
    fill: ${p => p.theme.colors.accent};
  }
`;

export const ImgWrapper = styled.div`
  height: 320px;
  width: 100%;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  padding: 8px;
  width: 100%;
  min-height: 80px;
  /* justify-content: start; */
`;

export const Title = styled.h2`
  text-align: left;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.14;
  letter-spacing: 0.02em;
`;

export const Release = styled.p`
  text-align: left;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.secondary};
`;
