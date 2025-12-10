import React, {
  Suspense, lazy, useEffect, useRef, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@mui/material/Grid';
import styles from './Eslider.module.scss';

// Lazy load components
const PageTitle = lazy(() => import('../../components/PageTitle/PageTitle'));

type EsliderProps = {
  data: {
    id: number;
    image: string;
    text: string;
  }[];
};

function Eslider({ data }: EsliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null!); // Ref of scroll container
  const isLoading = useSelector((state: any) => state.app.appLoading);
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState<boolean>(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState<boolean>(false);

  const goToPrev = () => {
    scrollContainerRef.current?.scrollBy({
      left: -scrollContainerRef.current.offsetWidth / data.length,
      behavior: 'smooth',
    });

    if (scrollContainerRef.current?.scrollLeft === 0) {
      setIsPrevBtnDisabled(true);
    } else {
      setIsPrevBtnDisabled(false);
    }
  };

  const goToNext = () => {
    scrollContainerRef.current?.scrollBy({
      left: scrollContainerRef.current.offsetWidth / data.length,
      behavior: 'smooth',
    });

    if (
      scrollContainerRef.current
      && scrollContainerRef.current.scrollLeft
      + scrollContainerRef.current.offsetWidth
      >= scrollContainerRef.current.scrollWidth
    ) {
      setIsNextBtnDisabled(true);
    } else {
      setIsNextBtnDisabled(false);
    }
  };

  /**
   * Handles scrolling events to enable/disable navigation buttons
   */
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setIsPrevBtnDisabled(scrollContainerRef.current.scrollLeft === 0);
      setIsNextBtnDisabled(
        scrollContainerRef.current.scrollLeft
        + scrollContainerRef.current.offsetWidth
        >= scrollContainerRef.current.scrollWidth,
      );
    }
  };

  useEffect(() => {
    setIsPrevBtnDisabled(true);
  }, []);

  const slides = data.map((slide, i) => {
    const slideLength = data.length - 1;
    const isLastSlide = slideLength === i ? '0' : '2%';
    return (
      <div
        key={slide.id}
        style={{
          backgroundImage: `url(${slide.image})`,
          marginRight: isLastSlide,
        }}
        className={`${styles.Slide} ${!isLoading ? styles.isBlurred : ''}`}
      >
        <div className={styles.OverlayText}>{slide.text}</div>
        <div className={styles.Overlay} />
      </div>
    );
  });

  return (
    <Grid container component="section" className={styles.EsliderContainer}>
      <Grid item xs={12} mb={6}>
        <Suspense fallback="<div>Loading...</div>">
          <PageTitle title="EasySlider" />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className={styles.Eslider}
        >
          <div className={styles.SlideContainer}>{slides}</div>
          <div className={styles.SlideBtns}>
            <button
              type="button"
              aria-label="left"
              onClick={goToPrev}
              disabled={isPrevBtnDisabled}
            >
              <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            </button>
            <button
              type="button"
              aria-label="right"
              onClick={goToNext}
              disabled={isNextBtnDisabled}
            >
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Eslider;
