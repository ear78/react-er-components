import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Eslider.module.scss';

type EsliderProps = {
  data: {
    image: string;
    text: string;
  }[];
  mounted: boolean;
};

function Eslider({ data, mounted }: EsliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null!); // Ref of scroll container

  /**
   * Handles scrolling event and positions the slider depending on container width
   * and position
   */
  const handleScroll = ($arg: number) => {
    const sWidth = scrollContainerRef.current.scrollWidth; // Get scroll width of container
    const sPosition = scrollContainerRef.current.scrollLeft; // Get scroll position

    if (sPosition > 1 && $arg === 1) {
      scrollContainerRef.current.scrollTo(0, 0);
    } else if (sPosition !== sWidth && $arg !== 1) {
      scrollContainerRef.current.scrollTo(sWidth, 0);
    }
  };

  const slides = data.map((slide, i) => {
    const slideLength = data.length - 1;
    const isLastSlide = slideLength === i ? '0' : '2%';
    return (
      <div
        key={slide.image}
        style={{ backgroundImage: `url(${slide.image})`, marginRight: isLastSlide }}
        className={`${styles.Slide} ${mounted ? styles.isBlurred : ''}`}
      >
        <div className={styles.OverlayText}>{slide.text}</div>
        <div className={styles.Overlay} />
      </div>
    );
  });

  return (
    <div ref={scrollContainerRef} className={styles.EsliderContainer}>
      <div className={styles.SlideContainer}>
        {slides}
      </div>
      <div className={styles.SlideBtns}>
        <span role="button" aria-label="left" tabIndex={0} onClick={() => handleScroll(1)}><FontAwesomeIcon icon={['fas', 'chevron-left']} /></span>
        <span role="button" aria-label="right" tabIndex={0} onClick={() => handleScroll(2)}><FontAwesomeIcon icon={['fas', 'chevron-right']} /></span>
      </div>
    </div>
  );
}

export default Eslider;
