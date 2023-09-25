import { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import { Button } from './ScrollToTop.styled';
import * as Scroll from 'react-scroll';

const scroll = Scroll.animateScroll;

export function ScrollToTop() {
  const [isBtnShow, setIsBtnShow] = useState(false);
  const scrollToTop = () => scroll.scrollToTop();

  useEffect(() => {
    const onScrollBtnShow = () =>
      window.scrollY > 100 ? setIsBtnShow(true) : setIsBtnShow(false);

    window.addEventListener('scroll', onScrollBtnShow);

    return () => {
      window.removeEventListener('scroll', onScrollBtnShow);
    };
  }, []);

  return (
    isBtnShow && (
      <Button onClick={scrollToTop}>
        <BsArrowUpShort size={50} />
      </Button>
    )
  );
}
