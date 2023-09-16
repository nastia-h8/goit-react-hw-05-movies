import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 32px 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

export const ImgWrapper = styled.div`
  width: 250px;
  border-radius: 4px;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 300px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;
  text-align: left;
`;

export const Label = styled.span`
  font-weight: 700;
`;

export const Overview = styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
`;
