import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;

  /* transition: all ${p => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(0.98);
    box-shadow: ${p => p.theme.shadow};
  } */

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

export const Wrapper = styled.div`
  padding: 16px 4px;
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

// with swiper
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export const StyledLink = styled(Link)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-decoration: none;
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 1.14;
//   letter-spacing: 0.03em;
//   color: inherit;
//   border-radius: ${p => p.theme.radii.sm};
//   overflow: hidden;

//   transition: all ${p => p.theme.transition};

//   &:hover,
//   &:focus {
//     transform: scale(0.98);
//     box-shadow: ${p => p.theme.shadow};
//   }

//   svg {
//     fill: ${p => p.theme.colors.accent};
//   }
// `;

// export const ImgWrapper = styled.div`
//   height: 100%;
//   width: 100%;
// `;

// export const Img = styled.img`
//   object-fit: cover;
//   height: 100%;
//   overflow: hidden;
// `;

// export const Wrapper = styled.div`
//   padding: 16px 4px;
//   min-height: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const Title = styled.h2`
//   font-size: 18px;
//   line-height: 1.14;
//   letter-spacing: 0.02em;
// `;

// export const StyledSwiper = styled(Swiper)`
//   width: 100%;
//   height: 100%;
//   padding-bottom: 16px !important;
// `;

// export const StyledSlide = styled(SwiperSlide)`
//   padding: 8px;
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
