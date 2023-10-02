import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};

  li {
    padding: 20px;
    max-width: 650px;
    overflow: hidden;
    box-shadow: ${p => p.theme.shadow};
    border-radius: ${p => p.theme.radii.sm};
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;

  span {
    font-weight: 500;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: ${p => p.theme.radii.circle};
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoDate = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const InfoRating = styled.span`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: ${p => p.theme.colors.light};

  background-color: ${p => p.theme.colors.bgc};

  svg {
    fill: currentColor;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: all all ${p => p.theme.transition};
`;
