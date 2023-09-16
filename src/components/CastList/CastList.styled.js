import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 12px;
  margin: 0 auto;
`;

export const Item = styled.li`
  position: relative;
  width: 200px;
`;

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50px;

  font-size: 12px;
  line-height: 1.14;
  letter-spacing: 0.03em;

  color: #fff;
  background-color: rgba(47, 48, 58, 0.8);
  transform: translateY(-100%);
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
`;

export const Character = styled.p`
  span {
  }
`;
