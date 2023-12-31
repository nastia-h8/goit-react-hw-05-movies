import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(6)};
  padding: 32px 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};

  svg {
    fill: ${p => p.theme.colors.light};
  }
`;

export const ImgWrapper = styled.div`
  width: 250px;
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  text-align: left;
  color: ${p => p.theme.colors.light};

  h2 {
    font-size: 26px;
  }
`;

export const Overview = styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
`;
